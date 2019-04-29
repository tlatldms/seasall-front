import React, { Component } from 'react';
import LogoSeasall from 'asset/images/logo_seasall.png';


let date = new Date(); 
let year = date.getFullYear(); 
let month = new String(date.getMonth()+1); 
let day = new String(date.getDate()); 

// 한자리수일 경우 0을 채워준다. 
if(month.length == 1){ 
  month = "0" + month; 
} 
if(day.length == 1){ 
  day = "0" + day; 
} 
class ManagerHeader extends Component {

    render() {
        return (
            <header>
                <div class="wrap">
                    <div class="left">
                        <div class="box_logo">
                            <img src={LogoSeasall} alt="HYUNDAI SEASALL" />
                        </div>
                    </div>
                    <div class="right">
                        <div class="box_user">
                            <span class="user_sts good"></span>
                            <p><span class="user_name">이종수</span> 님 안녕하세요.</p>
                        </div>
                        <div class="box_btn">
                            <button class="btn_header">마이페이지</button>
                            <button class="btn_header">로그아웃</button>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default ManagerHeader;