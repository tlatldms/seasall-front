import React from 'react';
import './List.scss';

const Item = ( { title, completed, idx }) => {
    const ifCompleted = (completed === true) ? "TRUE" : "FALSE";
    return (
        <div class="report-item">
            partsId: {idx} &nbsp;
            supervisiorId: {title}&nbsp;
            isValid : {ifCompleted}
        </div>
    );
};

export default Item;