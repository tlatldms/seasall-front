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
                <form onSubmit={this.handleSubmit}>
                    <div class="label_login_chk">
                        <input
                            name="loginchk"
                            type="checkbox"
                            id="login_chk"
                        />
                        <label for="login_chk" id="label_login_chk" >자동 로그인</label></div>
                        <br></br>
                        <input
                            name="userid"
                            type="text"
                            placeholder="User ID"
                            class="front-input"
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            class="last-input"
                        />
                    <Link id="login-a" to="/manager/main"><button type="submit">로그인</button></Link>
                </form>
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