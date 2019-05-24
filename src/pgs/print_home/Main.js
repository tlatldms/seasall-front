import React, {Component} from 'react';
import List from 'pgs/manager_report/List';


import Header from 'common/Header';
import Footer from 'common/Footer';
import Sliders from './Sliders';
import OtherLabels from './OtherLabels';
import StatusAndRequire from './StatusAndRequire';


let date = new Date(); 
let year = date.getFullYear(); 
let month = new String(date.getMonth()+1); 
let day = new String(date.getDate()); 
let hours = new String(date.getHours()); 
let minutes = new String(date.getMinutes()); 

// 한자리수일 경우 0을 채워준다. 
if(month.length == 1){ 
  month = "0" + month; 
} 
if(day.length == 1){ 
  day = "0" + day; 
} 

class Main extends Component {

render() {
     
        return (
          <div>
          
        </div>

        );
    }
};

export default Main;