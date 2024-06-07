import React from 'react'

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count1: 0,
            count2: 0
        }
    }
    render(){
        return(
            <div>
            <h1>{this.props.name}</h1>
            <h2>{this.props.place}</h2>
            <h3>{this.state.count1}</h3>
            <button onClick={()=>{this.setState({count1:this.state.count1+1})}}>Click</button>
            <h3>{this.state.count2}</h3>
        </div>
        )
    }
}

export default UserClass