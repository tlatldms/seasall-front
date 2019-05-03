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
                <div className="popup pop01 main_pop01">
                    <div className="pop_header">
                        출력 권한 요청
                        <button className="btn_close" type="button" onClick={this.onCloseModal}></button>
                    </div>
                    <div className="pop_content">
                        <div className="pop_top">
                            <img src={IconNoti} alt="" />
                            <p className="tit">출력페이지 접근권한이 없습니다.</p>
                            <p className="txt">접근을 원하시면 권한요청을 해주세요.</p>
                        </div>
                        <div className="pop_bottom">
                            <button className="btn_big"><Link to="/login_authorize">권한요청하기</Link></button>
                        </div>
                    </div>
                </div>
                <div className="pop_bg"></div>
            </Modal>
        );
    }
};

export default Main;

