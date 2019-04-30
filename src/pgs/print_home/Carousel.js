import React, { Component } from 'react';
import A from 'images/labelA.png';
import B from 'images/labelB.png';
import C from 'images/labelC.png';
import D from 'images/labelD.png';
import { Link } from 'react-router-dom';

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

class ImageSlide extends Component {
    state = {
        imgopen: false,
    }
    onOpenImgModal = () => {
        this.setState({ imgopen: true });
    };

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
                
                {
                /* <Link
                    to={{
                        pathname: `${this.createPathname(curidx)}`,
                    }}
                    class="link"
                >
                <img src={url} alt="" onClick={this.onOpenImgModal} class="testtest"></img>
                </Link>
                */}

                <a href="#test"><img src={url} alt="" onClick={this.onOpenImgModal} class="testtest"></img></a>
            </div>
        </div>      
  
        );
    }
}


export default Carousel;
