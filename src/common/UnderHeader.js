import React, { Component } from 'react';

let date = new Date(); 
let year = date.getFullYear(); 
let month = new String(date.getMonth()+1); 
let day = new String(date.getDate()); 

// 한자리수일 경우 0을 채워준다. 
if(month.length == 1){ 
  month = "0" + month; 
} 
if(day.length == 1){ 
  day = "0" + day; 
} 

const UnderHeader = () => {

        return (
          <div class="breadscrumb">
            <div class="innerwrap">
              <div class="left">
                <ul>
                  <li>메인</li>
                  <li>대표통계</li>
                </ul>
              </div>
              <div class="right">
                <p>{year}.{month}.{day} 통계기준</p>
              </div>
            </div>
          </div>
        );

}
export default UnderHeader;