import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

const URL='http://52.78.132.176:3002/users/login';

class LoginForm extends Component {
    state = {
        userid:'',
        password: '',
        test:'',
        isSubmitted: false,
        error: false,
        redirect: false
    }

    handleIdChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
            isSubmitted: false
        })
    }
    handleTestChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
            isSubmitted: false
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
            isSubmitted: false
        })
    }


    redirect = () => {
        if (this.state.redirect) {
            window.location.replace("http://localhost:3000/manager/main");
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
                })
                console.log(error)
            })

    }


    constructor(props) {
        super(props);
        this.handleIdChange= this.handleIdChange.bind(this);
        this.handlePasswordChange= this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
        };
    }

   
    alert = () => {
        alert('로그인 완료');
    }
    render() {
        return (
            <div>
            {this.redirect()}
            <form onSubmit={this.handleSubmit}>
            <div class="label_login_chk">
                <input
                    name="loginchk"
                    type="checkbox"
                    id="login_chk"
                   
                />
                <label for="login_chk" id="label_login_chk" >자동 로그인</label></div>
                <br></br>
                <input
                    name="userid"
                    type="text"
                    placeholder="User ID"
                    class="form-control front-input"
                    onChange={this.handleIdChange}
                    value={this.state.userid}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    class="form-control last-input"
                    onChange={this.handlePasswordChange}
                    value={this.state.password}
                />
                <button type="submit" >로그인</button>
                { this.state.isSubmitted && <p>* SUBMIT SUCCESS *</p> }
                { this.state.error && <p>* SOMETHING WRONG *</p> }
            </form>
            </div>
            
        );
    }
}

export default LoginForm;