import React, { Component } from 'react';
import Navi from 'common/Navi';
import thumbDetail from 'asset/images/thumb_detail.png';


class Main extends Component {
    render() {
        return (
            <article id="contentsWrap" class="rack01">
            <div class="innerwrap">
                <Navi />
                <div class="contents_area">
                    <div class="panel">
                        <div class="panel_header">
                            <div class="left">
                                <h2>맵만들기</h2>
                            </div>
                            <div class="right">
                                <div class="check_box02 check_b">
                                    <input type="checkbox" id="c2" name="map" checked />
                                    <label for="c2"><span></span></label>
                                    <span>대표맵으로 설정</span>
                                </div>
                                <div class="box_btn">
                                    <button class="btn_small_w w70">초기화</button>
                                    <button class="btn_small w70">저장</button>
                                </div>
                            </div>
                        </div>
                        <div class="panel_contents">
                            <div class="tab_map">
                                <ul>
                                    {/* 일반 map 클래스 m_tab */} 
                                    <li class="m_tab">
                                        <p>현대씨즈올 본사 대창고</p>
                                        <span class="btn_close"></span>
                                    </li>
                                    {/* 맵추가 버튼 클래스 map_add */} 
                                    <li class="map_add">
                                        <a href="#">
                                            <span class="btn_add"></span>
                                            <p>맵 추가</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab_map_cont" style={styles.temp}>
                                <div class="box_map_control">
                                    <div class="box_search">
                                        <button class="btn_search"></button>
                                        <input id="mapSearch" name="map_search" type="text" placeholder="렉넘버, P/N, 품명 검색" />
                                    </div>
                                </div>
                                <div class="map_sidebar">
                                    <div class="box_handle">
                                        <div class="bar"></div>
                                        <span class="handle handle_open"></span>
                                        <span class="handle handle_close"></span>
                                    </div>
                                    <div class="box_cont">
                                        <div class="panel04">
                                            <div class="panel_header">
                                                <div class="left">
                                                    <a href="#" class="btn_back"></a>
                                                    <h2>P/N 정보</h2>
                                                </div>
                                                <div class="right">
                                                    <button class="btn_medium w100">저장</button>
                                                </div>
                                            </div>
                                            <div class="panel_contents">
                                                <div class="box_img">
                                                    <img src={thumbDetail} alt="" />
                                                </div>
                                                <div class="box_name">
                                                    <span>P/N</span>
                                                    <p class="pn_name">C96FH-G425P-GC21D</p>
                                                    <p class="pn_sub_name">Seasall Traction</p>
                                                </div>
                                                <div class="box_info">
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
                                                            <a href="#" class="btn_rack">
                                                                <span class="icon"></span>
                                                                <span class="rack_location">E-1</span>
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