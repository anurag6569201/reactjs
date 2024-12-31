import React,{Component} from "react";

class Airdrop extends Component{
    constructor(){
        super()
        this.state={
            timer:{},
            seconds:20
        };
        this.timer=0;
        this.startTimer=this.startTimer.bind(this);
        this.countDown=this.countDown.bind(this);
    }
    startTimer(){
        if(this.timer==0 && this.state.seconds>0){
            this.timer=setInterval(this.countDown,1000);
        }
    }
    countDown(){
        let seconds=this.state.seconds-1;
        this.setState({
            seconds:seconds
        });
        if(seconds==0){
            clearInterval(this.timer);
        }
    }

    airdropReleaseToken(){
        let stakingB=this.props.stakingBalance;
        if(stakingB>="5000000000000000000"){
            this.startTimer();
        }
    }
    render(){
        return(
            <div>
                <h1>Airdrop</h1>
                <button onClick={this.startTimer}>Start</button>
                <h2>{this.state.seconds}</h2>
            </div>
        );
    }
}

export default Airdrop