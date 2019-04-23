import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import Btn from 'asset/images/btn_close.png';

const nopad = {
    padding: '0px',
}

class Main extends Component {
    onCloseImgModal = () => {
        console.log("make state false");
        this.setState({ imgopen: false });
        this.props.history.goBack();
    };
    render() {
        return (
            <Modal open='true' onClose={this.onCloseImgModal} center style={nopad}>
                <div class="popup pop01 main_pop01">
                    <div class="pop_header">
                        출력 권한 요청
                        <button onClick={this.onCloseImgModal} class="btn_close" type="button"></button>
                        <img src={Btn} onClick={this.onCloseImgModal} class="btn_close" />
                    </div>
                    <div class="pop_content">
                        <div class="pop_top">
                            <img src="/asset/images/icon_noti.png" alt="" />
                            <p class="tit">출력페이지 접근권한이 없습니다.</p>
                            <p class="txt">접근을 원하시면 권한요청을 해주세요.</p>
                        </div>
                        <div class="pop_bottom">
                            <button class="btn_big">권한요청하기</button>
                        </div>
                    </div>
                </div>

            </Modal>
        );
    }
}

export default Main;