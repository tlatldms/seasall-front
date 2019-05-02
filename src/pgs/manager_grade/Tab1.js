import React, { Component } from 'react';

class Tab1 extends Component {
    render() {
        return (
            <div class="panel02">
                <div class="panel_header">
                    <div class="left">
                        <div class="list_button">
                            <ul>
                                {/*  버튼 선택시 들어가는 클래스  - on_button */}
                            <li><a href="#" class="on_button">전체</a></li>
                                <li><a href="#">대기중</a></li>
                                <li><a href="#">완료</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="right">
                        <div class="selectBox select_box08">
                            <div class="select_btn">
                                <p><span>등급선택</span></p>
                            </div>
                            <div class="option_list">
                                <ul>
                                    <li><a href="#">G1</a></li>
                                    <li><a href="#">G2</a></li>
                                    <li><a href="#">G3</a></li>
                                    <li><a href="#">G4</a></li>
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
                                <div class="td"><p>2018.12.31 <br/>PM 3:00</p></div>
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
                                    <div class="td"><p>2018.12.31 <br/>PM 3:00</p></div>
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