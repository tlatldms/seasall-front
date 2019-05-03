import React, { Component } from 'react';
import Carousel from './Carousel';


class OtherLabels extends Component {
  render() {
    return (
      <div className="other-labels">
      기타라벨출력
        <div className="ca-box">
          <Carousel />
        </div>
      </div>

    );
  }
}

export default OtherLabels;