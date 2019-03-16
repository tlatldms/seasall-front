import React, { Component } from 'react';
import './OtherLabels.scss';
import Carousel from './img-slider/Carousel';


class OtherLabels extends Component {
  render() {
    return (
      <div class="other-labels">
        <div class="ca-box">
          <Carousel />
        </div>
      </div>

    );
  }
}

export default OtherLabels;