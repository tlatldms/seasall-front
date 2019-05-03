import React, { Component } from 'react';
import classNames from 'classnames/bind';
import RequestList from './RequestList';

class Tab1 extends Component {
    state = {
        option: false,
        tab:"전체"
    }

    handleTabs=(e)=> {
        this.setState({
            tab: e.target.text, 
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
                                <li onClick={this.handleTabs}><a className={Number(this.state.tab)==="전체"?"on_button":null}>전체</a></li>
                                <li onClick={this.handleTabs}><a className={Number(this.state.tab)==="대기중"?"on_button":null}>대기중</a></li>
                                <li onClick={this.handleTabs}><a className={Number(this.state.tab)==="완료"?"on_button":null}>완료</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <div onClick={() => this.setState({ option: !this.state.option })} className={classNames("selectBox select_box08", { 'open': this.state.option })}>
                            <div className="select_btn">
                                <p><span>등급선택</span></p>
                            </div>
                            <div className="option_list">
                                <ul>
                                    <li><a >G1</a></li>
                                    <li><a >G2</a></li>
                                    <li><a >G3</a></li>
                                    <li><a >G4</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <RequestList />
            </div>
        );
    }
}

export default Tab1;