import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import List from './List';
import List2 from './List2';
import Item from './Item';

const URL = 'https://dev.hchecker.org/reports?';
const countURL =  'https://dev.hchecker.org/reports/count';
const data1 = null;
const axios1 = axios.create({
    withCredentials: true
  })
const Div1 = styled.div`width: ${props => props.width}; height:220px; background: url("/asset/images/home0${props=>props.num}.png") no-repeat center/100%;`;
class Main extends Component {



    render() {

        return (
            <div>
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
                                            <a href="#" class="on_gnb"><span>메인</span></a>
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
                            <button class="btn_printpage"><span></span><Link to="/manager_home/popup">출력페이지</Link></button>
                        </div>
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
                                        <div class="panel_header">상세리스트<span><a href="#">간략보기</a></span></div>
                                        <div class="panel_contents">
                                            <div class="box_table_area">                                             
                                                   <List />
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