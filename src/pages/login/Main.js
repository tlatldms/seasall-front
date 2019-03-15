import React, { Component } from 'react';
import Logo from 'images/logo.png';
import './Main.scss';
import { Link } from 'react-router-dom';
import * as service from 'AxiosGetApi';
import axios from 'axios';
import Form from './Form';


class Main extends Component {



    render() {
        return (
            <div>
                <img src={Logo} class="login-main-logo" alt=""/>
                <Form />
                <div class="s-mng-btns">
                    <Link to="/login/new"><div>회원가입</div></Link>
                    <Link to="/login/findid"><div>아이디찾기</div></Link>
                    <Link to="/login/findpw"><div>비밀번호찾기</div></Link>
                </div>
                <hr class="hr"></hr>
                <h5>아직 사용권한이 없으신가요?</h5>
                <Link to="/login/authorize"><button type="submit" class="athrz-btn">사용권한요청</button></Link>
        </div>
        );
    }
}

export default Main;
