import React, { Component } from 'react';
import ItemList from './ItemList';
import Footer from 'common/Footer';
import Navi from 'common/Navi';
import Header from 'common/Header'
import UnderHeader from 'common/UnderHeader'
import classNames from 'classnames';

class Main extends Component {
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
            <div>
            <div class='page-template'>
                <Header></Header>
                <UnderHeader></UnderHeader>
                <div class='both-navibox'>
                    <div class='navibox-for-margin'>
                        <div class='navibox navionly'>
                            <Navi></Navi>
                        </div>
                        <div class='details-box'>
                        <div class="box first">
                            구매목록페이지
                            <ItemList database={this.state.database}/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

        );
    }
}

export default Main;