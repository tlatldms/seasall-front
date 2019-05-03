import React, { Component } from 'react';
import Navi from 'common/Navi';
import thumbDetail from 'asset/images/thumb_detail.png';


class Main extends Component {
    render() {
        return (
            <article id="contentsWrap" className="rack01">
            <div className="innerwrap">
                <Navi />
                <div className="contents_area">
                    <div className="panel">
                        <div className="panel_header">
                            <div className="left">
                                <h2>맵만들기</h2>
                            </div>
                            <div className="right">
                                <div className="check_box02 check_b">
                                    <input type="checkbox" id="c2" name="map" checked />
                                    <label for="c2"><span></span></label>
                                    <span>대표맵으로 설정</span>
                                </div>
                                <div className="box_btn">
                                    <button className="btn_small_w w70">초기화</button>
                                    <button className="btn_small w70">저장</button>
                                </div>
                            </div>
                        </div>
                        <div className="panel_contents">
                            <div className="tab_map">
                                <ul>
                                    {/* 일반 map 클래스 m_tab */} 
                                    <li className="m_tab">
                                        <p>현대씨즈올 본사 대창고</p>
                                        <span className="btn_close"></span>
                                    </li>
                                    {/* 맵추가 버튼 클래스 map_add */} 
                                    <li className="map_add">
                                        <a href="#">
                                            <span className="btn_add"></span>
                                            <p>맵 추가</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab_map_cont" style={styles.temp}>
                                <div className="box_map_control">
                                    <div className="box_search">
                                        <button className="btn_search"></button>
                                        <input id="mapSearch" name="map_search" type="text" placeholder="렉넘버, P/N, 품명 검색" />
                                    </div>
                                </div>
                                <div className="map_sidebar">
                                    <div className="box_handle">
                                        <div className="bar"></div>
                                        <span className="handle handle_open"></span>
                                        <span className="handle handle_close"></span>
                                    </div>
                                    <div className="box_cont">
                                        <div className="panel04">
                                            <div className="panel_header">
                                                <div className="left">
                                                    <a href="#" className="btn_back"></a>
                                                    <h2>P/N 정보</h2>
                                                </div>
                                                <div className="right">
                                                    <button className="btn_medium w100">저장</button>
                                                </div>
                                            </div>
                                            <div className="panel_contents">
                                                <div className="box_img">
                                                    <img src={thumbDetail} alt="" />
                                                </div>
                                                <div className="box_name">
                                                    <span>P/N</span>
                                                    <p className="pn_name">C96FH-G425P-GC21D</p>
                                                    <p className="pn_sub_name">Seasall Traction</p>
                                                </div>
                                                <div className="box_info">
                                                    <dl>
                                                        <dt>제조사</dt>
                                                        <dd>Hyundai Seasall</dd>
                                                    </dl>
                                                    <dl>
                                                        <dt>입고개수</dt>
                                                        <dd>100개</dd>
                                                    </dl>
                                                    <dl>
                                                        <dt>보관 렉<p>아이콘을 눌러 렉 위치를 확인하고 입고시 해당 렉으로 꼭 이동바랍니다.</p></dt>
                                                        <dd>
                                                            <a href="#" className="btn_rack">
                                                                <span className="icon"></span>
                                                                <span className="rack_location">E-1</span>
                                                            </a>
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
const styles = {
    temp : {
        background: 'url(/asset/images/rack04.png) no-repeat center/100%'
    },

}
export default Main;