import React, { Component } from 'react';
import Navi from 'common/Navi';

class Main extends Component {
    render() {
        return (
            <article id="contentsWrap" class="grade01">
			<div class="innerwrap">
				<form action="#" accept-charset="utf-8" name="grade01" method="get">
                <Navi />
				<div class="contents_area">
					<div class="tab02">
			            <ul>
			                {/*  tab02 탭 선택시 들어 가는 클래스 - on_tab */}
			                <li><a href="#">권한요청</a></li>
			                <li><a href="#" class="on_tab">권한편집</a></li>
			            </ul>
			        </div>
			        <div class="tab02_cont">
			        	<div class="gtab02">
							<div class="panel02">
								<div class="panel_header">
									<div class="left">
										등급명, 등급권한 수정
									</div>
									<div class="right">
										<div class="box_btn">
											<button class="btn_medium w100">저장</button>
										</div>
									</div>
								</div>
								<div class="panel_contents">
									<ul class="list02">
										<li>
											<div class="grade_name"><p>G1</p></div>
											<div class="grade_option">
												<div class="check_box03">
										            <input type="checkbox" id="g1_1" name="g1_1" checked />
										            <label for="g1_1"><span></span></label>
										            <span>라벨스캔</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_2" name="g1_2" checked />
										            <label for="g1_2"><span></span></label>
										            <span>라벨스캔</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_3" name="g1_3" />
										            <label for="g1_3"><span></span></label>
										            <span>라벨스캔</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_4" name="g1_4" checked />
										            <label for="g1_4"><span></span></label>
										            <span>제품신고</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_5" name="g1_5" />
										            <label for="g1_5"><span></span></label>
										            <span>P/N관리</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_6" name="g1_6" />
										            <label for="g1_6"><span></span></label>
										            <span>등급관리</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_7" name="g1_7" />
										            <label for="g1_7"><span></span></label>
										            <span>신고제품처리</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_8" name="g1_8" checked />
										            <label for="g1_8"><span></span></label>
										            <span>신고제품처리</span>
										        </div>
										        <div class="btn_permission">
										            <a href="#">
										            	<span class="icon"></span>
										            	<span>권한추가</span>
										            </a>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_9" name="g1_9" checked />
										            <label for="g1_9"><span></span></label>
										            <span>P/N관리</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_10" name="g1_10" />
										            <label for="g1_10"><span></span></label>
										            <span>렉관리</span>
										        </div>

											</div>
											<div class="box_btn">
												<button type="button" class="btn_grade"></button>
											</div>
										</li>
										<li>
											<div class="grade_name"><p>G2</p></div>
											<div class="grade_option">
												<div class="check_box03">
										            <input type="checkbox" id="g1_1" name="g1_1" checked />
										            <label for="g1_1"><span></span></label>
										            <span>라벨스캔</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_2" name="g1_2" checked />
										            <label for="g1_2"><span></span></label>
										            <span>라벨스캔</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_3" name="g1_3" />
										            <label for="g1_3"><span></span></label>
										            <span>라벨스캔</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_4" name="g1_4" checked />
										            <label for="g1_4"><span></span></label>
										            <span>제품신고</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_5" name="g1_5" />
										            <label for="g1_5"><span></span></label>
										            <span>P/N관리</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_6" name="g1_6" />
										            <label for="g1_6"><span></span></label>
										            <span>등급관리</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_7" name="g1_7" />
										            <label for="g1_7"><span></span></label>
										            <span>신고제품처리</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_8" name="g1_8" checked />
										            <label for="g1_8"><span></span></label>
										            <span>신고제품처리</span>
										        </div>
										        <div class="btn_permission">
										            <a href="#">
										            	<span class="icon"></span>
										            	<span>권한추가</span>
										            </a>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_9" name="g1_9" checked />
										            <label for="g1_9"><span></span></label>
										            <span>P/N관리</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_10" name="g1_10" />
										            <label for="g1_10"><span></span></label>
										            <span>렉관리</span>
										        </div>

											</div>
											<div class="box_btn">
												<button type="button" class="btn_grade"></button>
											</div>
										</li>
										<li>
											<div class="grade_name"><p>G3</p></div>
											<div class="grade_option">
												<div class="check_box03">
										            <input type="checkbox" id="g1_1" name="g1_1" checked />
										            <label for="g1_1"><span></span></label>
										            <span>라벨스캔</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_2" name="g1_2" checked />
										            <label for="g1_2"><span></span></label>
										            <span>라벨스캔</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_3" name="g1_3" />
										            <label for="g1_3"><span></span></label>
										            <span>라벨스캔</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_4" name="g1_4" checked />
										            <label for="g1_4"><span></span></label>
										            <span>제품신고</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_5" name="g1_5" />
										            <label for="g1_5"><span></span></label>
										            <span>P/N관리</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_6" name="g1_6" />
										            <label for="g1_6"><span></span></label>
										            <span>등급관리</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_7" name="g1_7" />
										            <label for="g1_7"><span></span></label>
										            <span>신고제품처리</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_8" name="g1_8" checked />
										            <label for="g1_8"><span></span></label>
										            <span>신고제품처리</span>
										        </div>
										        <div class="btn_permission">
										            <a href="#">
										            	<span class="icon"></span>
										            	<span>권한추가</span>
										            </a>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_9" name="g1_9" checked />
										            <label for="g1_9"><span></span></label>
										            <span>P/N관리</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_10" name="g1_10" />
										            <label for="g1_10"><span></span></label>
										            <span>렉관리</span>
										        </div>

											</div>
											<div class="box_btn">
												<button type="button" class="btn_grade"></button>
											</div>
										</li>
										<li>
											<div class="grade_name"><p>G4</p></div>
											<div class="grade_option">
												<div class="check_box03">
										            <input type="checkbox" id="g1_1" name="g1_1" checked />
										            <label for="g1_1"><span></span></label>
										            <span>라벨스캔</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_2" name="g1_2" checked />
										            <label for="g1_2"><span></span></label>
										            <span>라벨스캔</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_3" name="g1_3" />
										            <label for="g1_3"><span></span></label>
										            <span>라벨스캔</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_4" name="g1_4" checked />
										            <label for="g1_4"><span></span></label>
										            <span>제품신고</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_5" name="g1_5" />
										            <label for="g1_5"><span></span></label>
										            <span>P/N관리</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_6" name="g1_6" />
										            <label for="g1_6"><span></span></label>
										            <span>등급관리</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_7" name="g1_7 " />
										            <label for="g1_7"><span></span></label>
										            <span>신고제품처리</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_8" name="g1_8" checked />
										            <label for="g1_8"><span></span></label>
										            <span>신고제품처리</span>
										        </div>
										        <div class="btn_permission">
										            <a href="#">
										            	<span class="icon"></span>
										            	<span>권한추가</span>
										            </a>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_9" name="g1_9" checked />
										            <label for="g1_9"><span></span></label>
										            <span>P/N관리</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_10" name="g1_10" />
										            <label for="g1_10"><span></span></label>
										            <span>렉관리</span>
										        </div>

											</div>
											<div class="box_btn">
												<button type="button" class="btn_grade"></button>
											</div>
										</li>
										<li>
											<div class="grade_name"><p>G5</p></div>
											<div class="grade_option">
												<div class="check_box03">
										            <input type="checkbox" id="g1_1" name="g1_1" checked />
										            <label for="g1_1"><span></span></label>
										            <span>라벨스캔</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_2" name="g1_2" checked />
										            <label for="g1_2"><span></span></label>
										            <span>라벨스캔</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_3" name="g1_3" />
										            <label for="g1_3"><span></span></label>
										            <span>라벨스캔</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_4" name="g1_4" checked />
										            <label for="g1_4"><span></span></label>
										            <span>제품신고</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_5" name="g1_5" />
										            <label for="g1_5"><span></span></label>
										            <span>P/N관리</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_6" name="g1_6" />
										            <label for="g1_6"><span></span></label>
										            <span>등급관리</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_7" name="g1_7" />
										            <label for="g1_7"><span></span></label>
										            <span>신고제품처리</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_8" name="g1_8" checked />
										            <label for="g1_8"><span></span></label>
										            <span>신고제품처리</span>
										        </div>
										        <div class="btn_permission">
										            <a href="#">
										            	<span class="icon"></span>
										            	<span>권한추가</span>
										            </a>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_9" name="g1_9" checked />
										            <label for="g1_9"><span></span></label>
										            <span>P/N관리</span>
										        </div>
										        <div class="check_box03">
										            <input type="checkbox" id="g1_10" name="g1_10" />
										            <label for="g1_10"><span></span></label>
										            <span>렉관리</span>
										        </div>

											</div>
											<div class="box_btn">
												<button type="button" class="btn_grade"></button>
											</div>
										</li>
									</ul>
									<div class="box_grade_add">
										<div class="box_grade_input">
											<div class="ip_box03"><input id="newGrade" name="new_grade" type="text" placeholder=" 새로운 등급의 이름을 입력하세요." /></div>
											<div class="box_btn">
												<button class="btn_medium_w w80">취소</button>
												<button class="btn_medium w80">확인</button>
											</div>
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