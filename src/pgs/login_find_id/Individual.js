import React, { Component } from 'react';

class Individual extends Component {
    render() {
        return (
            <div id="ltab02" class="login_tab2">
                <div class="input_box01">
                    <div class="ip_box01"><input onChange= {this.props.change} id="find_name02" name="user_name02" type="text" placeholder="이름"/></div>
                    <div class="ib_box01">
                        <input onChange= {this.props.change} id="find_phoneNum02" name="user_phonenum02" type="text" placeholder="연락처를-없이 입력하세요."/>
                        <button class="btn_medium_g">인증요청</button>
                    </div>
                    <div class="ip_box01"><input onChange= {this.props.change} id="find_certificationNum02" name="certification_num02" type="text" placeholder="인증번호 6자리"/></div>
                </div>
            </div>
        );
    }
}

export default Individual;