import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Page from 'pages/manager/Page';


/*어떤 주소로 왔을 때 무엇을 보여줄 지 정의*/
const Manager = () => {
        return (      
            <div>
                <Route path="/manager" component={Page}/>
            </div>
        );
};

export default Manager;
