import React, {Component} from 'react';
import List from 'pages/manager/report/List';
import * as service from 'AxiosGetApi';


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
    
            <input 
                value={this.state.keyword}
                onChange={this.handleKeywordChange}
                placeholder="검색하세요"
            />
            <button onClick={this.changeState}>검색</button>
            Rack page<br></br>
            API from: https://jsonplaceholder.typicode.com/todos<br></br><br></br>
          <List
            disabled= { fetching}
            todos={searched}
          />
        </div>
        );
    }
};

export default Main;