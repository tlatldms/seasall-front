import React from 'react';
import Subtest from './Subtest';

const Test = ({ todoId, fetching, userId,title, completed }) => {

    const ifCompleted = (completed === true) ? "완수" : "미완수";
    /*
    const commentList= comments.map((x,idx)=> (
            <Subtest 
                name={x.name}
                body={x.body}
                idx={idx}
            />
        )
    );
    */

    return (
        <div>
            할 일 {todoId}번 <br></br>
            유저 아이디: {userId} <br></br>
            제목: {title} <br></br>
            완수했나? : {ifCompleted}
         
        </div>
    );
};

export default Test;