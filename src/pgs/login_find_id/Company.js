import React, { Component } from 'react';

class Company extends Component {
    render() {
        return (
            <div id="ltab01" className="login_tab1">
                <div className="input_box01">
                    <div className="select_box01">
                        <select className="select01">
                        <option defaultValue>회사</option>
                        <option>옵션1</option>
                        <option>옵션2</option>
                        <option>옵션3</option>
                        </select>
                    </div>
                    <div className="ip_box01"><input onChange= {this.props.change} id="find_name01" name="name" type="text" placeholder="이름"/></div>
                    <div className="ip_box01"><input onChange= {this.props.change} id="find_copNum01" name="companyId" type="text" placeholder="사번"/></div>
                    <div className="ib_box01">
                        <input onChange= {this.props.change} id="find_phoneNum01" name="phone" type="text" placeholder="연락처를 -없이 입력하세요."/>
                        <button className="btn_medium_g" onClick={this.props.request}>인증요청</button>
                    </div>
                    <div className="ip_box01">
                        <input onChange= {this.props.change} id="find_certificationNum01" name="authNum" type="text" placeholder="인증번호 6자리"/>
                        <button className="btn_medium_g" onClick={this.props.verify}>인증확인</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Company;