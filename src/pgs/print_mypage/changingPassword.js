import React, { Component } from 'react';

class changingPassword extends Component {
    render() {
        return (
            <div className="box_change">
            <dl>
                <dt>현재 비밀번호</dt>
                <dd>
                    <div className="input_box01">
                        <div className="ib_box01">
                             <input id="currentPassword" name="current_password" type="text" placeholder="비밀번호 확인" />
                             <button className="btn_medium_g">확인</button>
                        </div>
                    </div> 
                </dd>
            </dl>
            <dl>
                <dt>변경할 비밀번호</dt>
                <dd>
                    <div className="input_box01">
                        <div className="ip_box01">
                            <input id="changePassword01" name="change_password01" type="text" placeholder="8-16자의 영문, 숫자, 특수문자 조합된 비밀번호" />
                        </div>
                         <div className="ip_box01">
                             <input id="changePassword01_01" name="change_password01_01" type="text" placeholder="비밀번호 확인" />
                         </div>
                    </div>
                </dd>
            </dl>
            <div className="box_btn db_align">
                <button className="btn_small_w w70" onClick={this.props.closing} name="isChangingPassword" >취소</button>
                <button className="btn_small w70" onClick={this.props.closing} name="isChangingPassword">완료</button>
            </div>
        </div>
        );
    }
}

export default changingPassword;