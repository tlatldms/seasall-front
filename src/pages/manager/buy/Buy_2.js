import React, { Component } from 'react';
import 'pages/common/tab/TabStyle.scss';
import BuyItemList from './BuyItemList';

class Buy_2 extends Component {
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
        
        return (
            <div class="box sw">
                2번 페이지
                <BuyItemList database={this.state.database} />
            </div>
        );
    }
}

export default Buy_2;