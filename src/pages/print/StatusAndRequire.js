import React, { Component } from 'react';
import './StatusAndRequire.scss';
import ImageGallery from 'react-image-gallery';
import A from 'images/bi_4.png';
import B from 'images/logo.png';
import C from 'images/bi_4.png';
import D from 'images/network.png';

class StatusAndRequire extends Component {
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
            <div class="status-require">
                프린트 상태 및 요청
                <ImageGallery items={images} />
            </div>
        );
    }
}

export default StatusAndRequire;