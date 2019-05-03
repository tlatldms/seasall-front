import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import LogoCheckerBig from 'asset/images/logo_checker_big.png';
const URL = 'https://dev.hchecker.org/users/login';
const axios1 = axios.create({
    withCredentials: true
  })

class Main extends Component {
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }


    redirect = () => {
        if (this.state.redirect) {
            this.props.history.push({
                pathname: '/manager_home',
                state: {
                    email: this.state.email,
                }
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        axios1.post(`${URL}`,  {
            email: this.state.email,
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

            <article id="contentsWrap" className="login login01">
            {this.redirect()}
                <div className="box_contents">
                    <div className="box_login">
                        <div className="box_top"><img className="login_logo" src={LogoCheckerBig} alt="checker" /></div>
                        <div className="box_mid">
                            <form onSubmit={this.handleSubmit} action="#" acceptCharset="utf-8" name="login01" method="get">
                                <div className="input_box01">
                                    <div className="ip_box01"><input id="id" name="email" type="text" placeholder="User ID"
                                        onChange={this.handleChange}
                                        value={this.state.email}/>
                                    </div>
                                    <div className="ip_box01"><input id="Password" name="password" type="text" placeholder="Password" 
                                    onChange={this.handleChange}
                                    value={this.state.password}/></div>
                                </div>
                                <button className="btn_big_b">로그인</button>

                                <div className="login_etc">
                                    <div className="left">
                                        <div className="check_box check_b">
                                            <input type="checkbox" id="a2" name="personal" defaultChecked />
                                            <label for="a2"><span><em className="bld">자동로그인</em></span></label>
                                            <span>자동로그인</span>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <ul>
                                            <li><Link to="login_find_id">아이디찾기</Link></li>
                                            <li><Link to="login_find_pw">비밀번호찾기</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="box_bottom">
                            <p>‘Checker’서비스를 시작해보시겠어요?</p>
                            <button className="btn_big_b"><Link to="login_authorize">회원가입</Link> </button>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

export default Main;
