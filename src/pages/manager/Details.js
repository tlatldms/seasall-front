import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Main from 'pages/manager/main/Main';
import Report from 'pages/manager/report/Report';
import Grade from 'pages/manager/grade/Grade';
import Rack from 'pages/manager/rack/Rack';
import Buy from 'pages/manager/buy/Buy';
import BuyList from 'pages/manager/buy/BuyList';
import RcvPlace from 'pages/manager/buy/RcvPlace';

/*어떤 주소로 왔을 때 무엇을 보여줄 지 정의*/
const Details = () => {
        return (      
            <div>
                <Route path="/manager/main" component={Main}/>
                <Route path="/manager/report" component={Report}/>
                <Route path="/manager/rack" component={Rack}/>
                <Route path="/manager/grade" component={Grade}/>
                <Route exact path="/manager/buy" component={Buy}/>
                <Route path="/manager/buy/buylist" component={BuyList} />
                <Route path="/manager/buy/rcvplace" component={RcvPlace}/>
            </div>
        );
};

export default Details;
