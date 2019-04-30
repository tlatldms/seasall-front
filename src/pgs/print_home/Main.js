import React, {Component} from 'react';
import List from 'pgs/manager_report/List';
import * as service from 'AxiosGetApi';

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

    constructor(props) {
        super();
        this.handleKeywordChange = this.handleKeywordChange.bind(this);
        this.changeState = this.changeState.bind(this);
        // initializes component state
        this.state = {
            fetching: false, // tells whether the request is waiting for response or not
            todos: [],
            keyword:'',
            searched:[],
        };
      }

      changeState=()=>{
      this.setState({
        searched: this.state.todos.filter(
            todo => todo.Record.partsId.indexOf(this.state.keyword) > -1)
      })
    }

      handleKeywordChange = (e) =>{
        this.setState({
            keyword: e.target.value,
          })
        }
  
      componentDidMount() {
        this.fetchPostInfo();
      }
      

      fetchPostInfo = async () => {
        this.setState({
          fetching: true
        })
        const info = await Promise.all([
          service.getTodosList()
          //service.getComments(TodoId)
        ]);
       
        const todos = info[0].data;
        this.setState({
         
          todos,
          fetching:false,
          searched: todos

        })
      }

render() {
      const {fetching, todos, searched} = this.state;
        return (
          <div>
            <div class='printpage-template'>
              <Header/>
              <div class='main'>
                  <div>
                    <h2>라벨대기목록 </h2><br></br>
                    {year}년 {month}월 {day}일 {hours}:{minutes} 기준 실시간 정보
                  <br></br>
                  <input 
                      value={this.state.keyword}
                      onChange={this.handleKeywordChange}
                      placeholder="검색하세요"
                  />
                  <button onClick={this.changeState}>검색</button>
                  <br></br>
                  Rack page<br></br>
                  API from: https://jsonplaceholder.typicode.com/todos<br></br><br></br>
                <List
                  disabled= { fetching}
                  todos={searched}
                />
              </div>
            </div>
            <div class='both-sliders'>        
                 <OtherLabels />           
                  <StatusAndRequire />                                     
            </div>
          </div>
          <Footer></Footer>
        </div>

        );
    }
};

export default Main;