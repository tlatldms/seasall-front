import React, { Component } from 'react';
import LogoChecker from 'asset/images/logo_checker.png';
import axios from 'axios';

const URL = 'https://dev.hchecker.org/users/findUserPassword';
const axios1 = axios.create({
    withCredentials: true
  })

class Main extends Component {
    state={redirect:false};

    redirect = () => {
        if (this.state.redirect) {
            this.props.history.push('/');
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.password != this.state.passwordVerify) {
            alert("비밀번호가 같지 않습니다.");
        } 
        axios1.post(`${URL}`,  {
            password: this.state.password,
        })
            .then(res => {
                if (res.data.success) {
                    console.log(res.data.success);
                    this.setState({
                        redirect: true
                    });
                }
                console.log(res);    
            })
            .catch(error => {
                console.log(error);
            })

    }
    render() {
        return (
            <article id="contentsWrap" class="login login02 login04">
            {this.redirect()}
                <div class="box_contents">
                    <div class="box_logo">
                        <img src={LogoChecker}/>
                    </div>
                    <form action="#" onSubmit={this.handleSubmit} acceptCharset="utf-8" name="login06" method="get">
                        <div class="box_login">
                            <div class="box_top">
                                <p>새로운 비밀번호를 입력하세요.</p>
                            </div>
                            <div class="box_mid">
                                <div class="input_box01">
                                    <div class="ip_box01"><input onChange={this.handleChange} id="find_password01" name="password" type="text" placeholder="8-16자의 영문, 숫자, 특수문자 조합된 비밀번호" /></div>
                                    <div class="ip_box01"><input id="find_password01_1" name="passwordVerify" type="text" placeholder="비밀번호 확인" /></div>
                                </div>
                            </div>
                            <div class="box_bottom">
                                <button class="btn_big">로그인하기</button>
                            </div>
                        </div>
                    </form>
                </div>
            </article>
        );
    }
}

export default Main;