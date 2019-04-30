import React, { Component } from 'react';

class changingEmail extends Component {
    render() {
        return (
            <div class="box_change mt30">
                <dl>
                    <dt>변경할 메일</dt>
                    <dd>
                        <div class="input_box01">
                            <div class="email_box">
                                <input type="text" name="change_email" id="changeEmail_id" placeholder="입력하세요." />
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
                                <input id="changeCertificationNum02" name="change_certification_num02" type="text" placeholder="인증번호 6자리" />
                                <button class="btn_medium_g">인증요청</button>
                            </div>
                        </div>
                    </dd>
                </dl>
                <div class="box_btn db_align">
                    <button class="btn_small_w w70" onClick={this.props.closing} name="isChangingEmail">취소</button>
                    <button class="btn_small w70" onClick={this.props.closing} name="isChangingEmail">완료</button>
                </div>
            </div>
        );
    }
}

export default changingEmail;