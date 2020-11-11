import React from 'react'
import '../Asset/Search'
export class Searchbar  extends React.Component{
    constructor(props){
        super(props)
        this.state ={searchText:"haha"}
        this.EnterInput = this.EnterInput.blind(this)
    }
    EnterInput(e){
        //dung handel su kien onchane
        this.setState({searchText:e.target.value})
        // thay vi lam cai nay thi lam sao de no filter ra
        console.log(this.state.searchText)
    }
    render(){
        return(
            <input onChange={this.EnterInput} className="Search" placeholder="Search emoji"></input>
        )
    }
}