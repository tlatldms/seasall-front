import React, { Component } from 'react';
import A from 'images/bi_4.png';
import B from 'images/logo.png';
import C from 'images/bi_4.png';
import D from 'images/network.png';
import './Carousel.scss';
import Modal from 'react-responsive-modal';
import InnerModal from '../modals/InnerModal';


const imgUrls = [
    A, B, C, D
];

class Carousel extends Component {
    state = {
        imgopen: false,
    }
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    handleImageClick = (e, obj) => {
        console.log(obj);
        this.setState({
            imgopen: true
        });

    }


    previousSlide() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    func() {
        switch (this.state.currentImageIndex) {
            case 0:
                console.log("00000");
                break;
            case 1:
                console.log("11111");
                break;
            case 2:
                console.log("22222");
                break;
        }
    }

    render() {
        return (
            <div class="carousel">
                <Arrow direction="left" clickFunction={this.previousSlide} glyph="&#9664;" />
                <ImageSlide url={imgUrls[this.state.currentImageIndex]} func={this.func()} curidx={this.state.currentImageIndex} />
                <Arrow direction="right" clickFunction={this.nextSlide} glyph="&#9654;" />
            </div>
        );
    }
}

const Arrow = ({ direction, clickFunction, glyph }) => (
    <div
        className={`slide-arrow ${direction}`}
        onClick={clickFunction}>
        {glyph}
    </div>
);

class ImageSlide extends Component {
    state = {
        imgopen: false,
    }
    onOpenImgModal = () => {
        console.log("make state true");
        this.setState({ imgopen: true });
    };

    onCloseImgModal = () => {
        console.log("make state false");
        this.setState({ imgopen: false });
    };
    rendermodal() {

    }

    render() {
        const { url, func, curidx } = this.props;

        return (
            <div>
                <Modal open={this.state.imgopen} onClose={this.onCloseImgModal} center>
                    <InnerModal idx={curidx} />
                </Modal>
                <div className="image-slide">
                    <img src={url} alt="" onClick={this.onOpenImgModal}></img>
                </div>
            </div>
        );
    }
}


export default Carousel;
