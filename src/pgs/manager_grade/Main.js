import React, { Component } from 'react';
import Navi from 'common/Navi';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

class Main extends Component {
	state={
		tab:"권한요청"
	}
	handleClick=(e)=> {
		this.setState({
			tab: e.target.text,
		})
	}
    render() {
        return (
            <article id="contentsWrap" className="grade01">
			<div className="innerwrap">
				<form action="#" acceptCharset="utf-8" name="grade01" method="get">
                <Navi />
				<div className="contents_area">
					<div className="tab02">
			            <ul>
			                {/*  tab02 탭 선택시 들어 가는 클래스 - on_tab */}
			                <li onClick={this.handleClick}><a className={this.state.tab=="권한요청"?"on_tab":null}>권한요청</a></li>
			                <li onClick={this.handleClick}><a className={this.state.tab=="권한편집"?"on_tab":null}>권한편집</a></li>
			            </ul>
			        </div>
			        <div className="tab02_cont">
			        	<div className="gtab02">
						{this.state.tab=="권한요청"? <Tab1 /> : <Tab2 />}

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