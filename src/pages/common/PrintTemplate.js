import React, { Component } from 'react';
import styles from './PrintTemplate.scss';
import Header from './manager-header/ManagerHeader';
import classNames from 'classnames';
import Footer from './footer/Footer';
import Details from 'pages/print/Details';
import Sliders from 'pages/print/Sliders';
import OtherLabels from 'pages/print/OtherLabels';
import StatusAndRequire from 'pages/print/StatusAndRequire';
import Main from 'pages/print/Main';


const cx= classNames.bind(styles);

class PrintTemplate extends Component {

    render() {
       
        return (
            <div>
                <div className={cx('printpage-template')}>
                    <Header/>
                    <div className={cx('main')}>
                        <Main />
                    </div>
                    <div className={cx('both-sliders')}>        
                       <OtherLabels />           
                        <StatusAndRequire />                                     
                   </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
};



export default PrintTemplate;