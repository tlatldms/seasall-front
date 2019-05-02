import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import List from './List';
import PrintHeader from 'common/Header';

import Navi from 'common/Navi';
const Div1 = styled.div`width: ${props => props.width}; height:220px; background: url('asset/images/home0${props=>props.num}.png') no-repeat center/100%;`;
class Main extends Component {
    state={
        long:false
    }
    handleLong = () => {
        this.setState({
            long:!this.state.long
        })
    }
    render() {

        return (
            <div>
                <PrintHeader />
                <div class="breadscrumb">
                    <div class="innerwrap">
                        <div class="left">
                            <ul>
                                <li>메인</li>
                                <li>대표통계</li>
                            </ul>
                        </div>
                        <div class="right">
                            <p>2018.12.12 PM 00:00 통계기준</p>
                        </div>
                    </div>
                </div>
                <article id="contentsWrap" class="main01">
                    <div class="innerwrap">
                        <Navi />
                        <div class="contents_area">
                            <div class="panel graph01">
                                <div class="panel_header">
                                    <div class="left">
                                        <h2>신고현황</h2>
                                    </div>
                                    <div class="right">
                                        <div class="selectBox select_box06">
                                            <div class="select_btn">
                                                <p><span>2018년</span></p>
                                            </div>
                                            <div class="option_list">
                                                <ul>
                                                    <li><a href="#">2018년</a></li>
                                                    <li><a href="#">2017년</a></li>
                                                    <li><a href="#">2016년</a></li>
                                                    <li><a href="#">2015년</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel_contents">
                                    <div class="box_graph">
                                        <div class="left">
                                            <Div1 class="bg_graph" width={"475px"} num={1}>
                                                <span></span><span></span>
                                            </Div1>
                                        </div>
                                        <div class="right">
                                            <Div1 class="bg_graph" width={"154px"} num={2}>
                                                {/*  <div class="pie_graph">
                                                    <div class="txt">
                                                        <p>유형</p>
                                                        <span>건/개월</span>
                                                    </div>
                                                </div> */}
                                            </Div1>
                                        </div>
                                    </div>
                                    <div class="panel02">
                                        <div class="panel_header">상세리스트<span><a onClick={this.handleLong}>{this.state.long?"간략보기":"전체보기"}</a></span></div>
                                        <div class="panel_contents">
                                            <div class="box_table_area">                                             
                                                   <List long={this.state.long }/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel graph02">
                                <div class="panel_header">
                                    <div class="left">
                                        <h2>재고/금액</h2>
                                        <span>(건/억원)</span>
                                    </div>
                                    <div class="right">
                                        <div class="selectBox select_box06">
                                            <div class="select_btn">
                                                <p><span>2018년</span></p>
                                            </div>
                                            <div class="option_list">
                                                <ul>
                                                    <li><a href="#">2018년</a></li>
                                                    <li><a href="#">2017년</a></li>
                                                    <li><a href="#">2016년</a></li>
                                                    <li><a href="#">2015년</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel_contents">
                                    <div class="box_graph">
                                        <div class="left">
                                            <Div1 class="bg_graph" width={"190px"} num={3}>
                                                <span></span><span></span>
                                            </Div1>
                                        </div>
                                        <div class="right">
                                            <Div1 class="bg_graph" width={"100%"} num={4}>
                                                <span></span><span></span>
                                            </Div1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="box_panel_area">
                                <div class="box_panel">
                                    <div class="left">
                                        <div class="panel">
                                            <div class="panel_header">
                                                <div class="left">
                                                    <h2>월별 판매액</h2>
                                                    <span>(%)</span>
                                                </div>
                                                <div class="right">
                                                </div>
                                            </div>
                                            <div class="panel_contents">
                                                <div class="box_graph">
                                                    <Div1 class="bg_graph" width={"100%"} num={5}>
                                                        <span></span><span></span>
                                                    </Div1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="right">
                                        <div class="panel c1">
                                            <div class="panel_header">
                                                <div class="left">
                                                    <h2>사업장별 판매액</h2>
                                                    <span>(억원)</span>
                                                </div>
                                                <div class="right">
                                                    <a href="#">전체보기</a>
                                                </div>
                                            </div>
                                            <div class="panel_contents">
                                                <div class="box_graph">
                                                    <Div1 class="bg_graph" width={"100%"} num={6}>
                                                        <span></span><span></span>
                                                    </Div1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel03 c2">
                                    <div class="panel_haeder">
                                        <div class="left"></div>
                                        <div class="right"></div>
                                    </div>
                                    <div class="panel_contents">
                                        <div class="box_graph">
                                            <Div1 class="bg_graph" width={"670px"} num={1}></Div1>
                                        </div>
                                        <div class="box_btn_slide">
                                            <span class="btn_prev"></span>
                                            <span class="btn_next"></span>
                                            {/*  버튼 작동 안할 시 들어가는 클래스 disable */}
                                            {/*  <span class="btn_prev disable"></span>
                                            <span class="btn_next disable"></span> */}
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