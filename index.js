import { ReactDOM, render } from 'react-dom';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './src/index';


//ReactDOM.render(<Home/>, document.getElementById('container'))
render(
    <BrowserRouter>
        <Route path="/" component={Home}/>
    </BrowserRouter>,
    document.getElementById('container')
);