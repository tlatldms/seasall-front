import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import classNames from 'classnames/bind';
import axios from 'axios';

const acceptURL = 'https://dev.hchecker.org/groups';
const axios1 = axios.create({
    withCredentials: true
})


const nopad = {
    padding: '0px',
}

class Main extends Component {
    handleAccept =() => {
        axios1.post(`${acceptURL}`)
        .then(res => {
            if (res.data.success) {
                console.log(res);
            }
        })
        .catch(e => { console.log(e); });
    }
    state= {
        option:false
    }
    onCloseModal = () => {
        console.log("make state false");
        this.setState({ open: false });
        this.props.history.goBack();
    };
    render() {
        return (
            <Modal open={true} onClose={this.onCloseModal} center style={nopad}>
                <div class="popup pop01 grade_pop01">
                    <div class="pop_header">
                        권한요청
                <button class="btn_close" type="button" onClick={this.onCloseModal}></button>
                    </div>
                    <div class="pop_content">
                        <div class="pop_top">
                            <p class="tit">권한요청을 수락하시겠습니까?</p>
                            <p class="txt">해당 요청자에 부여할 등급을 선택해 주세요.</p>
                            <div class="box_grade">
                                <div class="requester_info">
                                    <p>요청자 : <span class="requester_name">이흥수 </span>[사번 : <span class="requester_num">123456</span>]</p>
                                    <p>소속 : <span class="requester_belong bar">현대씨즈올</span> 부서명 : <span class="requester_department">영업</span></p>
                                </div>
                                
                                <div onClick={() => this.setState({ option: !this.state.option })} class={classNames("selectBox select_box08", { 'open': this.state.option })}>
                                    <div class="select_btn">
                                        <p><span>등급선택</span></p>
                                    </div>
                                    <div class="option_list">
                                        <ul>
                                            <li><a href="#">G1</a></li>
                                            <li><a href="#">G2</a></li>
                                            <li><a href="#">G3</a></li>
                                            <li><a href="#">G4</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pop_bottom">
                            <button class="btn_big" onClick={this.handleAccept}>요청수락하기</button>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
};

export default Main;

