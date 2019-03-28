import React, {Component} from 'react';
import Logo from 'images/icon.svg';
import Modal from 'react-responsive-modal';

const nopad = {
    padding: '0px',
}

class Main extends Component {
    onCloseImgModal = () => {
        console.log("make state false");
        this.setState({ imgopen: false });
        //window.location.replace("http://localhost:3000/print_home")
        this.props.history.goBack();
    };
    render(){
        return (

            <Modal open='true' onClose={this.onCloseImgModal} center style={nopad}>       
                <div class="modal-innerbox">
                    <div class="modal-header">프린터 문의</div>
                    <img src={Logo} class="ask-logo"/>
                    <div class="modal-content">라벨 프린터에 문제가 발생하였나요?
                    <hr id="askhr"></hr>
                    전화문의 01000000
                    이메일문의 aa@aa.com
                    </div>
                </div>
            </Modal>
        );
    }
};

export default Main;