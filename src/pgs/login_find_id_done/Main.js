import React, { Component } from 'react';
import LogoChecker from 'asset/images/logo_checker.png';
import IconComplete from 'asset/images/icon_complete.png';
import { Link } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <article id="contentsWrap" className="login login03">
                <div className="box_contents">
                    <div className="box_logo">
                        <img src={LogoChecker} alt=""/>
                    </div>
                    <div className="box_login">
                        <div className="box_mid">
                            <img src={ IconComplete } alt="" />
                            <p className="tit">아이디 찾기가 <br/>완료되었습니다!</p>
                            <p className="txt">입력하신 정보와 일치하는 결과입니다.</p>
                            <div className="id_box">
                                <p>{this.props.location.state.email}</p>
                            </div>
                        </div>
                        <div className="box_bottom">
                            <button className="btn_big_b"><Link to="/login_find_pw">비밀번호 찾기</Link></button>
                            <button className="btn_big"><Link to="/">로그인 하기</Link></button>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

export default Main;