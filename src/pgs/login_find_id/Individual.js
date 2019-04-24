import React, { Component } from 'react';

class Individual extends Component {
    render() {
        return (
            <div id="ltab02" class="login_tab2">
                <div class="input_box01">
                    <div class="ip_box01"><input onChange= {this.props.change} id="find_name02" name="name" type="text" placeholder="이름"/></div>
                    <div class="ib_box01">
                        <input onChange= {this.props.change} id="find_phoneNum02" name="phone" type="text" placeholder="연락처를-없이 입력하세요."/>
                        <button class="btn_medium_g" onClick={this.props.request}>인증요청</button>
                    </div>
                    <div class="ip_box01">
                        <input onChange= {this.props.change} id="find_certificationNum02" name="authNum" type="text" placeholder="인증번호 6자리"/>
                        <button class="btn_medium_g" onClick={this.props.verify}>인증확인</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Individual;