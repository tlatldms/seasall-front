import React from 'react';
import './List.scss';

const Item = ( { title, completed, idx }) => {
    const ifCompleted = (completed === true) ? "완수" : "미완수";
    return (
        <div class="report-item">
            [{idx}] 
            *Title: {title} <br></br>
            *Completed : {ifCompleted}
        </div>
    );
};

export default Item;