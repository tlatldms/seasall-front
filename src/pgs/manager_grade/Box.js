import React from 'react';
import ApplyStatus from './ApplyStatus';
import EditAuthority from './EditAuthority';

const Box = ({ onFocusChange, focus }) => {
    if (focus === 'apply') return <ApplyStatus />
    else if ( focus === 'edit') return <EditAuthority />;
};

export default Box;