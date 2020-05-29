import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '@/pages/home';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route  path="/" component={Home}/>   
        </Switch>
    </HashRouter>
);


export default BasicRoute;