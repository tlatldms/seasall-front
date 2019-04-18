import React, { Component } from 'react';
import LogoChecker from 'asset/images/logo_checker.png';
import IconComplete from 'asset/images/icon_complete.png';

class Main extends Component {
    render() {
        return (
            <article id="contentsWrap" class="login login03">
                <div class="box_contents">
                    <div class="box_logo">
                        <img src={LogoChecker} />
                    </div>
                    <div class="box_login">
                        <div class="box_mid">
                            <img src={ IconComplete } alt="" />
                            <p class="tit">아이디 찾기가 <br/>완료되었습니다!</p>
                            <p class="txt">입력하신 정보와 일치하는 결과입니다.</p>
                            <div class="id_box">
                                <p>lhsworker@hyundai.com</p>
                            </div>
                        </div>
                        <div class="box_bottom">
                            <button class="btn_big_b">비밀번호 찾기</button>
                            <button class="btn_big">로그인 하기</button>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

export default Main;