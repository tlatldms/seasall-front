import React from 'react';
import Ask from './Ask';
import Pn from './Pn';
import Release from './Release';
import Rack from './Rack';

const InnerModal = ({idx}) => {
    switch (idx) {
        case 0:
            return <Ask></Ask>
        case 1:
            return <Pn></Pn>
        case 2:
            return <Release></Release>
        case 3:
            return <Rack></Rack>
    }
};

export default InnerModal;