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
                            <img src={IconComplete} alt="" />
                            <p class="tit">새로운 비밀번호로 <br/>변경이 완료되었습니다.</p>
                            <p class="txt">변경된 비밀번호로 로그인해주세요.</p>
                        </div>
                        <div class="box_bottom">
                            <button class="btn_big">로그인 하기</button>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

export default Main;