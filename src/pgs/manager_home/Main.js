import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import List from './List';
import PrintHeader from 'common/Header';
import classNames from 'classnames/bind';
import EcountSellings from './EcountSellings';
import StockAndPrice from './StockAndPrice';

import Navi from 'common/Navi';
const Div1 = styled.div`width: ${props => props.width}; height:220px; background: no-repeat center/100%; background-image: url('asset/images/home0${props=>props.num}.png'); `;
class Main extends Component {
    state={
        long:false,
        option:false,
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
                <div className="breadscrumb">
                    <div className="innerwrap">
                        <div className="left">
                            <ul>
                                <li>메인</li>
                                <li>대표통계</li>
                            </ul>
                        </div>
                        <div className="right">
                            <p>2018.12.12 PM 00:00 통계기준</p>
                        </div>
                    </div>
                </div>
                <article id="contentsWrap" className="main01">
                    <div className="innerwrap">
                        <Navi />
                        <div className="contents_area">
                            <div className="panel graph01">
                                <div className="panel_header">
                                    <div className="left">
                                        <h2>신고현황</h2>
                                    </div>
                                    <div className="right">
                                        <div onClick={()=>this.setState({option:!this.state.option})} className={classNames("selectBox select_box06", {'open':this.state.option})}>
                                            <div className="select_btn">
                                                <p><span>2018년</span></p>
                                            </div>
                                            <div className="option_list">
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
                                <div className="panel_contents">
                                    <div className="box_graph">
                                        <div className="left">
                                            <Div1 className="bg_graph" width={"475px"} num={1}>
                                                <span></span><span></span>
                                            </Div1>
                                        </div>
                                        <div className="right">
                                            <Div1 className="bg_graph" width={"154px"} num={2}>
                                                  <div className="pie_graph">
                                                    <div className="txt">
                                                        <p>유형</p>
                                                        <span>건/개월</span>
                                                    </div>
                                                </div> 
                                            </Div1>
                                        </div>
                                    </div>
                                    <div className="panel02">
                                        <div className="panel_header">상세리스트<span><a onClick={this.handleLong}>{this.state.long?"간략보기":"전체보기"}</a></span></div>
                                        <div className="panel_contents">
                                            <div className="box_table_area">                                             
                                                   <List long={this.state.long }/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel graph02">
                                <div className="panel_header">
                                    <div className="left">
                                        <h2>재고/금액</h2>
                                        
                                        <span>(건/억원)</span>
                                    </div>
                                    <div className="right">
                                    <div onClick={()=>this.setState({option2:!this.state.option2})} className={classNames("selectBox select_box06", {'open':this.state.option2})}>
                                            <div className="select_btn">
                                                <p><span>2018년</span></p>
                                            </div>
                                            <div className="option_list">
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
                                <div className="panel_contents">
                                    <div className="box_graph">
                                        <div className="left">
                                            <Div1 className="bg_graph" width={"190px"} num={3}>
                                                <span></span><span></span>
                                            </Div1>
                                        </div>
                                        <div className="right">
                                            <Div1 className="bg_graph" width={"100%"} num={4}>
                                                <span></span><span></span>
                                                <StockAndPrice />
                                            </Div1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box_panel_area">
                                <div className="box_panel">
                                    <div className="left">
                                        <div className="panel">
                                            <div className="panel_header">
                                                <div className="left">
                                                    <h2>월별 판매액</h2>
                                                    <span>(%)</span>
                                                </div>
                                                <div className="right">


                                                </div>
                                            </div>
                                            <div className="panel_contents">
                                                <div className="box_graph">
                                                    <Div1 className="bg_graph" width={"100%"} num={5}>
                                                        <span></span>
                                                        <EcountSellings />

                                                        <span></span>
                                                    </Div1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="panel c1">
                                            <div className="panel_header">
                                                <div className="left">
                                                    <h2>사업장별 판매액</h2>
                                                    <span>(억원)</span>
                                                </div>
                                                <div className="right">
                                                    <a href="#">전체보기</a>
                                                </div>
                                            </div>
                                            <div className="panel_contents">
                                                <div className="box_graph">
                                                    <Div1 className="bg_graph" width={"100%"} num={6}>
                                                        <span></span><span></span>
                                                    </Div1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel03 c2">
                                    <div className="panel_haeder">
                                        <div className="left"></div>
                                        <div className="right"></div>
                                    </div>
                                    <div className="panel_contents">
                                        <div className="box_graph">
                                            <Div1 className="bg_graph" width={"670px"} num={1}></Div1>
                                        </div>
                                        <div className="box_btn_slide">
                                            <span className="btn_prev"></span>
                                            <span className="btn_next"></span>
                                            {/*  버튼 작동 안할 시 들어가는 클래스 disable */}
                                            {/*  <span className="btn_prev disable"></span>
                                            <span className="btn_next disable"></span> */}
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