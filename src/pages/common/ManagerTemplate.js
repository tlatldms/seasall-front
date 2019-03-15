import React, { Component } from 'react';
import styles from './ManagerTemplate.scss';
import Header from './manager-header/ManagerHeader';
import classNames from 'classnames';
import Footer from './footer/Footer';
import UnderHeader from './manager-header/UnderHeader';
import Navi from 'pages/manager/navi/Navi'
import Details from 'pages/manager/Details';

const cx= classNames.bind(styles);

class ManageTemplate extends Component {

    render() {
       
        return (
            <div>
                <div className={cx('page-template')}>
                    <Header></Header>
                    <UnderHeader></UnderHeader>
                    <div className={cx('both-navibox')}>
                     
                            <div className={cx('navibox', 'navionly')}>
                                <Navi></Navi>
                            </div>
                            <div>
                            <Details></Details>
                            </div>
                       
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
};



export default ManageTemplate;