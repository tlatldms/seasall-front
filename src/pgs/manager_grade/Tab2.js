import React, { Component } from 'react';
import axios from 'axios';

const axios1 = axios.create({
    withCredentials: true
})
const newGradeURL = 'https://dev.hchecker.org/reports/count';
class Tab2 extends Component {

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }



    handleNewGrade = () => {
        axios1.post(`${newGradeURL}`, {
            name: this.state.newGrade
        })
            .then(res => {
                if (res.data.success) {
                    console.log(res)
                }
            })
            .catch(e => { console.log(e); });
    }
    render() {
        return (
            <div className="panel02">
                <div className="panel_header">
                    <div className="left">
                        등급명, 등급권한 수정
                </div>
                    <div className="right">
                        <div className="box_btn">
                            <button className="btn_medium w100">저장</button>
                        </div>
                    </div>
                </div>
                <div className="panel_contents">
                    <ul className="list02">
                        <li >
                            <div className="grade_name"><p>G1</p></div>
                            <div className="grade_option open">
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_1" name="g1_1" checked />
                                    <label for="g1_1"><span></span></label>
                                    <span>라벨스캔</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_2" name="g1_2" checked />
                                    <label for="g1_2"><span></span></label>
                                    <span>라벨스캔</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_3" name="g1_3" />
                                    <label for="g1_3"><span></span></label>
                                    <span>라벨스캔</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_4" name="g1_4" checked />
                                    <label for="g1_4"><span></span></label>
                                    <span>제품신고</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_5" name="g1_5" />
                                    <label for="g1_5"><span></span></label>
                                    <span>P/N관리</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_6" name="g1_6" />
                                    <label for="g1_6"><span></span></label>
                                    <span>등급관리</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_7" name="g1_7" />
                                    <label for="g1_7"><span></span></label>
                                    <span>신고제품처리</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_8" name="g1_8" checked />
                                    <label for="g1_8"><span></span></label>
                                    <span>신고제품처리</span>
                                </div>
                                <div className="btn_permission">
                                    <a href="#">
                                        <span className="icon"></span>
                                        <span>권한추가</span>
                                    </a>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_9" name="g1_9" checked />
                                    <label for="g1_9"><span></span></label>
                                    <span>P/N관리</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_10" name="g1_10" />
                                    <label for="g1_10"><span></span></label>
                                    <span>렉관리</span>
                                </div>

                            </div>
                            <div className="box_btn">
                                <button type="button" className="btn_grade"></button>
                            </div>
                        </li>
                        <li>
                            <div className="grade_name"><p>G2</p></div>
                            <div className="grade_option">
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_1" name="g1_1" checked />
                                    <label for="g1_1"><span></span></label>
                                    <span>라벨스캔</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_2" name="g1_2" checked />
                                    <label for="g1_2"><span></span></label>
                                    <span>라벨스캔</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_3" name="g1_3" />
                                    <label for="g1_3"><span></span></label>
                                    <span>라벨스캔</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_4" name="g1_4" checked />
                                    <label for="g1_4"><span></span></label>
                                    <span>제품신고</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_5" name="g1_5" />
                                    <label for="g1_5"><span></span></label>
                                    <span>P/N관리</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_6" name="g1_6" />
                                    <label for="g1_6"><span></span></label>
                                    <span>등급관리</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_7" name="g1_7" />
                                    <label for="g1_7"><span></span></label>
                                    <span>신고제품처리</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_8" name="g1_8" checked />
                                    <label for="g1_8"><span></span></label>
                                    <span>신고제품처리</span>
                                </div>
                                <div className="btn_permission">
                                    <a href="#">
                                        <span className="icon"></span>
                                        <span>권한추가</span>
                                    </a>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_9" name="g1_9" checked />
                                    <label for="g1_9"><span></span></label>
                                    <span>P/N관리</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_10" name="g1_10" />
                                    <label for="g1_10"><span></span></label>
                                    <span>렉관리</span>
                                </div>
                                <div>토글버튼</div>
                            </div>
                            <div className="box_btn">
                                <button type="button" className="btn_grade"></button>
                            </div>
                        </li>
                        <li>
                            <div className="grade_name"><p>G3</p></div>
                            <div className="grade_option">
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_1" name="g1_1" checked />
                                    <label for="g1_1"><span></span></label>
                                    <span>라벨스캔</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_2" name="g1_2" checked />
                                    <label for="g1_2"><span></span></label>
                                    <span>라벨스캔</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_3" name="g1_3" />
                                    <label for="g1_3"><span></span></label>
                                    <span>라벨스캔</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_4" name="g1_4" checked />
                                    <label for="g1_4"><span></span></label>
                                    <span>제품신고</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_5" name="g1_5" />
                                    <label for="g1_5"><span></span></label>
                                    <span>P/N관리</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_6" name="g1_6" />
                                    <label for="g1_6"><span></span></label>
                                    <span>등급관리</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_7" name="g1_7" />
                                    <label for="g1_7"><span></span></label>
                                    <span>신고제품처리</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_8" name="g1_8" checked />
                                    <label for="g1_8"><span></span></label>
                                    <span>신고제품처리</span>
                                </div>
                                <div className="btn_permission">
                                    <a href="#">
                                        <span className="icon"></span>
                                        <span>권한추가</span>
                                    </a>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_9" name="g1_9" checked />
                                    <label for="g1_9"><span></span></label>
                                    <span>P/N관리</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_10" name="g1_10" />
                                    <label for="g1_10"><span></span></label>
                                    <span>렉관리</span>
                                </div>

                            </div>
                            <div className="box_btn">
                                <button type="button" className="btn_grade"></button>
                            </div>
                        </li>
                        <li>
                            <div className="grade_name"><p>G4</p></div>
                            <div className="grade_option">
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_1" name="g1_1" checked />
                                    <label for="g1_1"><span></span></label>
                                    <span>라벨스캔</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_2" name="g1_2" checked />
                                    <label for="g1_2"><span></span></label>
                                    <span>라벨스캔</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_3" name="g1_3" />
                                    <label for="g1_3"><span></span></label>
                                    <span>라벨스캔</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_4" name="g1_4" checked />
                                    <label for="g1_4"><span></span></label>
                                    <span>제품신고</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_5" name="g1_5" />
                                    <label for="g1_5"><span></span></label>
                                    <span>P/N관리</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_6" name="g1_6" />
                                    <label for="g1_6"><span></span></label>
                                    <span>등급관리</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_7" name="g1_7 " />
                                    <label for="g1_7"><span></span></label>
                                    <span>신고제품처리</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_8" name="g1_8" checked />
                                    <label for="g1_8"><span></span></label>
                                    <span>신고제품처리</span>
                                </div>
                                <div className="btn_permission">
                                    <a href="#">
                                        <span className="icon"></span>
                                        <span>권한추가</span>
                                    </a>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_9" name="g1_9" checked />
                                    <label for="g1_9"><span></span></label>
                                    <span>P/N관리</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_10" name="g1_10" />
                                    <label for="g1_10"><span></span></label>
                                    <span>렉관리</span>
                                </div>

                            </div>
                            <div className="box_btn">
                                <button type="button" className="btn_grade"></button>
                            </div>
                        </li>
                        <li>
                            <div className="grade_name"><p>G5</p></div>
                            <div className="grade_option">
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_1" name="g1_1" checked />
                                    <label for="g1_1"><span></span></label>
                                    <span>라벨스캔</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_2" name="g1_2" checked />
                                    <label for="g1_2"><span></span></label>
                                    <span>라벨스캔</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_3" name="g1_3" />
                                    <label for="g1_3"><span></span></label>
                                    <span>라벨스캔</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_4" name="g1_4" checked />
                                    <label for="g1_4"><span></span></label>
                                    <span>제품신고</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_5" name="g1_5" />
                                    <label for="g1_5"><span></span></label>
                                    <span>P/N관리</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_6" name="g1_6" />
                                    <label for="g1_6"><span></span></label>
                                    <span>등급관리</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_7" name="g1_7" />
                                    <label for="g1_7"><span></span></label>
                                    <span>신고제품처리</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_8" name="g1_8" checked />
                                    <label for="g1_8"><span></span></label>
                                    <span>신고제품처리</span>
                                </div>
                                <div className="btn_permission">
                                    <a href="#">
                                        <span className="icon"></span>
                                        <span>권한추가</span>
                                    </a>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_9" name="g1_9" checked />
                                    <label for="g1_9"><span></span></label>
                                    <span>P/N관리</span>
                                </div>
                                <div className="check_box03">
                                    <input type="checkbox" id="g1_10" name="g1_10" />
                                    <label for="g1_10"><span></span></label>
                                    <span>렉관리</span>
                                </div>

                            </div>
                            <div className="box_btn">
                                <button type="button" className="btn_grade"></button>
                            </div>
                        </li>
                    </ul>
                    <div className="box_grade_add">
                        <div className="box_grade_input">
                            <div className="ip_box03"><input onChange={this.handleChange} id="newGrade" name="newGrade" type="text" placeholder=" 새로운 등급의 이름을 입력하세요." /></div>
                            <div className="box_btn">
                                <button className="btn_medium_w w80">취소</button>
                                <button onClick={this.handleNewGrade} className="btn_medium w80">확인</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tab2;