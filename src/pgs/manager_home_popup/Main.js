import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import IconNoti from 'asset/images/icon_noti.png';
import { Link } from 'react-router-dom';

const nopad = {
    padding: '0px',
}

class Main extends Component {

    onCloseModal = () => {
        console.log("make state false");
        this.setState({ open: false });
        this.props.history.goBack();
    };
    
    render() {
        return (
            <Modal open={true} onClose={this.onCloseModal} center style={nopad}>    
                <div class="popup pop01 main_pop01">
                    <div class="pop_header">
                        출력 권한 요청
                        <button class="btn_close" type="button" onClick={this.onCloseModal}></button>
                    </div>
                    <div class="pop_content">
                        <div class="pop_top">
                            <img src={IconNoti} alt="" />
                            <p class="tit">출력페이지 접근권한이 없습니다.</p>
                            <p class="txt">접근을 원하시면 권한요청을 해주세요.</p>
                        </div>
                        <div class="pop_bottom">
                            <button class="btn_big"><Link to="/login_authorize">권한요청하기</Link></button>
                        </div>
                    </div>
                </div>
                <div class="pop_bg"></div>
            </Modal>
        );
    }
};

export default Main;

