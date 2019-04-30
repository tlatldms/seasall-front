import React from 'react';

const Subtest = ( {name, body, idx}) => {
    return (
        <div>
            인덱스: {idx} <br></br>
            이름: {name} <br></br>
            내용: {body}
        </div>
    );
};

export default Subtest;