import React, { Component } from 'react';
import * as service from 'AxiosGetApi';
import Test from './Test';
import { Button } from 'semantic-ui-react';


import Footer from 'common/Footer';
import Navi from 'common/Navi';
import Header from 'common/Header'
import UnderHeader from 'common/UnderHeader'


class Main extends Component {

    constructor(props) {
      super();
      // initializes component state
      this.state = {
          TodoId: 9,
          fetching: false, // tells whether the request is waiting for response or not
          todo: {
              userId: null,
              title: null,
              completed: null
          },
          //comments: []
      };
    }

    componentDidMount() {
      this.fetchPostInfo(1);
    }

    fetchPostInfo = async (TodoId) => {
      this.setState({
        fetching: true
      })
      const info = await Promise.all([
        service.getPost(TodoId),
        //service.getComments(TodoId)
      ]);
      const {userId, title, completed} = info[0].data;

      //const comments = info[1].data;
      
      this.setState({
       TodoId,
       todo: {
          userId: userId,
          title: title,
          completed: completed
        },
        fetching:false
      })
    }



    handleNavigateClick = (type) => {
      const todoId = this.state.TodoId;

      if(type === 'next') {
          this.fetchPostInfo(todoId+1);
      } else {
          this.fetchPostInfo(todoId-1);
      }
  }
    render() {
      const { TodoId, fetching, todo} = this.state;
      //console.log("지금 투두 아이디는? Rack.js의 첫 부분에서 로그함:"+ TodoId);
      
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
                          <div class="box first">
                            <Button
                              color="teal"
                              content="이전 할 일"
                              icon="left arrow"
                              labelPosition="left"
                              onClick={
                                  ()=>this.handleNavigateClick('prev')
                              }
                              disabled={fetching}
                            />
                            {TodoId}                            
                            <Button
                              color="teal"
                              content="다음 할 일"
                              icon="right arrow"
                              labelPosition="right"
                              onClick={
                                  ()=>this.handleNavigateClick('next')
                              }
                              disabled={fetching}
                            />
                            Rack 페이지  
                            <Test
                              todoId= {TodoId}
                              disabled={fetching}
                              userId = {todo.userId}
                              title = {todo.title}
                              completed={todo.completed}                               
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
}

export default Main;     