import React, { Component } from 'react';
import LogoChecker from 'asset/images/logo_checker.png';

class Main extends Component {
    render() {
        return (
            <article id="contentsWrap" class="login login02 login04">
                <div class="box_contents">
                    <div class="box_logo">
                        <img src={LogoChecker}/>
                    </div>
                    <form action="#" acceptCharset="utf-8" name="login06" method="get">
                        <div class="box_login">
                            <div class="box_top">
                                <p>새로운 비밀번호를 입력하세요.</p>
                            </div>
                            <div class="box_mid">
                                <div class="input_box01">
                                    <div class="ip_box01"><input id="find_password01" name="user_password01" type="text" placeholder="8-16자의 영문, 숫자, 특수문자 조합된 비밀번호" /></div>
                                    <div class="ip_box01"><input id="find_password01_1" name="user_password01_1" type="text" placeholder="비밀번호 확인" /></div>
                                </div>
                            </div>
                            <div class="box_bottom">
                                <button class="btn_big">로그인하기</button>
                            </div>
                        </div>
                    </form>
                </div>
            </article>
        );
    }
}

export default Main;