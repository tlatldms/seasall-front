import React, {Component} from 'react';
import * as service from 'AxiosGetApi';
import List from './List';
import Navi from 'common/Navi';

class Main extends Component {
  state = {
    filter : "all"
  }
  handleFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }
    render() { 
        return (
          <article id="contentsWrap" class="report01">
          <div class="innerwrap">
            <form action="#" accept-charset="utf-8" name="report01" method="get">
            <Navi />
            <div class="contents_area">
              <div class="panel">
                <div class="panel_header">
                  <div class="left">
                    <h2>신고현황</h2>
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
                        <select value={this.state.filter} class="select03" onChange={this.handleFilter}>
                          <option value="all" selected>유형 전체선택</option>
                          <option value="하나">하나</option>
                          <option value="둘">둘</option>
                          <option value="셋">셋</option>
                        </select>
                      </div>
                      <span></span>
                    </div>
                    <div class="panel_contents">
                    <List filter={this.state.filter}/>

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
};

export default Main;