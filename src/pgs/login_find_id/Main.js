import React, { Component } from 'react';
import axios from 'axios';

const URL='http://52.78.132.176:3002/users/sign_up';

class Main extends Component {
    
    state = {
        userName:'',
        userEmail: '',
        phoneNumber:'',
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

    handlePhoneNumberChange = (e) => {
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
            phoneNumber: this.state.phoneNumber,
        })
            .then(res => {
                if (res.data.success) {
                    console.log("성공~~~");
                    alert("회원가입을 완료하였습니다.");
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
        this.handlePhoneNumberChange= this.handlePhoneNumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state ={
            userName:'',
            userEmail: '',
            password:'',
        }
    }

    render() {
        return (
            <div class="whole">
            <div class="login-bg">
                <div class="login-container">
                <h5>등록된 회원정보로 아이디를 찾으실 수 있습니다.</h5>
                <form onSubmit={this.handleSubmit}>
                    <div class="label_login_chk">
                        <input
                            name="loginchk"
                            type="text"
                            class="first-input"
                            placeholder="이름"
                        />
                       
                        <input
                            name="loginchk"
                            type="text"
                            placeholder="메일"
                        />

                        <input
                            name="loginchk"
                            type="text"
                            placeholder="-를 제외한 연락처"
                        />
                        <input
                            name="loginchk"
                            type="text"
                            placeholder="인증번호 6자리"
                        />

                        <input
                            name="loginchk"
                            type="text"
                            class="last-input"
                            placeholder="인증번호 6자리"
                        />
                       

                        <button type="submit">아이디찾기</button>

                    </div>
                </form>
           
            </div>
            </div>
            </div>
        );
    }
}

export default Main;