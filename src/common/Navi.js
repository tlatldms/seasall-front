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
        return (
            <div className="gnb_area">
                <aside className="box_menu">
                    <div className="box_top">
                        <div className="icon_menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <span className="tit">MENU</span>
                    </div>
                    <nav>
                        <ul className="gnb">
                            <li>
                              <Link className={`${this.checkFocused("/seasall-front/manager_home")}`} to="/manager_home"><span>메인</span></Link>
                            </li>
                            <li>
                                <Link className={`${this.checkFocused("/seasall-front/manager_report")}`} to="/manager_report"><span>신고처리</span></Link>
                            </li>
                            <li>
                                <Link className={`${this.checkFocused("/seasall-front/manager_rack")}`} to="/manager_rack"><span>렉관리</span></Link>
                            </li>
                            <li>
                                <Link className={`${this.checkFocused("/seasall-front/manager_grade")}`} to="/manager_grade"><span>등급관리</span></Link>
                            </li>
                            <li>
                                <Link className={`${this.checkFocused("/seasall-front/manager_buy_list")}`} to="/manager_buy_list"><span>구매/청구</span></Link>
                                <ul className="sub_gnb">
                                    <li><a >제품구매</a></li>
                                    <li><a >구매목록</a></li>
                                    <li><a >배송지관리</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <button className="btn_printpage"><span></span><Link to="/manager_home/popup">출력페이지</Link></button>
            </div>   
        );
    }
};

export default Navi;