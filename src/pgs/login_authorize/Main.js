import React, { Component } from 'react';
import axios from 'axios';
import LogoChecker from 'asset/images/logo_checker.png';
import Company from './Company';
import Individual from './Individual';
import classNames from 'classnames';

const URL = 'http://dev.hchecker.org/users/requestsms';
const verifyURL = 'http://dev.hchecker.org/users/verifysms';
class Main extends Component {
    state = {
        tab: 1,

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    requestSms = (e) => {
        e.preventDefault();

        axios.post(`${URL}`,  {
            phone: this.state.phoneNum,
        })
            .then(res => {
                if (res.data.success) {
                    console.log("인증요청"+res.data.success);
                }
                console.log(res)
                
            })
            .catch(error => {
                console.log(error);
            })
    }

    verifySms = (e) => {
        e.preventDefault();

        axios.post(`${verifyURL}`,  {
            authNum: this.state.authNum,
        })
            .then(res => {
                if (res.data.success) {
                    console.log(res.data.success);
                    alert("인증 완료했습니다.");
                    this.setState({
                        isVerified: true
                    })
                }
                console.log(res);
            })
            .catch(error => {
                this.setState({
                });
                console.log(error);
                alert("인증 실패했습니다");
            })
    }
    redirect = () => {
        if (this.state.redirect) {
            window.location.replace("http://localhost:3000/login_authorize_done");
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.isVerified === false) {alert("휴대폰을 인증해주십시오.")}
        else {
        axios.post(`${URL}`,  {
            userEmail: this.state.userEmail,
            userName: this.state.userName,
            password: this.state.password,
            phone: this.state.phoneNum,
            isEnterprise: this.state.tab==1 ? true : false,
            
        })
            .then(res => {
                if (res.data.success) {
                    console.log(res.data.success);
                    this.setState({
                    });
                }
                console.log(res) 
            })
            .catch(error => {
                this.setState({
                    error:true,
                    isSubmitted: false
                });
                console.log(error);
            })
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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTab = this.handleTab.bind(this);
        this.verifySms = this.verifySms.bind(this);
        this.requestSms = this.requestSms.bind(this);
        this.state = {
            tab:1,
            redirect: false,
            isVerified: true,
            authNum: ""
        };
    }

    render() {

        return (
            <article id="contentsWrap" class="login login02">
            {this.redirect()}
            <div class="box_contents">
                <div class="box_logo">
                    <img src={LogoChecker}/>
                </div>
                <form onSubmit={this.handleSubmit} action="#" acceptCharset="utf-8" name="login02" method="get">
                    <div class="box_login">
                        <div class="box_top">
                            {this.state.tab == 1 ? <p>권한요청 승인 후 <br/>서비스를 이용하실 수 있습니다.</p> : <p>등록한 회원정보로 <br/>서비스를 이용하실 수 있습니다.</p> } 
                        </div>
                        <div class="box_mid">
                            <div class="tab01">
                                <ul>
                                     { /*tab01 탭 선택시 들어 가는 클래스 - on_tab */}
                                    <li rel="ltab01" className={classNames({'on_tab': this.state.tab == 1})}><a name="1" onClick={this.handleTab}>기업 이용자</a></li>
                                    <li rel="ltab02" className={classNames({"on_tab" : this.state.tab == 2})}><a name="2" onClick={this.handleTab}>개인 이용자</a></li>
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
                            <button class="btn_big_b">가입하기</button>
                        </div>
                    </div>
                </form>
            </div>
        </article>
        );
    }
}

export default Main;