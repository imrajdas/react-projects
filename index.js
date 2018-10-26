import { ReactDOM, render } from 'react-dom';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './src/components/Login';


//ReactDOM.render(<Home/>, document.getElementById('container'))
render(<Login/>,
    document.getElementById('app')
);  