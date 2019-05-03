import React, { Component } from 'react';
import LogoChecker from 'asset/images/logo_checker.png';
import axios from 'axios';

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

    //비밀번호 변경: 임시 비밀번호로 로그인 되어있는 이메일로 put /users/email
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.password != this.state.passwordVerify) {
            alert("비밀번호가 같지 않습니다.");
        } 
        console.log("이메일:",this.props.location.state.email,"\n이름:",this.props.location.state.name, "\n폰:",this.props.location.state.phone,"\n비번:",this.state.password);
        axios1.put(`https://dev.hchecker.org/users/${this.props.location.state.email}`,  {
            email: this.props.location.state.email,
            name: this.props.location.state.name,
            password: this.state.password,
            phone: this.props.location.state.phone

        }).then(res => {
            if (res.data.success) {
                console.log("비밀번호 변경 성공");
            }
            this.setState({
                redirect: true
            });
        }
        ).catch(e => {
            console.log("비밀번호 변경 실패");
        })
    }
    render() {
        return (
            <article id="contentsWrap" className="login login02 login04">
            {this.redirect()}
                <div className="box_contents">
                    <div className="box_logo">
                        <img src={LogoChecker}/>
                    </div>
                    <form action="#" onSubmit={this.handleSubmit} acceptCharset="utf-8" name="login06" method="get">
                        <div className="box_login">
                            <div className="box_top">
                                <p>새로운 비밀번호를 입력하세요.</p>
                            </div>
                            <div className="box_mid">
                                <div className="input_box01">
                                    <div className="ip_box01"><input onChange={this.handleChange} id="find_password01" name="password" type="text" placeholder="8-16자의 영문, 숫자, 특수문자 조합된 비밀번호" /></div>
                                    <div className="ip_box01"><input onChange={this.handleChange} id="find_password01_1" name="passwordVerify" type="text" placeholder="비밀번호 확인" /></div>
                                </div>
                            </div>
                            <div className="box_bottom">
                                <button className="btn_big">로그인하기</button>
                            </div>
                        </div>
                    </form>
                </div>
            </article>
        );
    }
}

export default Main;