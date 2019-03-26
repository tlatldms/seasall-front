import React, {Component} from 'react';
import * as service from 'AxiosGetApi';
import List from './List';

import Footer from 'common/Footer';
import Navi from 'common/Navi';
import Header from 'common/Header'
import UnderHeader from 'common/UnderHeader'

class Main extends Component {
    constructor(props) {
        super();
        // initializes component state
        this.state = {
            fetching: false, // tells whether the request is waiting for response or not
            todos: [],
         
        };
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
          fetching:false

        })
      }


    render() { 
      const {fetching, todos} = this.state;
        return (
          <div>
            <div class='page-template'>
                <Header></Header>
                <UnderHeader></UnderHeader>
                <div class='both-navibox'>
                    <div class='navibox-for-margin'>
                        <div class='navibox navionly'>
                            <Navi></Navi>
                        </div>
                        <div class='details-box'>
                          <div class= "box first">
                              Rack page<br></br>
                              API from: https://jsonplaceholder.typicode.com/todos<br></br><br></br>
                            <List
                              disabled= { fetching}
                              todos={todos}
                            />
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

 
        );
    }
};

export default Main;