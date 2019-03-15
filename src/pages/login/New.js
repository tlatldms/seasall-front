import React, { Component } from 'react';
import './Main.scss';
import axios from 'axios';

//users/sign_up, login이랑 똑같이 true로 보내주심
//userName,userEmail,password
const URL='http://52.78.132.176:3002/users/sign_up';

class New extends Component {

    state = {
        userName:'',
        userEmail: '',
        password:'',
        redirect: false,
        isSubmitted:''
    }

    handleNameChange = (e) => {
        this.setState({
            userName:e.target.value,
        })
    }
    handleEmailChange = (e) => {
        this.setState({
            userEmail:e.target.value,
          
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            password:e.target.value,
            
        })
    }


    redirect = () => {
        if (this.state.redirect) {
            window.location.replace("http://localhost:3000/login/main");
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`${URL}`,  {
            userName: this.state.userName,
            userEmail: this.state.userEmail,
            password: this.state.password,
        })
            .then(res => {
                if (res.data.success) {
                    console.log("성공~~~");
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


    constructor(props) {
        super(props);
        this.handleNameChange= this.handleNameChange.bind(this);
        this.handleEmailChange= this.handleEmailChange.bind(this);
        this.handlePasswordChange= this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state ={
            userName:'',
            userEmail: '',
            password:'',
        }
    }

   
    render() {
        return (
            <div class="new">
                <h5>등록한 회원정보로 서비스를 이용하실 수 있습니다.</h5>
                {this.redirect()}
                <form onSubmit={this.handleSubmit}>
                    <div class="label_login_chk">
                        <input
                            name="username"
                            type="text"
                            class="first-input"
                            placeholder="이름을 입력하세요."
                            onChange={this.handleNameChange}
                            value={this.state.userName}
                        />
                        <input
                            name="useremail"
                            type="email"
                            placeholder="입력하신 이메일은 checker의 아이디로 사용됩니다. 이메일 인증이 진행되니 정확히 입력해주세요."
                            onChange={this.handleEmailChange}
                            value={this.state.userEmail}
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="8-16자의 영문, 숫자, 특수문자 조합된 비밀번호"
                            onChange={this.handlePasswordChange}
                            value={this.state.password}
                        />

                        <button type="submit">가입하기</button>

                    </div>
                </form>
            </div>
        );
    }
}

export default New;