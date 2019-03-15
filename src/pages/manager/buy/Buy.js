import React, { Component } from 'react';
import BuyItemList from './BuyItemList';
import Tabs from 'pages/common/tab/Tabs';
import 'pages/common/tab/TabStyle.scss';
import 'styles/Box.scss';
import './style.scss';


class Buy extends Component {
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
    
    render(){
        return (
            
            <Tabs>
             { /* 
            <div>
                <div class="grade-buttons">
                    <button>신청현황</button><button>권한편집</button>
                </div>

                <Box onFocusChange={changeFocus} focus= {focus} />
            </div>
            */}


                <div label="1">
                    1번
                </div>
                <div label="2">
                <BuyItemList database={this.state.database} />
                </div>
                <div label="3">
                    아무말
                </div>
            </Tabs>

        );
    }
}

export default Buy;