import React,{ Component, useState } from 'react'
import Navbar from './components/navbar'
import Web3 from 'web3'
import Tether from '../build/contracts/Tether.json'
import Reward from '../build/contracts/RWD.json'
import DecentralBank from '../build/contracts/DecentralBank.json'

import MainContainer from './components/maincontainer'
import Airdrop from './components/airdrop'

class App extends Component {
  async UNSAFE_componentWillMount(){
    await this.Web3()
    await this.loadBlockchainData()
  }

  async loadBlockchainData(){
    const web3=window.web3
    const accounts=await web3.eth.getAccounts()
    this.setState({account:accounts[0]})

    const networkId = await web3.eth.net.getId()

    // load the tether contract
    const tetherData= Tether.networks[networkId]
    if(tetherData){
      const tether = new web3.eth.Contract(Tether.abi,tetherData.address)
      this.setState({tether})

      let tetherBalance=await tether.methods.balanceOf(this.state.account).call()
      this.setState({tetherBalance: tetherBalance.toString()})
    }else{
      window.alert('Tether contract not deployed to detected network')
    }


    // load the rwd contract
    const rewardData=Reward.networks[networkId]
    if(rewardData){
      const rwd = new web3.eth.Contract(Reward.abi,rewardData.address)
      this.setState({rwd})

      let rwdBalance=await rwd.methods.balanceOf(this.state.account).call()
      this.setState({rwdBalance: rwdBalance.toString()})
    }else{
      window.alert('Reward contract not deployed to detected network')
    }

    // load the decentralBank contract
    const decentralBankData=DecentralBank.networks[networkId]
    if(decentralBankData){
      const decentralBank = new web3.eth.Contract(DecentralBank.abi,decentralBankData.address)
      this.setState({decentralBank})

      let stakingBalance=await decentralBank.methods.stakingBalance(this.state.account).call()
      this.setState({stakingBalance: stakingBalance.toString()})
    }else{
      window.alert('Decentral Bank contract not deployed to detected network')
    }

    this.setState({loading:false})
  }
  async Web3(){
    if(window.ethereum){
      window.web3=new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if(window.web3){
      window.web3=new Web3(window.web3.currentProvider)
    }
    else{
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  constructor(props){
    super(props)
    this.state={
        account:"0x00",
        tether:{},
        rwd:{},
        decentralBank:{},
        tetherBalance:0,
        rwdBalance:0,
        stakingBalance:0,
        loading:true
    }
  }

  stakeTokens=(amount)=>{
    this.setState({loading:true})
    this.state.tether.methods.approve(this.state.decentralBank._address,amount).send({from:this.state.account}).on('transactionHash',(hash)=>{
      this.state.decentralBank.methods.depositTokens(amount).send({from:this.state.account}).on('transactionHash',(hash)=>{
        this.setState({loading:false})
      })
    })
  }

  unstakeTokens=(amount)=>{
    this.setState({loading:true})
    this.state.decentralBank.methods.unstakeTokens(amount).send({from:this.state.account}).on('transactionHash',(hash)=>{
      this.setState({loading:false})
    })
  }

  render(){
    let content;
    {this.state.loading ? <p id='loader'>Loading Please !!!</p> :content=<MainContainer tetherbalance={this.state.tetherBalance}rewardbalance={this.state.rwdBalance}stakingbalance={this.state.stakingBalance}stakeTokens={this.stakeTokens}unstakeTokens={this.unstakeTokens}/>}
    return(
      <>
      <Navbar account={this.state.account}/>
      {content}
      <Airdrop/>
      </>
    )
  }
}

export default App
