import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Page from 'pages/print/Page';

const Login = () => {
        return (
            <div>
                <Route path="/print" component={Page}/>    
            </div>
        );
};

export default Login;