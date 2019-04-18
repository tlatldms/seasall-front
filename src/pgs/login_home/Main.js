import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import LogoCheckerBig from 'asset/images/logo_checker_big.png';
const URL = 'http://dev.hchecker.org/users/login';

class Main extends Component {
    state = {
        userid:'',
        password: '',
        isSubmitted: false,
        error: false,
        redirect: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
            isSubmitted: false
        })
    }


    redirect = () => {
        if (this.state.redirect) {
            window.location.replace("http://naver.com");
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`${URL}`,  {
            userEmail: this.state.userid,
            password: this.state.password,
            //test:this.state.test
        })
            .then(res => {

                if (res.data.success) {
                    console.log(res.data.success);
                    this.setState({
                        redirect: true
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


    constructor(props) {
        super(props);
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
        };
    }

   
    alert = () => {
        alert('로그인 완료');
    }


    render() {
        return (

            <article id="contentsWrap" class="login login01">
            {this.redirect()}
                <div class="box_contents">
                    <div class="box_login">
                        <div class="box_top"><img class="login_logo" src={LogoCheckerBig} alt="checker" /></div>
                        <div class="box_mid">
                            <form onSubmit={this.handleSubmit} action="#" acceptCharset="utf-8" name="login01" method="get">
                                <div class="input_box01">
                                    <div class="ip_box01"><input id="id" name="userid" type="text" placeholder="User ID"
                                        onChange={this.handleChange}
                                        value={this.state.userid}/>
                                    </div>
                                    <div class="ip_box01"><input id="Password" name="password" type="text" placeholder="Password" 
                                    onChange={this.handleChange}
                                    value={this.state.password}/></div>
                                </div>
                                <button class="btn_big_b">로그인</button>

                                <div class="login_etc">
                                    <div class="left">
                                        <div class="check_box check_b">
                                            <input type="checkbox" id="a2" name="personal" defaultChecked />
                                            <label for="a2"><span><em class="bld">자동로그인</em></span></label>
                                            <span>자동로그인</span>
                                        </div>
                                    </div>
                                    <div class="right">
                                        <ul>
                                            <li><a href="#">아이디찾기</a></li>
                                            <li><a href="#">비밀번호찾기</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="box_bottom">
                            <p>‘Checker’서비스를 시작해보시겠어요?</p>
                            <button class="btn_big_b"><Link to="login_authorize">회원가입</Link> </button>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

export default Main;
