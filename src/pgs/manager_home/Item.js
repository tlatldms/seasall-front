import React from 'react';

const Item = ( { call,
    createdAt,
    type,
    parts,
    id }) => {
    
    return (
            <tr>
                <td> {call} </td>
                <td> {createdAt.slice(0,10)} </td>
                <td> {type}  </td>
                <td> {parts} </td>
                <td> {id} </td>
            </tr>        
    );
};

export default Item;