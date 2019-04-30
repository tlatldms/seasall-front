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
            <div class="modal-innerbox">
                <div class="modal-header">프린터 선택</div>
                printer 1 <br></br>
                printer 2 <br></br>
                printer 3
            </div>
        </Modal>
        );
    }
}

export default Main;
