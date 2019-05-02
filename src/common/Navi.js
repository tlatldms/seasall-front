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
                              <Link class={`${this.checkFocused("/seasall-front/manager_home")}`} to="/manager_home"><span>메인</span></Link>
                            </li>
                            <li>
                                <Link class={`${this.checkFocused("/seasall-front/manager_report")}`} to="/manager_report"><span>신고처리</span></Link>
                            </li>
                            <li>
                                <Link class={`${this.checkFocused("/seasall-front/manager_rack")}`} to="/manager_rack"><span>렉관리</span></Link>
                            </li>
                            <li>
                                <Link class={`${this.checkFocused("/seasall-front/manager_grade")}`} to="/manager_grade"><span>등급관리</span></Link>
                            </li>
                            <li>
                                <Link class={`${this.checkFocused("/seasall-front/manager_buy_list")}`} to="/manager_buy_list"><span>구매/청구</span></Link>
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