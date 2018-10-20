import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route} from 'react-router';

export default class Home extends Component {
    render(){
        return (
            <div><h1></h1>Hi</div>
        );
    }
}
// render(
//     <Router>
//         <Route path="/" component={Home}/>
//     </Router>,
//     document.getElementById('container')
// );
