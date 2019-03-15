import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Page from 'pages/login/Page';

const Login = () => {
        return (
            <div>
                <Route path="/login" component={Page}/>    
            </div>
        );
};

export default Login;
