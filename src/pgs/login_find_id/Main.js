import React, { Component } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import LogoChecker from 'asset/images/logo_checker.png';
import Company from './Company';
import Individual from './Individual';

const URL = 'https://dev.hchecker.org/users/findUserId';
const requestURL = 'https://dev.hchecker.org/users/requestsms';
const verifyURL = 'https://dev.hchecker.org/users/verifysms';
const axios1 = axios.create({
    withCredentials: true
  })


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

    requestSms = (e) => {
        e.preventDefault();
        axios1.post(`${requestURL}`,  {
            phone: this.state.phone,
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
        axios1.post(`${verifyURL}`,  {
            authNum: this.state.authNum,
        })
            .then(res => {
                if (res.data.success) {
                    console.log(res.data.success);
                    alert("인증 완료했습니다.");
                }
                console.log(res)
            })
            .catch(error => {
                this.setState({
                });
                console.log(error);
                alert("인증 실패했습니다");
            })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        
        axios1.post(`${URL}`,  {
            name: this.state.name,
            phone: this.state.phone,
        })
            .then(res => {
                if (res.data.success) {
                    console.log(res.data.success);
                    this.setState({
                        email: res.data.email,
                        redirect: true
                    });
                }
                console.log(res);
                console.log(res.data.email)
                
            })
            .catch(error => {
                this.setState({
                    error:true,
                    isSubmitted: false
                });
                console.log(error);
            })

    }


    redirect = () => {
        if (this.state.redirect) {
            this.props.history.push({
                pathname: '/login_find_id_done',
                state: { email: this.state.email}
            });
        }
    }

    handleTab = (e) => {
        this.setState( {
            tab: e.target.name,
        })
    }

    constructor(props) {
        super(props);
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.verifySms = this.verifySms.bind(this);
        this.requestSms = this.requestSms.bind(this);
        this.handleTab = this.handleTab.bind(this);
        this.state = {
            tab:1,
        };
    }

    render() {
        return (
            <article id="contentsWrap" className="login login02">
            {this.redirect()}
            <div className="box_contents">
                <div className="box_logo">
                    <img src={LogoChecker} alt=""/>
                </div>
                <form action="#" onSubmit={this.handleSubmit} acceptCharset="utf-8" name="login04" method="get">
                    <div className="box_login">
                        <div className="box_top">
                            {Number(this.state.tab) === 1 ? <p>권한요청 승인 후 <br/>서비스를 이용하실 수 있습니다.</p> : <p>등록된 회원정보로 <br/>아이디를 찾으실 수 있습니다.</p>}
                            
                        </div>
                        <div className="box_mid">
                            <div className="tab01">
                                <ul>
                                     { /*tab01 탭 선택시 들어 가는 클래스 - on_tab */}
                                    <li rel="ltab01" className={classNames({'on_tab': Number(this.state.tab) === 1})}><a href="#" name={1} onClick={this.handleTab}>기업 이용자</a></li>
                                    <li rel="ltab02" className={classNames({"on_tab" : Number(this.state.tab) === 2})}><a href="#" name={2} onClick={this.handleTab}>개인 이용자</a></li>

                                </ul>
                            </div>
                            <div className="tab01_cont">
                            {Number(this.state.tab) === 1 ?
                                <Company change={this.handleChange} request={this.requestSms} verify={this.verifySms}/> 
                                :
                                <Individual change={this.handleChange} request={this.requestSms} verify={this.verifySms}/>}

                            </div>
                        </div>
                        <div className="box_bottom">
                            <button className="btn_big_b" >아이디 찾기</button>
                        </div>
                    </div>
                </form>
            </div>
        </article>
        );
    }
}

export default Main;