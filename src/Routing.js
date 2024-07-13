// Routing.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';

const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route path="/:section" component={Navigation} />
                <Route path="/" component={Navigation} />
            </Switch>
        </Router>
    );
};

export default Routing;
