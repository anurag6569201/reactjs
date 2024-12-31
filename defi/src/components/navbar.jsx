import React,{Component} from 'react'

class Navbar extends Component{
    render(){
        return(
            <h1>{this.props.account}</h1>
        )
    }
}

export default Navbar