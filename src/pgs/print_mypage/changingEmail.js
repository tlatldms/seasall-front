import React, { Component } from 'react';

class changingEmail extends Component {
    render() {
        return (
            <div className="box_change mt30">
                <dl>
                    <dt>변경할 메일</dt>
                    <dd>
                        <div className="input_box01">
                            <div className="email_box">
                                <input type="text" name="change_email" id="changeEmail_id" placeholder="입력하세요." />
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
                            <div className="ib_box01">
                                <input id="changeCertificationNum02" name="change_certification_num02" type="text" placeholder="인증번호 6자리" />
                                <button className="btn_medium_g">인증요청</button>
                            </div>
                        </div>
                    </dd>
                </dl>
                <div className="box_btn db_align">
                    <button className="btn_small_w w70" onClick={this.props.closing} name="isChangingEmail">취소</button>
                    <button className="btn_small w70" onClick={this.props.closing} name="isChangingEmail">완료</button>
                </div>
            </div>
        );
    }
}

export default changingEmail;