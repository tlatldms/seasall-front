import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

class Tab1 extends Component {
    state = {
        option: false,
        tab:"전체"
    }

    handleTabs=(e)=> {
        this.setState({
            tab: e.target.text, 
        })
    }
    render() {
        return (
            <div class="panel02">
                <div class="panel_header">
                    <div class="left">
                        <div class="list_button">
                            <ul>
                                {/*  버튼 선택시 들어가는 클래스  - on_button */}
                                <li onClick={this.handleTabs}><a class={this.state.tab=="전체"?"on_button":null}>전체</a></li>
                                <li onClick={this.handleTabs}><a class={this.state.tab=="대기중"?"on_button":null}>대기중</a></li>
                                <li onClick={this.handleTabs}><a class={this.state.tab=="완료"?"on_button":null}>완료</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="right">
                        <div onClick={() => this.setState({ option: !this.state.option })} class={classNames("selectBox select_box08", { 'open': this.state.option })}>
                            <div class="select_btn">
                                <p><span>등급선택</span></p>
                            </div>
                            <div class="option_list">
                                <ul>
                                    <li><a >G1</a></li>
                                    <li><a >G2</a></li>
                                    <li><a >G3</a></li>
                                    <li><a >G4</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel_contents">
                    <div class="table03">
                        <div class="thead">
                            <div class="th">상태</div>
                            <div class="th">요청일자</div>
                            <div class="th">등급</div>
                            <div class="th">부서명</div>
                            <div class="th">이름 [사번]</div>
                            <div class="th">답변시간</div>
                        </div>
                        <div class="tr">
                            <div class="group_fixed">
                                <div class="td">
                                    {/* 완료 상태 일때 들어가는 클래스 -complete */}
                                    <p class="report_sts complete">
                                        <span class="icon"></span>
                                        <span class="txt">완료</span>
                                    </p>
                                </div>
                                <div class="td"><p>2018.12.12</p></div>
                                <div class="td"><p>G1</p></div>
                                <div class="td"><p>영업</p></div>
                                <div class="td"><p>이흥수 [사번 : 123456]</p></div>
                                <div class="td"><p>2018.12.31 <br />PM 3:00</p></div>
                            </div>
                        </div>
                        <div class="tr">
                            <div class="group_fixed">
                                <div class="td">
                                    <p class="report_sts complete">
                                        <span class="icon"></span>
                                        <span class="txt">완료</span>
                                    </p>
                                </div>
                                <div class="td"><p>2018.12.12</p></div>
                                <div class="td"><p>G2</p></div>
                                <div class="td"><p>영업</p></div>
                                <div class="td"><p>이흥수 [사번 : 123456]</p></div>
                                <div class="td"><p>2018.12.31 <br />PM 3:00</p></div>
                            </div>
                        </div>
                        <div class="tr">
                            <div class="group_fixed">
                                <div class="td">
                                    {/* 대기중 상태일 때 들어가는 클래스 - waiting */}
                                    <p class="report_sts waiting">
                                        <span class="icon"></span>
                                        <span class="txt">대기중</span>
                                    </p>
                                </div>
                                <div class="td"><p>2018.12.12</p></div>
                                <div class="td"><p>미지정</p></div>
                                <div class="td"><p>영업</p></div>
                                <div class="td"><p>이흥수 [사번 : 123456]</p></div>
                                <div class="td"><p><button class="btn_small w70"><Link to="/manager_grade/popup">수락하기</Link></button></p></div>
                            </div>
                        </div>
                        <div class="tr">
                            <div class="group_fixed">
                                <div class="td">
                                    <p class="report_sts waiting">
                                        <span class="icon"></span>
                                        <span class="txt">대기중</span>
                                    </p>
                                </div>
                                <div class="td"><p>2018.12.12</p></div>
                                <div class="td"><p>미지정</p></div>
                                <div class="td"><p>영업</p></div>
                                <div class="td"><p>이흥수 [사번 : 123456]</p></div>
                                <div class="td"><p><button class="btn_small w70">수락하기</button></p></div>
                            </div>
                        </div>
                        <div class="tr">
                            <div class="group_fixed">
                                <div class="td">
                                    <p class="report_sts waiting">
                                        <span class="icon"></span>
                                        <span class="txt">대기중</span>
                                    </p>
                                </div>
                                <div class="td"><p>2018.12.12</p></div>
                                <div class="td"><p>미지정</p></div>
                                <div class="td"><p>영업</p></div>
                                <div class="td"><p>이흥수 [사번 : 123456]</p></div>
                                <div class="td"><p><button class="btn_small w70">수락하기</button></p></div>
                            </div>
                        </div>
                        <div class="tr">
                            <div class="group_fixed">
                                <div class="td">
                                    <p class="report_sts waiting">
                                        <span class="icon"></span>
                                        <span class="txt">대기중</span>
                                    </p>
                                </div>
                                <div class="td"><p>2018.12.12</p></div>
                                <div class="td"><p>미지정</p></div>
                                <div class="td"><p>영업</p></div>
                                <div class="td"><p>이흥수 [사번 : 123456]</p></div>
                                <div class="td"><p><button class="btn_small w70">수락하기</button></p></div>
                            </div>
                        </div>
                        <div class="tr">
                            <div class="group_fixed">
                                <div class="td">
                                    <p class="report_sts waiting">
                                        <span class="icon"></span>
                                        <span class="txt">대기중</span>
                                    </p>
                                </div>
                                <div class="td"><p>2018.12.12</p></div>
                                <div class="td"><p>미지정</p></div>
                                <div class="td"><p>영업</p></div>
                                <div class="td"><p>이흥수 [사번 : 123456]</p></div>
                                <div class="td"><p><button class="btn_small w70">수락하기</button></p></div>
                            </div>
                        </div>
                        <div class="tr">
                            <div class="group_fixed">
                                <div class="td">
                                    <p class="report_sts waiting">
                                        <span class="icon"></span>
                                        <span class="txt">대기중</span>
                                    </p>
                                </div>
                                <div class="td"><p>2018.12.12</p></div>
                                <div class="td"><p>미지정</p></div>
                                <div class="td"><p>영업</p></div>
                                <div class="td"><p>이흥수 [사번 : 123456]</p></div>
                                <div class="td"><p><button class="btn_small w70">수락하기</button></p></div>
                            </div>
                        </div>
                        <div class="tr">
                            <div class="group_fixed">
                                <div class="td">
                                    <p class="report_sts waiting">
                                        <span class="icon"></span>
                                        <span class="txt">대기중</span>
                                    </p>
                                </div>
                                <div class="td"><p>2018.12.12</p></div>
                                <div class="td"><p>미지정</p></div>
                                <div class="td"><p>영업</p></div>
                                <div class="td"><p>이흥수 [사번 : 123456]</p></div>
                                <div class="td"><p><button class="btn_small w70">수락하기</button></p></div>
                            </div>
                        </div>
                        <div class="tr">
                            <div class="group_fixed">
                                <div class="td">
                                    <p class="report_sts waiting">
                                        <span class="icon"></span>
                                        <span class="txt">대기중</span>
                                    </p>
                                </div>
                                <div class="td"><p>2018.12.12</p></div>
                                <div class="td"><p>미지정</p></div>
                                <div class="td"><p>영업</p></div>
                                <div class="td"><p>이흥수 [사번 : 123456]</p></div>
                                <div class="td"><p><button class="btn_small w70">수락하기</button></p></div>
                            </div>
                        </div>


                    </div>
                    <div class="pagination">
                        {/* pagination 버튼 비활성화 클래스 -disable */}
                        <div class="prev">
                            <a href="#" class="prev02 disable"></a>
                            <a href="#" class="prev01 disable"></a>
                        </div>
                        {/* pageination 선택 클래스 - on_pager */}
                        <a href="#" class="on_pager">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <div class="next">
                            <a href="#" class="next01"></a>
                            <a href="#" class="next02"></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tab1;