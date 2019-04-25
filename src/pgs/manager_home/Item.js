import React from 'react';

const Item = ( { id, type, parts,state }) => {
    
    return (
        <div class="report-item">
            id: {id} &nbsp;
            type: {type} &nbsp;
            parts : {parts}
            state : {state}
        </div>
    );
};

export default Item;