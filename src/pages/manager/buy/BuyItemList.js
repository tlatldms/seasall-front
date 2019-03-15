import React, { Component } from 'react';
import BuyItem from './BuyItem';
import './BuyItemList.scss';

class BuyItemList extends Component {
    render() {
        const { database } = this.props;
        const buy_item_list = database.map(
            x => (

                <BuyItem
                    database= {x}
                />
            )
        );      
        return (
            <div>
                { buy_item_list }
            </div>
        );
    }
}

export default BuyItemList;