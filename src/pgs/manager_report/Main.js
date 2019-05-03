import React, {Component} from 'react';
import * as service from 'AxiosGetApi';
import List from './List';
import Navi from 'common/Navi';
import classNames from 'classnames/bind';


class Main extends Component {
  state = {
    filter : "all"
  }
  handleFilter = (e) => {
    this.setState({
      filter: e.target.value,
      option:false
    })
  }
    render() { 
        return (
          <article id="contentsWrap" className="report01">
          <div className="innerwrap">
            <form action="#" acceptCharset="utf-8" name="report01" method="get">
            <Navi />
            <div className="contents_area">
              <div className="panel">
                <div className="panel_header">
                  <div className="left">
                    <h2>신고현황</h2>
                  </div>
                  <div className="right">
                  <div onClick={()=>this.setState({option:!this.state.option})} className={classNames("selectBox select_box06", {'open':this.state.option})}>
                            <div className="select_btn">
                                <p><span>2018년</span></p>
                            </div>
                            <div className="option_list">
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
                <div className="panel_contents">
                  <div className="panel02">
                    <div className="panel_header">
                      <div className="select_box03">
                        <select value={this.state.filter} className="select03" onChange={this.handleFilter}>
                          <option value="all" defaultValue>유형선택</option>
                          <option value="하나">하나</option>
                          <option value="둘">둘</option>
                          <option value="셋">셋</option>
                        </select>
                      </div>
                      <span></span>
                    </div>
                    <div className="panel_contents">
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