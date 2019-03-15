import React, { Component } from 'react';
import './OtherLabels.scss';
import ImageGallery from 'react-image-gallery';
import A from 'images/bi_4.png';
import B from 'images/logo.png';
import C from 'images/bi_4.png';
import D from 'images/network.png';
import Popup from "reactjs-popup";

class OtherLabels extends Component {
    render() {
        const images = [
            {
              original: A,
              thumbnail: A,
            },
            {
              original: B,
              thumbnail: B,
            },
            {
              original: C,
              thumbnail: C,
            },
            {
                original: D,
                thumbnail: D,
            }
          ]

        return (
            <div class="other-labels">
                <Popup trigger={<p>기타라벨출력 </p>} position="right center">
                  테스트
                </Popup>
                <ImageGallery items={images} />
            </div>

        );
    }
}

export default OtherLabels;