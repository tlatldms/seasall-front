import React, { Component } from 'react';
import Logo from 'images/logo.png';
import { Link } from 'react-router-dom';
import * as service from 'AxiosGetApi';
import axios from 'axios';
import LoginForm from './LoginForm';


class Main extends Component {



    render() {
        return (
            <div class="whole">
                <div class="login-bg">
                    <div class="login-container">
                        <img src={Logo} class="login-main-logo" alt=""/>
                        <LoginForm />
                        <div class="s-mng-btns">
                            <Link to="/login_new_user"><div>회원가입</div></Link>
                            <Link to="/login_find_id"><div>아이디찾기</div></Link>
                            <Link to="/login_find_pw"><div>비밀번호찾기</div></Link>
                        </div>
                        <hr class="hr"></hr>
                        <h5>아직 사용권한이 없으신가요?</h5>
                        <Link to="/login_authorize"><button type="submit" class="athrz-btn">사용권한요청</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
