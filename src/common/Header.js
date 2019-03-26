import React, { Component } from 'react';
import Logo from 'images/seasall-mini-logo.png';


class ManagerHeader extends Component {

    render() {
        return (
            <div>
            <div class="header-box">
                <div class="welcome">
                    <div></div>
                    <img src={Logo} class="header-logo" alt=""/>    
                    <div class="on"></div>
                    <div class="hi">이흥수 님, 안녕하세요</div>
                    <div class="logout-button">로그아웃</div>
                    
                </div>
            </div>
            </div>
        );
    }
}

export default ManagerHeader;