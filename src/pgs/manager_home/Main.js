import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const DivOne = styled.div`
width: ${props => props.width};
height: 220px;
background:url(/src/asset/images/home0${props => props.num}.png) no-repeat center/100%;
`;

const DivTwo = styled.div`width: 670px; height: 230px;`;

class Main extends Component {
    render() {
        return (
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
                        <button class="btn_printpage"><span></span><Link to="manager_home/popup">출력페이지</Link></button>
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
                                        <DivOne class="bg_graph" width={"475px"} num={1}>
                                            <span></span><span></span>
                                        </DivOne>
                                    </div>
                                    <div class="right">
                                        <DivOne class="bg_graph" width={"154px"} num={2}>
                                            {/* <div class="pie_graph">
                                                <div class="txt">
                                                    <p>유형</p>
                                                    <span>건/개월</span>
                                                </div>
                                            </div> */}
                                        </DivOne>
                                    </div>
                                </div>
                                <div class="panel02">
                                    <div class="panel_header">상세리스트<span><a href="#">전체보기</a></span></div>
                                    <div class="panel_contents">
                                        {/* 데이터 숨기는 클래스 -hidden */}
                                        <div class="box_table_area hidden">
                                            <div class="box_table">
                                                <table class="table02">
                                                    <colgroup>
                                                        <col width="15.6%"/>
                                                        <col width="13.7%"/>
                                                        <col width="23.3%"/>
                                                        <col width="30%"/>
                                                        <col width="17.4%"/>
                                                    </colgroup>
                                                    <thead>
                                                        <tr>
                                                            <th>신고번호</th>
                                                            <th>신고일자</th>
                                                            <th>신고유형</th>
                                                            <th>P/N</th>
                                                            <th>신고인</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1234-1234</td>
                                                            <td>2018.12.12</td>
                                                            <td>모조품</td>
                                                            <td>AB12D-DG23H-EKDIG</td>
                                                            <td>이지영</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1234-1234</td>
                                                            <td>2018.12.12</td>
                                                            <td>모조품</td>
                                                            <td>AB12D-DG23H-EKDIG</td>
                                                            <td>이지영</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1234-1234</td>
                                                            <td>2018.12.12</td>
                                                            <td>모조품</td>
                                                            <td>AB12D-DG23H-EKDIG</td>
                                                            <td>이지영</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1234-1234</td>
                                                            <td>2018.12.12</td>
                                                            <td>모조품</td>
                                                            <td>AB12D-DG23H-EKDIG</td>
                                                            <td>이지영</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1234-1234</td>
                                                            <td>2018.12.12</td>
                                                            <td>모조품</td>
                                                            <td>AB12D-DG23H-EKDIG</td>
                                                            <td>이지영</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1234-1234</td>
                                                            <td>2018.12.12</td>
                                                            <td>모조품</td>
                                                            <td>AB12D-DG23H-EKDIG</td>
                                                            <td>이지영</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1234-1234</td>
                                                            <td>2018.12.12</td>
                                                            <td>모조품</td>
                                                            <td>AB12D-DG23H-EKDIG</td>
                                                            <td>이지영</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1234-1234</td>
                                                            <td>2018.12.12</td>
                                                            <td>모조품</td>
                                                            <td>AB12D-DG23H-EKDIG</td>
                                                            <td>이지영</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1234-1234</td>
                                                            <td>2018.12.12</td>
                                                            <td>모조품</td>
                                                            <td>AB12D-DG23H-EKDIG</td>
                                                            <td>이지영</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1234-1234</td>
                                                            <td>2018.12.12</td>
                                                            <td>모조품</td>
                                                            <td>AB12D-DG23H-EKDIG</td>
                                                            <td>이지영</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="pagination">
                                                <div class="prev">
                                                    <a href="#" class="prev02"></a>
                                                    <a href="#" class="prev01"></a>
                                                </div>
                                                {/* pageination 선택 클래스 - on_pager */ }
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
                                        <DivOne class="bg_graph" width={"190px"} num={3}>
                                            <span></span><span></span>
                                        </DivOne>
                                    </div>
                                    <div class="right">
                                        <DivOne class="bg_graph" width={"100%"} num={4} >
                                            <span></span><span></span>
                                        </DivOne>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 데이터 숨기는 클래스 hidden */}
                        <div class="box_panel_area hidden">
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
                                                <DivOne class="bg_graph" width={"100%"} num={5} >
                                                    <span></span><span></span>
                                                </DivOne>
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
                                                <DivOne class="bg_graph" width={"100%"} num={6} >
                                                    <span></span><span></span>
                                                </DivOne>
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
                                        <DivTwo class="bg_graph"></DivTwo>
                                    </div>
                                    <div class="box_btn">
                                        <span class="btn_prev"></span>
                                        <span class="btn_next"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

export default Main;

/*    
    return (
        <div>
            <div class='page-template'>
                <Header></Header>
                <UnderHeader></UnderHeader>
                <div class='both-navibox'>
                    <div class='navibox-for-margin'>
                        <div class='navibox navionly'>
                            <Navi></Navi>
                        </div>
                        <div class='details-box'>
                            <div>
                                <ReportStatus />
                                <StockMos />
                                <PaymentMonth />
                                <PaymentPlace />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
*/