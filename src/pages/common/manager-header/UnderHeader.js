import React, { Component } from 'react';
import './UnderHeader.scss'
import {Link, Route} from 'react-router-dom';

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

const UnderHeader = ({match}) => {

        return (
            <div class="underheader-box">
                {year}.{month}.{day} 통계기준 
            </div>
        );

}
export default UnderHeader;