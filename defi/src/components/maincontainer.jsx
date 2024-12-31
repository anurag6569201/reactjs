import React, { Component } from 'react'

class MainContainer extends Component {
    render() {
        return (
          <div className="container mt-5">
            <h1 className="text-center">Decentralized Banking - Yield Staking</h1>
            <div className="row mt-4">
              <div className="col-md-4">
                <div className="card text-center">
                  <div className="card-header">Staking Balance</div>
                  <div className="card-body">
                    <h5 className="card-title"><strong>{window.web3.utils.fromWei(this.props.stakingbalance , 'ether')}</strong> USDT</h5>
                  </div>
                </div>
              </div>
      
              <div className="col-md-4">
                <div className="card text-center">
                  <div className="card-header">Reward Balance </div>
                  <div className="card-body">
                    <h5 className="card-title"><strong>{window.web3.utils.fromWei(this.props.rewardbalance , 'ether')}</strong> RWD</h5>
                  </div>
                </div>
              </div>
      
              <div className="col-md-4">
                <div className="card text-center">
                  <div className="card-header">Token Balance</div>
                  <div className="card-body">
                    <h5 className="card-title"><strong>{window.web3.utils.fromWei(this.props.tetherbalance , 'ether')}</strong> Tokens</h5>
                  </div>
                </div>
              </div>
            </div>
      
            <div className="row mt-4 text-center">
              <div className="col-md-4">
                <form onSubmit={this.handleDeposit}>
                  <div className="mb-3">
                    <input 
                      type="number" 
                      className="form-control" 
                      placeholder="Amount to Deposit" 
                      id="depositAmount"
                      name="depositAmount"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Deposit
                  </button>
                </form>
              </div>
              <div className="col-md-4">
                <form onSubmit={this.handleWithdraw}>
                  <div className="mb-3">
                    <input 
                      type="number" 
                      className="form-control" 
                      placeholder="Amount to Withdraw" 
                      id="withdrawAmount"
                      name="withdrawAmount"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-danger w-100">
                    Withdraw
                  </button>
                </form>
              </div>
              <div className="col-md-4">
                <button className="btn btn-success w-100">
                  Airdrop
                </button>
              </div>
            </div>
          </div>
        );
    }

    handleDeposit = (event) => {
        event.preventDefault();
        let depamount = event.target.depositAmount.value;
        depamount=window.web3.utils.toWei(depamount, 'ether');
        console.log("Deposit depamount:", depamount);
        this.props.stakeTokens(depamount);
    }

    handleWithdraw = (event) => {
        event.preventDefault();
        let widamount = event.target.withdrawAmount.value;
        widamount=window.web3.utils.toWei(widamount, 'ether');
        console.log("Withdraw widamount:", widamount);
        // Add logic to handle withdraw
        this.props.unstakeTokens();
    }
}

export default MainContainer
