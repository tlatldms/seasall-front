import React, { Component } from 'react';
import LogoSeasall from 'asset/images/logo_seasall.png';
import {Link} from 'react-router-dom';

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
                <div className="wrap">
                    <div className="left">
                        <div className="box_logo">
                            <Link to="/manager_home"><img src={LogoSeasall} alt="HYUNDAI SEASALL" /></Link>
                        </div>
                    </div>
                    <div className="right">
                        <div className="box_user">
                            <span className="user_sts good"></span>
                            <p><span className="user_name">{this.props.email}이흥수</span> 님 안녕하세요.</p>
                        </div>
                        <div className="box_btn">
                            <button className="btn_header"><Link to="print_mypage">마이페이지</Link></button>
                            <button className="btn_header">로그아웃</button>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default ManagerHeader;