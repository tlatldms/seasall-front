import React, { Component } from 'react';
import Tabs from 'pages/common/tab/Tabs';
import 'pages/common/tab/TabStyle.scss';
import 'styles/Box.scss';
import Buy_1 from './Buy_1';
import Buy_2 from './Buy_2';
import Buy_3 from './Buy_3';




class Buy extends Component {
 
    
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
                    <Buy_1 />
                </div>
                <div label="2">
                    <Buy_2 />
                </div>
                <div label="3">
                    <Buy_3 />
                </div>
            </Tabs>

        );
    }
}

export default Buy;