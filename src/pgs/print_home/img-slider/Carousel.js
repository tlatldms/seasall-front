import React, { Component } from 'react';
import A from 'images/labelA.png';
import B from 'images/labelB.png';
import C from 'images/labelC.png';
import D from 'images/labelD.png';
import Modal from 'react-responsive-modal';
import InnerModal from '../modals/InnerModal';
import { Link } from 'react-router-dom';


import ModalAsk from 'pgs/modals_ask/Main';
import ModalRelease from 'pgs/modals_release/Main';
import ModalPn from 'pgs/modals_pn/Main';
import ModalRack from 'pgs/modals_rack/Main';
import ModalSelectPrinter from 'pgs/modals_select_printer/Main';


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


    render() {
        return (
            <div class="carousel">
                <Arrow direction="left" clickFunction={this.previousSlide} glyph="&#9664;" />
                <ImageSlide url={imgUrls[this.state.currentImageIndex]} curidx={this.state.currentImageIndex} class="tmptmp"/>
                <Arrow direction="right" clickFunction={this.nextSlide} glyph="&#9654;" />
            </div>
        );
    }
}

const Arrow = ({ direction, clickFunction, glyph }) => (
    <div
        className={`slide-arrow ${direction} testtest`}
        onClick={clickFunction}>
        {glyph}
    </div>
);

const nopad = {
    padding: '0px',
}

class ImageSlide extends Component {
    state = {
        imgopen: false,
    }
    onOpenImgModal = () => {
        console.log("make state true");
        this.setState({ imgopen: true });
    };


    rendermodal(idx) {
        switch (idx) {
            case 0:
                return <ModalAsk />
            case 1:
                return <ModalPn />
            case 2:
                return <ModalRelease />
            case 3:
                return <ModalRack />
            default:
                return null
        }
    }

    createPathname(idx) {
        switch (idx) {
            case 0:
                return '/print_home/modals_ask'
            case 1:
                return '/print_home/modals_pn'
            case 2:
                return '/print_home/modals_release'
            case 3:
                return '/print_home/modals_rack'
            default:
                return null
        }
    }

    render() {
        const { url, curidx } = this.props;
        return (
            
            <div>
            <div className="image-slide">
                <Link
                    to={{
                        pathname: `${this.createPathname(curidx)}`,
                    }}
                    class="link"
                >
                <img src={url} alt="" onClick={this.onOpenImgModal} class="testtest"></img>
                </Link>
            </div>
        </div>      
  
        );
    }
}


export default Carousel;
