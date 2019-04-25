import React, { Component } from 'react';

class Company extends Component {
    render() {
        return (
            <div id="ltab01" class="login_tab1">
                <div class="input_box01">
                    <div class="select_box01">
                        <select class="select01">
                            <option selected>회사</option>
                            <option>옵션1</option>
                            <option>옵션2</option>
                            <option>옵션3</option>
                        </select>
                    </div>
                    <div class="email_box">
                        <input onChange= {this.props.change} type="text" name="email" id="email_id01" placeholder="입력하세요."/>
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
                        <div class="cmt_box">
                            <p>입력하신 이메일은 checker의 아이디로 사용됩니다.</p>
                            <p>이메일 인증이 진행되니 정확히 입력해주세요.</p>
                        </div>
                        <div class="ip_box01"><input onChange= {this.props.change} id="name01" name="name" type="text" placeholder="이름"/></div>
                        <div class="ip_box01"><input id="copNum01" name="companyId" type="text" placeholder="사번"/></div>
                        <div class="ip_box01"><input onChange= {this.props.change} id="password01" name="password" type="text" placeholder="8-16자의 영문, 숫자, 특수문자 조합된 비밀번호"/></div>
                        <div class="ip_box01"><input onChange={this.props.change} id="password01_1" name="passwordVerify" type="text" placeholder="비밀번호 확인"/></div>
                        <div class="ib_box01">
                            <input id="phoneNum01" onChange= {this.props.change} name="phone" type="text" placeholder="연락처를-없이 입력하세요."/>
                            <button class="btn_medium_g" onClick={this.props.request}>인증요청</button>
                        </div>
                        <div class="ip_box01">
                            <input onChange={this.props.change} id="certificationNum01" name="authNum" type="text" placeholder="인증번호 6자리"/>
                            <button class="btn_medium_g" onClick={this.props.verify}>인증확인</button>
                        </div>
                </div>
                <div class="terms_box">
                    <div class="chk_box">
                        <div class="check_box02 check_b">
                            <input type="checkbox" id="b1" name="personal"/>
                            <label for="b1"><span></span></label>
                            <span>서비스 이용약관에 동의합니다.</span>
                        </div>
                        <a href="#">전문보기</a>
                    </div>
                    <div class="terms">
                        현대자동차 주식회사(이하 ‘회사’라 함)는 개인정보보호법 등 관련 법령상의 개인정보보호 규정을 준수하여 이용자의 개인정보 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할수 있도록 다음과 같은 개인정보 처리방침을 두고 있습니다.현대자동차 주식회사(이하 ‘회사’라 함)는 개인정보보호법 등 관련 법령상의 개인정보보호 규정을 준수하여 이용자의 개인정보 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할수 있도록 다음과 같은 개인정보 처리방침을 두고 있습니다.
                    </div>
                </div>
            </div>
        );
    }
}

export default Company;