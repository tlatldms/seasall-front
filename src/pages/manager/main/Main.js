import React from 'react';
import './Main.scss';

import ReportStatus from './ReportStatus';
import PaymentMonth from './PaymentMonth';
import PaymentPlace from './PaymentPlace';
import StockMos from './StockMos';

const Main = () => {
    return (
        <div>
            <ReportStatus />
            <StockMos />
            <PaymentMonth />
            <PaymentPlace />
        </div>
    );
};

export default Main;