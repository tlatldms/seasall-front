import React, { Component } from 'react';
import Tabs from 'common//Tabs';
import BuyProduct_1 from './BuyProduct_1';
import BuyProduct_2 from './BuyProduct_2';
import BuyProduct_3 from './BuyProduct_3';


import Footer from 'common/Footer';
import Navi from 'common/Navi';
import Header from 'common/Header'
import UnderHeader from 'common/UnderHeader'



class Main extends Component {
 
    
    render(){
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
                            <Tabs>
                                <div label="1">
                                    <BuyProduct_1 />
                                </div>
                                <div label="2">
                                    <BuyProduct_2 />
                                </div>
                                <div label="3">
                                    <BuyProduct_3 />
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