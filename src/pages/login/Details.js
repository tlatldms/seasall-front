import React from 'react';
import {Route} from 'react-router-dom';
import Main from './Main';
import New from './New';
import FindId from './FindId';
import FindPw from './FindPw';
import NewPw from './NewPw';
import Authorize from './Authorize';


const Details = () => {
    return (
        <div>
            <Route path='/login/main' component={Main} />
            <Route path='/login/new' component={New}/>
            <Route path='/login/findid' component={FindId}/>
            <Route path='/login/findpw' component={FindPw}/>
            <Route path='/login/newpw' component={NewPw}/>
            <Route path='/login/authorize' component={Authorize}/>
        </div>
    );
};

export default Details;