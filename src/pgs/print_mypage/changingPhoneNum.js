import React, { Component } from 'react';

class changingPhoneNum extends Component {
    render() {
        return (
            <div class="box_change mt30">
                <dl>
                    <dt>변경할 연락처</dt>
                    <dd>
                        <div class="input_box01">
                            <div class="ib_box01">
                                <input id="changePhone" name="change_phone" type="text" placeholder="연락처를 -없이 입력하세요." />
                                <button class="btn_medium_g">인증요청</button>
                            </div>
                            <div class="ip_box01">
                                <input id="changeCertificationNum" name="change_certification_num" type="text" placeholder="인증번호 6자리" />
                            </div>
                        </div>
                    </dd>
                </dl>
                <div class="box_btn db_align">
                    <button class="btn_small_w w70" onClick={this.props.closing} name="isChangingPhoneNum" >취소</button>
                    <button class="btn_small w70" onClick={this.props.closing} name="isChangingPhoneNum" >완료</button>
                </div>
            </div>
        );
    }
}

export default changingPhoneNum;