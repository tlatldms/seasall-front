import React, { Component } from 'react';
import './Grade.scss';
import Box from './Box';
import Tabs from 'pages/common/tab/Tabs';
import 'pages/common/tab/TabStyle.scss';
import ApplyStatus from './ApplyStatus';
import EditAuthority from './EditAuthority';

class Grade extends Component {

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

            <Tabs>
             { /* 
            <div>
                <div class="grade-buttons">
                    <button>신청현황</button><button>권한편집</button>
                </div>

                <Box onFocusChange={changeFocus} focus= {focus} />
            </div>
            */}


                <div label="신청현황">
                    <ApplyStatus/>
                </div>
                <div label="권한편집">
                    <EditAuthority />
                </div>
                <div label="기타">
     
                </div>
            </Tabs>

        );
    }
}

export default Grade;