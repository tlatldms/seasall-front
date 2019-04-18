import React, { Component } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import LogoChecker from 'asset/images/logo_checker.png';
import Company from './Company';
import Individual from './Individual';


const URL='';

class Main extends Component {
    state = {
        tab: 1,
        redirect: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    redirect = () => {
        if (this.state.redirect) {
            window.location.replace("http://localhost:3000/login_home");
        }
    }

    handleTab = (e) => {
        this.setState( {
            tab: [e.target.name],
        })
    }

    constructor(props) {
        super(props);
        this.handleChange= this.handleChange.bind(this);

        this.handleTab = this.handleTab.bind(this);
        this.state = {
            tab:1,
        };
    }

    render() {
        return (
            <article id="contentsWrap" class="login login02">
            <div class="box_contents">
                <div class="box_logo">
                    <img src={LogoChecker}/>
                </div>
                <form action="#" acceptCharset="utf-8" name="login04" method="get">
                    <div class="box_login">
                        <div class="box_top">
                            {this.state.tab == 1 ? <p>권한요청 승인 후 <br/>서비스를 이용하실 수 있습니다.</p> : <p>등록된 회원정보로 <br/>아이디를 찾으실 수 있습니다.</p>}
                            
                        </div>
                        <div class="box_mid">
                            <div class="tab01">
                                <ul>
                                     { /*tab01 탭 선택시 들어 가는 클래스 - on_tab */}
                                    <li rel="ltab01" className={classNames({'on_tab': this.state.tab == 1})}><a href="#" onclick="return false" name="1" onClick={this.handleTab}>기업 이용자</a></li>
                                    <li rel="ltab02" className={classNames({"on_tab" : this.state.tab == 2})}><a href="#" onclick="return false" name="2" onClick={this.handleTab}>개인 이용자</a></li>

                                </ul>
                            </div>
                            <div class="tab01_cont">
                            {this.state.tab == 1 ?
                                <Company change={this.handleChange} request={this.requestSms} verify={this.verifySms}/> 
                                :
                                <Individual change={this.handleChange} />}

                            </div>
                        </div>
                        <div class="box_bottom">
                            <button class="btn_big_b">아이디 찾기</button>
                        </div>
                    </div>
                </form>
            </div>
        </article>
        );
    }
}

export default Main;