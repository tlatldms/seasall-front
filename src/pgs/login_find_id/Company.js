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
                    <div class="ip_box01"><input onChange= {this.props.change} id="find_name01" name="userName" type="text" placeholder="이름"/></div>
                    <div class="ip_box01"><input onChange= {this.props.change} id="find_copNum01" name="user_num01" type="text" placeholder="사번"/></div>
                    <div class="ib_box01">
                        <input onChange= {this.props.change} id="find_phoneNum01" name="user_phonenum01" type="text" placeholder="연락처를 -없이 입력하세요."/>
                        <button onClick={this.props.request} class="btn_medium_g">인증요청</button>
                    
                    </div>
                    <div class="ip_box01"><input onChange= {this.props.change} id="find_certificationNum01" name="authNum" type="text" placeholder="인증번호 6자리"/>
                    <button class="btn_medium_g" onClick={this.props.verify}>인증확인</button></div>
                </div>
            </div>
        );
    }
}

export default Company;

