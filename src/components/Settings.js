import React, {Component} from 'react';

export default class Settings extends Component {
    
    navigate(){
        console.log(this.props)
        this.props.history.replaceState(null, "/");
    }


    render(){
        console.log(this.props)
        return (
            <div><h1>Hi, This Settings page </h1>
            <button onClick={this.navigate.bind(this)}>Click me</button>
            </div>
        )     
    }
}