import { render } from "@testing-library/react"
import React from "react"
export class Searchbar extends React.Component{
    constructor(props){
        super(props)
        this.state = {searchtext:''}
        this.EnterInput = this.EnterInput.blind(this)

    }
    EnterinPut(e){
        this.setState({searchText:e.target.value})
        //thay bi log cai nay thi lam gi do de loc ra
        console.log(this.searchText)
    }
}
render(){

}