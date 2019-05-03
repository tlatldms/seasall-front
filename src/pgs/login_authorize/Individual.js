import React, { Component } from 'react';

class Individual extends Component {
    render() {
        const props=this.props;
        return (
            <div id="ltab02" className="login_tab2">
                <div className="input_box01">
                    <div className="ip_box01"><input id="name02" onChange={props.change} name="name" type="text" placeholder="이름을 입력하세요." /></div>
                    <div className="email_box">
                        <input onChange={props.change} type="text" name="email" id="email_id02" placeholder="입력하세요."/>
                        <span>@</span>
                        <div className="select_box01">
                            <select className="select01">
                                <option defaultValue>선택</option>
                                <option>naver.com</option>
                                <option>gmail.com</option>
                                <option>nate.com</option>
                            </select>
                        </div>
                    </div>
                    <div className="cmt_box">
                        <p>입력하신 이메일은 checker의 아이디로 사용됩니다.</p>
                        <p>이메일 인증이 진행되니 정확히 입력해주세요.</p>
                    </div>
                    <div className="ip_box01"><input onChange={props.change} id="password02" name="password" type="text" placeholder="8-16자의 영문, 숫자, 특수문자 조합된 비밀번호"/></div>
                    <div className="ip_box01"><input onChange={props.change} id="password02_1" name="passwordVerify" type="text" placeholder="비밀번호 확인"/></div>
                    <div className="ib_box01">
                            <input id="phoneNum01" onChange= {this.props.change} name="phone" type="text" placeholder="연락처를-없이 입력하세요."/>
                            <button className="btn_medium_g" onClick={this.props.request}>인증요청</button>
                    </div>
                    <div className="ip_box01">
                        <input onChange={this.props.change} id="certificationNum01" name="authNum" type="text" placeholder="인증번호 6자리"/>
                        <button className="btn_medium_g" onClick={this.props.verify}>인증확인</button>
                    </div>
                </div>
                <div className="terms_box">
                    <div className="chk_box">
                        <div className="check_box02 check_b">
                            <input type="checkbox" id="b2" name="personal"/>
                            <label for="b2"><span></span></label>
                            <span>서비스 이용약관에 동의합니다.</span>
                        </div>
                        <a href="#">전문보기</a>
                    </div>
                    <div className="terms">
                        현대자동차 주식회사(이하 ‘회사’라 함)는 개인정보보호법 등 관련 법령상의 개인정보보호 규정을 준수하여 이용자의 개인정보 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할수 있도록 다음과 같은 개인정보 처리방침을 두고 있습니다.현대자동차 주식회사(이하 ‘회사’라 함)는 개인정보보호법 등 관련 법령상의 개인정보보호 규정을 준수하여 이용자의 개인정보 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할수 있도록 다음과 같은 개인정보 처리방침을 두고 있습니다.
                    </div>
                </div>
            </div>
        );
    }
}

export default Individual;