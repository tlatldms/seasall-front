import React, { Component } from 'react';
import classNames from 'classnames/bind';
import RequestList from './RequestList';

class Tab1 extends Component {
    state = {
        filter: "all",
        option: false,
        tab:-1
    }

    handleTabs=(e)=> {
        e.stopPropagation();
        this.setState({
            tab: e.currentTarget.value, 
        })
    }

    handleFilter = (e) => {
        this.setState({
            filter: e.target.text,
            option:false
        });
        console.log(this.state.filter);
    }
    handleClickAll=()=> {
        if (this.state.option==false)
        this.setState({
            option: !this.state.option
        })
        else this.setState({
            filter: "all",
            option:false
        })
        
    }

    render() {
        return (
            <div className="panel02">
                <div className="panel_header">
                    <div className="left">
                        <div className="list_button">
                            <ul>
                                {/*  버튼 선택시 들어가는 클래스  - on_button */}
                                <li value={-1} onClick={this.handleTabs}><a className={this.state.tab==-1?"on_button":null}>전체</a></li>
                                <li value={0} onClick={this.handleTabs}><a className={this.state.tab==0?"on_button":null}>대기중</a></li>
                                <li value={1} onClick={this.handleTabs}><a className={this.state.tab==1?"on_button":null}>완료</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <div  className={classNames("selectBox select_box08", { 'open': this.state.option })}>
                            <div className="select_btn" onClick={this.handleClickAll}>
                                <p><span >{this.state.filter=="all" || this.state.option==true?"등급 전체보기":this.state.filter}</span></p>
                            </div>
                            <div className="option_list">
                                <ul>
                                    <li><a onClick={this.handleFilter}>G1</a></li>
                                    <li><a onClick={this.handleFilter}>G2</a></li>
                                    <li><a onClick={this.handleFilter}>G3</a></li>
                                    <li><a onClick={this.handleFilter}>G4</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <RequestList tab={this.state.tab} filter={this.state.filter}/>
            </div>
        );
    }
}

export default Tab1;