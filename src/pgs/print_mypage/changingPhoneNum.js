import React, { Component } from 'react';

class changingPhoneNum extends Component {
    render() {
        return (
            <div className="box_change mt30">
                <dl>
                    <dt>변경할 연락처</dt>
                    <dd>
                        <div className="input_box01">
                            <div className="ib_box01">
                                <input id="changePhone" name="change_phone" type="text" placeholder="연락처를 -없이 입력하세요." />
                                <button className="btn_medium_g">인증요청</button>
                            </div>
                            <div className="ip_box01">
                                <input id="changeCertificationNum" name="change_certification_num" type="text" placeholder="인증번호 6자리" />
                            </div>
                        </div>
                    </dd>
                </dl>
                <div className="box_btn db_align">
                    <button className="btn_small_w w70" onClick={this.props.closing} name="isChangingPhoneNum" >취소</button>
                    <button className="btn_small w70" onClick={this.props.closing} name="isChangingPhoneNum" >완료</button>
                </div>
            </div>
        );
    }
}

export default changingPhoneNum;