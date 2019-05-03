import React, { Component } from 'react';
import LogoChecker from 'asset/images/logo_checker.png';
import IconComplete from 'asset/images/icon_complete.png';

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
                            <img src={IconComplete} alt="" />
                            <p className="tit">새로운 비밀번호로 <br/>변경이 완료되었습니다.</p>
                            <p className="txt">변경된 비밀번호로 로그인해주세요.</p>
                        </div>
                        <div className="box_bottom">
                            <button className="btn_big">로그인 하기</button>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

export default Main;