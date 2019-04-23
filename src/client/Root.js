/* 이 컴포넌트는 우리의 웹어플리케이션에 BrowserRouter를 적용합니다.
나중에 리덕스를 적용 하게 될 때, 여기서 Provider 를 통하여 프로젝트에 리덕스를 연결시켜줍니다. */

/* BrowserRouter는 HTML5의 history API를 사용하여
새로고침 하지 않고도 페이지 주소를 교체할 수 있게 한다. */

import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from 'pgs/Details';
import 'asset/common/css/web_style.css';

const Root = () => {
    return (
        <BrowserRouter
        basename="/seasall">>
            <App/>
        </BrowserRouter>
    );
};

export default Root;
