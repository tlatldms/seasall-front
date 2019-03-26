import React from 'react';
import ReportStatus from './ReportStatus';
import PaymentMonth from './PaymentMonth';
import PaymentPlace from './PaymentPlace';
import StockMos from './StockMos';


import Footer from 'common/Footer';
import Navi from 'common/Navi';
import Header from 'common/Header'
import UnderHeader from 'common/UnderHeader'

const Main = () => {
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
                        <div>
                            <ReportStatus />
                            <StockMos />
                            <PaymentMonth />
                            <PaymentPlace />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>

    );
};

export default Main;