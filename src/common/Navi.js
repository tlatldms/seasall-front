import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Navi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on:1
        }
    }

    checkFocused = (path) => {
        if (window.location.pathname === path) {
            return 'on_gnb'
        } 
        return null
    }
    
    
    render(){
    const menus=["메인","신고처리","렉관리","등급관리","구매/청구"];
        return (
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
                                <a class={`${this.checkFocused("/seasall-front/manager_home")}`} ><span><Link to="/manager_home">메인</Link></span></a>
                            </li>
                            <li>
                                <a class={`${this.checkFocused("/seasall-front/manager_report")}`}><span><Link to="/manager_report">신고처리</Link></span></a>
                            </li>
                            <li>
                                <a class={`${this.checkFocused("/seasall-front/manager_rack")}`}><span><Link to="/manager_rack">렉관리</Link></span></a>
                            </li>
                            <li>
                                <a class={`${this.checkFocused("/seasall-front/manager_grade")}`}><span><Link to="/manager_grade">등급관리</Link></span></a>
                            </li>
                            <li>
                                <a class={`${this.checkFocused("/seasall-front/manager_buy_list")}`}><span><Link to="/manager_buy_list">구매/청구</Link></span></a>
                                <ul class="sub_gnb">
                                    <li><a >제품구매</a></li>
                                    <li><a >구매목록</a></li>
                                    <li><a >배송지관리</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <button class="btn_printpage"><span></span><Link to="/manager_home/popup">출력페이지</Link></button>
            </div>   
        );
    }
};

export default Navi;