import React, { Component } from 'react';


import Footer from 'common/Footer';
import Navi from 'common/Navi';
import Header from 'common/Header'
import UnderHeader from 'common/UnderHeader'


class Main extends Component {
    render() {
        return (
            <div>
                <div className='page-template'>
                    <Header></Header>
                    <UnderHeader></UnderHeader>
                    <div className='both-navibox'>
                        <div className='navibox-for-margin'>
                            <div className='navibox navionly'>
                                <Navi></Navi>
                            </div>
                            <div className='details-box'>                      
                                <div className='box first'>
                                    배송지관리페이지
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