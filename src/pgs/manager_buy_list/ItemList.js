import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
    state= {
        database: [
            {
                img: 1,
                title: 'title1',
                desc: 'desc1',
            },
            {
                img: 2,
                title: 'title2',
                desc: 'desc2',
            },
            {
                img: 3,
                title: 'title3',
                desc: 'desc3',
            },
            {
                img: 3,
                title: 'title3',
                desc: 'desc3',
            },
            {
                img: 3,
                title: 'title3',
                desc: 'desc3',
            },
        ]
    } 
    render() {
        const { database } = this.props;
        const buy_item_list = database.map(
            x => (

                <Item
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

export default ItemList;