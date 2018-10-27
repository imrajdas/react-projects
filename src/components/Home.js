import React, {Component} from 'react';

export default class Home extends Component {
    
    navigate(){
        console.log(this.props)
        this.props.history.replaceState(null, "/");
    }

    render(){
        return (
            <div>
                <h1>Hi, This Home page </h1>
                <h2>Links are give below</h2>
                <a href="archived">archived</a><br/>
                <a href="featured">featured</a><br/>
                <a href="settings">settings</a><br/>
                <a href="home">home</a><br/>
                <button onClick={this.navigate.bind(this)}>Click me</button>
            </div>
        )     
    }
}