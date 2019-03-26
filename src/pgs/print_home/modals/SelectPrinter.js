import React, { Component } from 'react';

class SelectPrinter extends Component {
    render() {
        return (
            <div class="modal-innerbox">
            <div class="modal-header">프린터 선택</div>
            printer 1 <br></br>
            printer 2 <br></br>
            printer 3
        </div>
        );
    }
}

export default SelectPrinter;

import React from 'react';
import './Modal.scss';

const Ask = () => {
    return (
        <div class="modal-innerbox">
            <div class="modal-header">프린터 문의</div>
            라벨 프린터에 문제가 발생하였나요?
            <hr></hr>
            전화문의 01000000
            이메일문의 aa@aa.com
        </div>
    );
};

export default Ask;