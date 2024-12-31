const RWD=artifacts.require("RWD");
const Tether=artifacts.require("Tether");
const DecentralBank=artifacts.require("DecentralBank");

require('chai')
.use(require('chai-as-promised'))
.should();

contract('DecentralBank',(accounts)=>{
    let tether,rwd,decentralBank;
    
    before(async()=>{
        tether=await Tether.new();
        rwd=await RWD.new();
        decentralBank=await DecentralBank.new(rwd.address,tether.address);
    
        // transfer rwd to back
        await rwd.transfer(decentralBank.address,'1000000000000000000000000');
    
        // transfer 100 tether to each account initially
        await tether.transfer(accounts[1],'100000000000000000000');
    });
    
    describe('Mock Tether deployment',async()=>{
        it('matches name successfully',async()=>{
            const name=await tether.name();
            assert.equal(name,'Tether');
        });
    });
    
    describe('Mock RWD deployment',async()=>{
        it('matches name successfully',async()=>{
            const name=await rwd.name();
            assert.equal(name,'Reward Token');
        });
    });
    
    describe('Decentral Bank deployment',async()=>{
        it('matches name successfully',async()=>{
            const name=await decentralBank.name();
            assert.equal(name,'Decentral Bank');
        });
    
        it('contract has tokens',async()=>{
            let balance=await rwd.balanceOf(decentralBank.address);
            assert.equal(balance.toString(),'1000000000000000000000000');
        });
    });
    
    describe('Yield Farming',async()=>{
        it('rewards tokens for staking',async()=>{
            let result;
    
            // check staking balance
            result=await tether.balanceOf(accounts[1]);
            assert.equal(result.toString(),'100000000000000000000','user tether wallet balance correct before staking');
    
            // approve staking
            await tether.approve(decentralBank.address,'100',{from:accounts[1]});
    
            // stake tether tokens
            await decentralBank.depositTokens('100',{from:accounts[1]});
    
            // check updated balance
            result=await tether.balanceOf(accounts[1]);
            assert.equal(result.toString(),'99999999999999999900','user tether wallet balance correct after staking');
    
            // check updated balance
            result=await tether.balanceOf(decentralBank.address);
            assert.equal(result.toString(),'100','decentral bank tether wallet balance correct after staking');
    
            // check staking balance
            result=await decentralBank.stakingBalance(accounts[1]);
            assert.equal(result.toString(),'100','user staking balance correct after staking');
    
            // check staking status
            result=await decentralBank.isStaking(accounts[1]);
            assert.equal(result.toString(),'true','user staking status correct after staking');

            // issue tokens
            await decentralBank.issueTokens({from:accounts[1]});
        });
    });
});