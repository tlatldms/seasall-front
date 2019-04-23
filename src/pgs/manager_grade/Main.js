import React, { Component } from 'react';
import Box from './Box';
import Tabs from 'common/Tabs';
import ApplyStatus from './ApplyStatus';
import EditAuthority from './EditAuthority';


import Footer from 'common/Footer';
import Navi from 'common/Navi';
import Header from 'common/Header'
import UnderHeader from 'common/UnderHeader'

class Main extends Component {

    state= {
        focus: 'apply',
    }
    changeFocus=(focus) => {
        this.setState({
            focus
        })
    }

    render() {
        const { focus } = this.state;
        const { changeFocus} = this;

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
                            <Tabs>
                                <div label="신청현황">
                                    <ApplyStatus/>
                                </div>
                                <div label="권한편집">
                                    <EditAuthority />
                                </div>
                                <div label="기타">
                                </div>
                            </Tabs>
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