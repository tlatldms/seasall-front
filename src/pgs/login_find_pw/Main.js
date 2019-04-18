import React, { Component } from 'react';
import LogoChecker from 'asset/images/logo_checker.png';

class Main extends Component {
    render() {
        return (
            <article id="contentsWrap" class="login login02">
                <div class="box_contents">
                    <div class="box_logo">
                        <img src={LogoChecker} />
                    </div>
                    <form action="#" acceptCharset="utf-8" name="login05" method="get">
                        <div class="box_login">
                            <div class="box_top">
                                <p>등록된 회원정보로 <br/>비밀번호를 찾으실 수 있습니다.</p>
                            </div>
                            <div class="box_mid">
                                <div class="input_box01">
                                    <div class="ip_box01"><input id="find_name03" name="user_name03" type="text" placeholder="이름" /></div>
                                    <div class="email_box">
                                        <input type="text" name="email03" id="find_email_id03" placeholder="입력하세요." />
                                        <span>@</span>
                                        <div class="select_box01">
                                            <select class="select01">
                                                <option selected>선택</option>
                                                <option>naver.com</option>
                                                <option>gmail.com</option>
                                                <option>nate.com</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="ib_box01">
                                        <input id="find_phoneNum03" name="user_phonenum03" type="text" placeholder="연락처를 -없이 입력하세요." />
                                        <button class="btn_medium_g">인증요청</button>
                                    </div>
                                    <input id="find_certificationNum03" name="certification_num03" type="text" placeholder="인증번호 6자리" />
                                </div>
                            </div>
                            <div class="box_bottom">
                                <button class="btn_big_b">비밀번호 변경하기</button>
                            </div>
                        </div>
                    </form>
                </div>
            </article>   
        );
    }
}

export default Main;