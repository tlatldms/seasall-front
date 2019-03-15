import React from 'react';
import { Link } from 'react-router-dom';
import './Navi.scss';
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
                <hr></hr>
                <ul>
                    <li class= { `${checkFocused("/manager/main")} big`}><Link to="/manager/main">메인</Link></li>
                    <li class= { `${checkFocused("/manager/rack")} big`}><Link to="/manager/rack">렉관리</Link></li>
                    <li class= { `${checkFocused("/manager/grade")} big`}><Link to="/manager/grade">등급관리</Link></li>
                    <li class= { `${checkFocused("/manager/report")} big`}><Link to="/manager/report">신고처리</Link></li>
                    <li class= { `${checkFocused("/manager/buy")} ${checkFocused("/manager/buy/buylist")} ${checkFocused("/manager/buy/rcvplace")} big`} ><Link to="/manager/buy">구매/청구</Link></li>
                    <li class= { `${checkFocused("/manager/buy")} mini`}><Link to="/manager/buy">제품구매</Link></li>
                    <li class= { `${checkFocused("/manager/buy/buylist")} mini` }><Link to="/manager/buy/buylist">구매목록</Link></li>
                    <li class= { `${checkFocused("/manager/buy/rcvplace")} mini` }><Link to="/manager/buy/rcvplace">배송지관리</Link></li>
                    <li class= { checkFocused("/login/main")     }><Link to="/login/main">Login</Link></li>
                </ul>
              
            </div>
            <Link to="/print/main">
                <div class="print-btn">
                <h4>-><br></br>
                출력 페이지</h4>
                </div>
            </Link>


        </div>
    );
};

export default Navi;