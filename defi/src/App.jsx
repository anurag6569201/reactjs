import React,{ Component, useState } from 'react'
import Navbar from './components/navbar'
import Web3 from 'web3'

class App extends Component {
  async UNSAFE_componentWillMount(){
    await this.Web3()
    await this.loadBlockchainData()
  }

  async loadBlockchainData(){
    const web3=window.web3
    const accounts=await web3.eth.getAccounts()
    this.setState({account:accounts[0]})
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

  render(){
    return(
      <Navbar account={this.state.account}/>
    )
  }
}

export default App
