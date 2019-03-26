import React, { Component } from 'react';
class Main extends Component {
    render() {
        return (
            <div class="whole">
                <div class="login-bg">
                    <div class="login-container">
                        <div class="new">
                            <h5>권한요청 승인 후 서비스를 이용하실 수 있습니다.</h5>
                        
                            <form onSubmit={this.handleSubmit}>
                                <div class="label_login_chk">
                                    <input
                                        name="loginchk"
                                        type="text"
                                        class="first-input"
                                        placeholder="회사"
                                    />
                                    <input
                                        name="loginchk"
                                        type="text"
                                        placeholder="사번"
                                    />
                                    <input
                                        name="loginchk"
                                        type="text"
                                        placeholder="8-16자의 영문, 숫자, 특수문자 조합된 비밀번호"
                                    />
                                    <input
                                        name="loginchk"
                                        type="text"
                                        placeholder="비밀번호 확인"
                                    />
                                    <input
                                        name="loginchk"
                                        type="text"
                                        placeholder="연락처를 -없이 입력하세요."
                                    />
                                    <input
                                        name="loginchk"
                                        type="text"
                                        class="last-input"
                                        placeholder="인증번호 6자리"
                                    />
                                    <input
                                        name="loginchk"
                                        type="text"
                                        class="first-input"
                                        placeholder="서비스 이용약관에 동의합니다."
                                    />
                                    <input
                                        name="loginchk"
                                        type="text"
                                        class="last-input"
                                    />
                                    <button type="submit">권한요청하기</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;