import React, { Component } from 'react';
import './Main.scss';

class Find extends Component {
    render() {
        return (
            <div>
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
        );
    }
}

export default Find;