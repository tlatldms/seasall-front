import React, { Component } from 'react';
import Login from './Login';
import Manager from './Manager';
import Print from './Print';
import { Route, Redirect } from 'react-router-dom';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


const App = ( ) => {
        return (
 
                <div>
                    <Route exact path="/" render={()=>(<Redirect to="login/main" />)} />
                    <Login />
                    <Manager />
                    <Print />
                </div>
        );
};

export default App;
