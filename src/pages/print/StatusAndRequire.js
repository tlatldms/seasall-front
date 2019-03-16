import React, { Component } from 'react';
import './StatusAndRequire.scss';
import A from 'images/bi_4.png';
import B from 'images/logo.png';
import C from 'images/bi_4.png';
import D from 'images/network.png';

class StatusAndRequire extends Component {
  constructor(){
    super();
  }
    render() {

      const images = [
        {
          original: A,
          thumbnail: A,
        },
        {
          original: A,
          thumbnail: A,
        },
        {
          original: A,
          thumbnail: A,
        },
      ]

        return (
            <div class="status-require">
                프린트 상태 및 요청
               
            </div>
        );
    }
}

export default StatusAndRequire;