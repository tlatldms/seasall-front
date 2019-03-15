import React, { Component } from 'react';
import './BuyItem.scss';

class BuyData extends Component {
    render() {
        const {img, title, desc} = this.props.database;
        return ( 
            <div class="buy-item">
                {img} {title} {desc}
            </div>
        );
    }
}

export default BuyData;