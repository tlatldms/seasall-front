import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

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
                <div className="modal-innerbox">
                    <div className="modal-header">
                    P / N 라벨
                    </div>
                    <div className="modal-content">
                        내용내용
                    </div>
                </div>
            </Modal>
        );
    }
}

export default Main;