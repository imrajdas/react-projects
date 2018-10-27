import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Archived from './src/components/Archived'
import Featured from './src/components/Featured'
import Settings from './src/components/Settings'
import Home from './src/components/Home'

ReactDOM.render( 
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/archived" component={Archived} />
                <Route path="/featured" component={Featured} />
                <Route path="/settings" component={Settings} />
            </Switch>
        </div>
    </Router>, 
    document.getElementById('app')
);  

