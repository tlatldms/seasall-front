import React, { Component } from 'react';
import './StatusAndRequire.scss';
import Carousel from './img-slider/Carousel';


class StatusAndRequire extends Component {
  constructor(){
    super();
  }
    render() {


        return (
            <div class="other-labels">
            
                프린트 상태 및 요청
                <div class="ca-box">
                <Carousel />
                </div>
            </div>
        );
    }
}

export default StatusAndRequire;