import React, { Component } from 'react';
import LogoChecker from 'asset/images/logo_checker.png';
import axios from 'axios';


const URL = 'https://dev.hchecker.org/users/findUserPassword';
const loginURL = 'https://dev.hchecker.org/users/login';
const requestURL = 'https://dev.hchecker.org/users/requestsms';
const verifyURL = 'https://dev.hchecker.org/users/verifysms';
const axios1 = axios.create({
    withCredentials: true
  })

class Main extends Component {
    state={redirect:false};
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

    //비밀번호 변경: findUserPassword에서 준 임시 비밀번호로 로그인 하고 /login_new_pw로 정보와 함께 redirect
    handleSubmit = (e) => {
        e.preventDefault();

        axios1.post(`${URL}`,  {
            email: this.state.email,
            name: this.state.name,
            phone: this.state.phone,
        })
            .then(res => {
                if (res.data.success) {
                    console.log(res.data.success);

                    axios1.post(`${loginURL}`,  {
                        email: this.state.email,
                        password: res.data.password,
                    }).then(res => {
                        if (res.data.success) {
                            console.log("임시 로그인 성공");
                        }
                        this.setState({
                            redirect: true
                        });
                    }
                    ).catch(e => {
                        console.log("임시 로그인 실패");
                    })
                    
                }
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })

    }


    redirect = () => {
        if (this.state.redirect) {
            this.props.history.push({
                pathname: '/login_new_pw',
                state: {
                    email: this.state.email,
                    name: this.state.name,
                    phone: this.state.phone
                }
            });
        }
    }



    render() {
        return (
            <article id="contentsWrap" className="login login02">
            {this.redirect()}
                <div className="box_contents">
                
                    <div className="box_logo">
                        <img src={LogoChecker} alt=""/>
                    </div>
                    <form action="#" onSubmit={this.handleSubmit} acceptCharset="utf-8" name="login05" method="get">
                        <div className="box_login">
                            <div className="box_top">
                                <p>등록된 회원정보로 <br/>비밀번호를 찾으실 수 있습니다.</p>
                            </div>
                            <div className="box_mid">
                                <div className="input_box01">
                                    <div className="ip_box01"><input onChange={this.handleChange} id="find_name03" name="name" type="text" placeholder="이름" /></div>
                                    <div className="email_box">
                                        <input type="text" onChange={this.handleChange} name="email" id="find_email_id03" placeholder="입력하세요." />
                                        <span>@</span>
                                        <div className="select_box01">
                                            <select className="select01">
                                                <option defaultValue>선택</option>
                                                <option>naver.com</option>
                                                <option>gmail.com</option>
                                                <option>nate.com</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="ib_box01">
                                        <input id="find_phoneNum03" onChange={this.handleChange} name="phone" type="text" placeholder="연락처를 -없이 입력하세요." />
                                        <button className="btn_medium_g" onClick={this.requestSms}>인증요청</button>
                                    </div>
                                    <input id="find_certificationNum03" onChange={this.handleChange} name="authNum" type="text" placeholder="인증번호 6자리" />
                                    <button className="btn_medium_g" onClick={this.verifySms}>인증확인</button>
                                </div>
                            </div>
                            <div className="box_bottom">
                                <button className="btn_big_b">비밀번호 변경하기</button>
                            </div>
                        </div>
                    </form>
                </div>
            </article>   
        );
    }
}

export default Main;