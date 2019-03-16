import React, { Component } from 'react';
import './OtherLabels.scss';
import Popup from "reactjs-popup";
import Modal from 'react-responsive-modal';
import Ask from './modals/Ask';
import Carousel from './img-slider/Carousel';


class OtherLabels extends Component {

  state = {
    open: false,

  };
  
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {

    

    return (
      <div class="other-labels">

        <button onClick={this.onOpenModal}>Open modal</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <Ask></Ask>
        </Modal>

        <Popup trigger={<p>기타라벨출력 </p>} position="right center" modal>
          테스트<br></br><br></br>
        </Popup>


         { /* 
         <ImageGallery items={images} onClick={this.handleImageClick}/>
        */}
        


        <Carousel />
      </div>

    );
  }
}

export default OtherLabels;