import React, { Component } from 'react';
import ChangingPassword from './changingPassword';
import ChangingPhoneNum from './changingPhoneNum';
import ChangingEmail from './changingEmail';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
            isChangingPassword: false,
            isChangingPhoneNum: false,
            isChangingEmail: false,
        }
        this.handleOpening = this.handleOpening.bind(this);
        this.handleClosing = this.handleClosing.bind(this);
    }
    handleOpening = (e) => {
        this.setState({
            [e.target.name]: true,
        });
    }
    handleClosing = (e) => {
        this.setState({
            [e.target.name]: false,
        });
    }
    render() {
        return (
            <div>
                <article id="contentsWrap" class="mypage01">
                    <div class="innerwrap">
                        <div class="gnb_area">
                            <aside class="box_menu">
                                <div class="box_top">
                                    <div class="icon_menu">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <span class="tit">MENU</span>
                                </div>
                                <nav>
                                    <ul class="gnb">
                                        <li>
                                            <a href="#"><span>메인</span></a>
                                        </li>
                                        <li>
                                            <a href="#"><span>신고처리</span></a>
                                        </li>
                                        <li>
                                            <a href="#"><span>렉관리</span></a>
                                        </li>
                                        <li>
                                            <a href="#"><span>등급관리</span></a>
                                        </li>
                                        <li>
                                            <a href="#"><span>구매/청구</span></a>
                                            <ul class="sub_gnb">
                                                <li><a href="#">제품구매</a></li>
                                                <li><a href="#">구매목록</a></li>
                                                <li><a href="#">배송지관리</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </aside>
                            <button class="btn_printpage"><span></span>출력페이지</button>
                        </div>
                        <div class="contents_area">
                            <div class="panel">
                                <div class="panel_header">
                                    <div class="left">
                                        <h2>마이페이지</h2>
                                    </div>
                                    <div class="right"></div>
                                </div>
                                <div class="panel_contents">
                                    <div class="panel02">
                                        <div class="panel_header">개인정보<span></span></div>
                                        <div class="panel_contents">
                                            <table class="table01">
                                                <colgroup>
                                                    <col width="15.5%" />
                                                    <col width="84.5%" />
                                                </colgroup>
                                                <tbody>
                                                    <tr>
                                                        <th>이름</th>
                                                        <td><p>이종수[G1]</p></td>
                                                    </tr>
                                                    <tr>
                                                        <th>회사/부서</th>
                                                        <td><p>현대씨즈올/영업</p></td>
                                                    </tr>
                                                    <tr>
                                                        <th>비밀번호</th>
                                                        <td>
                                                            {this.state.isChangingPassword == false
                                                            ?
                                                            <button onClick={this.handleOpening} name="isChangingPassword" class="btn_small w70">변경하기</button>
                                                            :
                                                            <ChangingPassword closing={this.handleClosing} /> }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>연락처</th>
                                                        <td>
                                                            <p>+82 10-1234-5678</p>
                                                            {this.state.isChangingPhoneNum == false
                                                            ?
                                                            <div class="box_btn">
                                                                <button onClick={this.handleOpening} name="isChangingPhoneNum" class="btn_small w70">변경하기</button>
                                                            </div>
                                                            :
                                                            <ChangingPhoneNum closing={this.handleClosing} /> }
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>메일</th>
                                                        <td>
                                                            <p>lhsworker@hyundai.com</p>

                                                            {this.state.isChangingEmail == false
                                                            ?
                                                            <div class="box_btn">
                                                                <button onClick={this.handleOpening} name="isChangingEmail" class="btn_small w70">변경하기</button>
                                                            </div>
                                                            :
                                                            <ChangingEmail closing={this.handleClosing} />
                                                        }

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default Main;