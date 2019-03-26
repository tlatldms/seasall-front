import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div class="whole">
            <div class="login-bg">
                <div class="login-container">
                <h5>새로운 비밀번호를 입력하세요.</h5>
                <form onSubmit={this.handleSubmit}>
                    <div class="label_login_chk">
                        <input
                            name="loginchk"
                            type="text"
                            class="first-input"
                            placeholder="8-16자의 영문, 숫자, 특수문자 조합된 비밀번호"
                        />
                    
                        <input
                            name="loginchk"
                            type="text"
                            class="last-input"
                            placeholder="비밀번호 확인"
                        />
                        

                        <button type="submit" >로그인하기</button>
                    </div>
                </form>
            </div>
            </div>
            </div>
            
        );
    }
}

export default Main;