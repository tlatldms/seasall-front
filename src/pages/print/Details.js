import React from 'react';
import { Route } from 'react-router-dom';
import Main from './Main';

const Details = () => {
    return (
        <div>
            <Route path="/print/main" component={Main} />
        </div>
    );
};

export default Details;