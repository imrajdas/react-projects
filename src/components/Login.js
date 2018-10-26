import React, {Component} from 'react';

export default class Log extends Component{
    
    constructor(){
        super();
        this.state.title = "Raj"
    }

    render(){
        return(
            <div><h1>Hi, {this.state.title}</h1></div>
        )     
    }
}