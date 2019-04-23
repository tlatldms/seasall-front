import React from 'react';
import { Link } from 'react-router-dom';
import MENU from 'images/menu.png';

let checkFocused = function(path) {
    if (window.location.pathname === path) {
        return 'active'
    } 
    return 'none'
}

const Navi = () => {
    return (
        <div>
            <div class="navi">
                <div class="menu-and-icon">
                    <img id="menu-pic" src= {MENU} alt=""/>
                    <div class="menu-font">MENU</div>
                </div>
                <hr id="navhr"></hr>
                <ul>
                    <li class= { `${checkFocused("/manager_home")} big`}><Link to="/manager_home">메인</Link></li>
                    <li class= { `${checkFocused("/manager_rack")} big`}><Link to="/manager_rack">렉관리</Link></li>
                    <li class= { `${checkFocused("/manager_grade")} big`}><Link to="/manager_grade">등급관리</Link></li>
                    <li class= { `${checkFocused("/manager_report")} big`}><Link to="/manager_report">신고처리</Link></li>
                    <li class= { `${checkFocused("/manager_buy_product")} ${checkFocused("/manager_buy_list")} ${checkFocused("/manager_buy_rcvplace")} big`} ><Link to="/manager_buy_product">구매/청구</Link></li>
                    <li class= { `${checkFocused("/manager_buy_product")} mini`}><Link to="/manager_buy_product">제품구매</Link></li>
                    <li class= { `${checkFocused("/manager_buy_list")} mini` }><Link to="/manager_buy_list">구매목록</Link></li>
                    <li class= { `${checkFocused("/manager_buy_rcvplace")} mini` }><Link to="/manager_buy_rcvplace">배송지관리</Link></li>
                    <li class= { checkFocused("/login_home")     }><Link to="/login_home">Login</Link></li>
                </ul>
              
            </div>
            <Link to="/print_home">
                <div class="print-btn">
                <h4>-><br></br>
                출력 페이지</h4>
                </div>
            </Link>


        </div>
    );
};

export default Navi;