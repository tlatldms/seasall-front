import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <article id="contentsWrap" class="report01">
        <div class="innerwrap">
          <form action="#" accept-charset="utf-8" name="report01" method="get">
          <div class="gnb_area">
            <aside class="box_menu">
              <div class="box_top">
                <div class="icon_menu">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span class="tit">MENU</span>
              </div>
              <nav>
                <ul class="gnb">
                  <li>
                    <a href="#"><span>메인</span></a>
                  </li>
                  <li>
                    <a href="#" class="on_gnb"><span>신고처리</span></a>
                  </li>
                  <li>
                    <a href="#"><span>렉관리</span></a>
                  </li>
                  <li>
                    <a href="#"><span>등급관리</span></a>
                  </li>
                  <li>
                    <a href="#"><span>구매/청구</span></a>
                    <ul class="sub_gnb">
                      <li><a href="#">제품구매</a></li>
                      <li><a href="#">구매목록</a></li>
                      <li><a href="#">배송지관리</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </aside>
            <button class="btn_printpage"><span></span>출력페이지</button>
          </div>
          <div class="contents_area">
            <div class="panel">
              <div class="panel_header">
                <div class="left">
                  <h2>신고처리</h2>
                </div>
                <div class="right">
                  <div class="selectBox select_box06">
                          <div class="select_btn">
                              <p><span>2018년</span></p>
                          </div>
                          <div class="option_list">
                              <ul>
                                  <li><a href="#">2018년</a></li>
                                  <li><a href="#">2017년</a></li>
                                  <li><a href="#">2016년</a></li>
                                  <li><a href="#">2015년</a></li>
                              </ul>
                          </div>
                      </div>
                </div>
              </div>
              <div class="panel_contents">
                <div class="panel02">
                  <div class="panel_header">
                    <div class="select_box03">
                      <select class="select03">
                        <option selected>유형선택</option>
                        <option>1유형</option>
                        <option>2유형</option>
                        <option>3유형</option>
                      </select>
                    </div>
                    <span></span>
                  </div>
                  <div class="panel_contents">
                    <div class="table03">
                      <div class="thead">
                        <div class="th">신고번호</div>
                        <div class="th">신고번호</div>
                        <div class="th">신고일자</div>
                        <div class="th">신고유형</div>
                        <div class="th">P/N</div>
                        <div class="th">답변시간</div>
                      </div>
                      {/* list 없을시 들어가는 클래스 - none */}
                      <div class="tr none">
                        <div class="td">
                            <p>신고처리 목록이 없습니다.</p>
                        </div>
                      </div>
                    </div>
                    <div class="pagination">
                            <div class="prev">
                              {/* pagination 버튼 비활 성화 클래스 - disable */}
                                <a href="#" class="prev02 disable"></a>
                                <a href="#" class="prev01 disable"></a>
                            </div>
                            {/* pagination 선택 클래스 - on_pager */}
                            <a href="#" class="on_pager">1</a>
                            <div class="next">
                                <a href="#" class="next01 disable"></a>
                                <a href="#" class="next02 disable"></a>
                            </div>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </article>
    );
  }
}

export default Main;

{/*
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
*/}
