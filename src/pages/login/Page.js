import React, { Component } from 'react';
import Details from './Details';
import './Page.scss';
import Logo from 'images/bi_4.png';
import { Link } from 'react-router-dom';

class Page extends Component {
    render() {
        return (
            <div class="whole">
                <div class="login-bg">
                
                <Link to="/login/main"><img class= {(window.location.pathname !== '/login/main')? "logo" : "logo main-no-logo"} src= {Logo} alt=""/></Link>
                    <div class="login-container">
                        <Details></Details>
                    </div>
                </div>
               
            </div>
        );
    }
}

export default Page;