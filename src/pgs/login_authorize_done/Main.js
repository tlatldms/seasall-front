import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IconSignup from 'asset/images/icon_signup.png';
import LogoChecker from 'asset/images/logo_checker.png';

class login_authorize_done extends Component {
    render() {
        return (
            <article id="contentsWrap" className="login login03">
                <div className="box_contents">
                    <div className="box_logo">
                        <img src={LogoChecker} alt=""/>
                    </div>
                    <div className="box_login">
                        <div className="box_mid">
                            <img src= {IconSignup} alt="" />
                            <p className="tit">회원가입이 <br/>완료되었습니다!</p>
                            <p className="txt"><span className="user_name">이흥수</span>님의 가입을 환영합니다.<br/>로그인하여 서비스를 이용해보세요.</p>
                        </div>
                        <div className="box_bottom">
                            <button className="btn_big"><Link to="/">로그인 하기</Link></button>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

export default login_authorize_done;