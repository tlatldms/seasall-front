import React, { Component } from 'react';


import Footer from 'common/Footer';
import Navi from 'common/Navi';
import Header from 'common/Header'
import UnderHeader from 'common/UnderHeader'


class Main extends Component {
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
                                <div class='box first'>
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