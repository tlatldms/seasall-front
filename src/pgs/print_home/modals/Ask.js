import React from 'react';
import Logo from 'images/icon.svg';

const Ask = () => {
    return (
        <div class="modal-innerbox">
            <div class="modal-header">프린터 문의</div>
            <img src={Logo} class="ask-logo"/>
            <div class="modal-content">라벨 프린터에 문제가 발생하였나요?
            <hr id="askhr"></hr>
            전화문의 01000000
            이메일문의 aa@aa.com
            </div>
        </div>
    );
};

export default Ask;