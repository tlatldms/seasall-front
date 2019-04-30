import React, {Component} from 'react';
import * as service from 'AxiosGetApi';
import List from './List';
import Navi from 'common/Navi';

class Main extends Component {
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
                        {/* 답변하기 보이는 클래스 open */}
                        <div class="tr">
                          <div class="group_fixed">
                            <div class="td">
                              <p class="report_sts complete">
                                <span class="icon"></span>
                                <span class="txt">완료</span>
                              </p>
                            </div>
                            <div class="td"><p>1234-1234</p></div>
                            <div class="td"><p>2018.12.12</p></div>
                            <div class="td"><p>모조품</p></div>
                            <div class="td"><p class="serial_code">AB12D-DG23H-EKDIG<br />CONTACT ASSY-CLOCK</p></div>
                          </div>
                          <div class="box_answer answer_before">
                            <div class="answer_top">
                              <div class="ip_box02">
                                <input id="reportTitle" name="report_title" type="text" placeholder="제목" />
                              </div>
                              <div class="select_box03">
                                <select class="select03">
                                  <option selected>유형선택</option>
                                  <option>유형01</option>
                                  <option>유형02</option>
                                  <option>유형03</option>
                                </select>
                              </div>
                            </div>
                            <div class="answer_bottom">
                              <textarea placeholder="내용"></textarea>
                              <div class="box_cffile">
                                <dl>
                                  <dt>첨부파일</dt>
                                  <dd>
                                    <div class="drop_box">
                                              <a href="#" class="btn_file">이미지를 여기로 끌어다 놓거나, 여기를 눌러 파일을 선택하세요.</a>
                                              <input type="file" id="fileadd" name="fileadd" required />
                                              <label for="fileadd">파일 첨부</label>
                                    </div>
                                  </dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                          <div class="group_variable">
                            <p>2018.12.31 PM 3:00</p>
                          </div>
                        </div>
                        <div class="tr">
                          <div class="group_fixed">
                            <div class="td">
                              <p class="report_sts complete">
                                <span class="icon"></span>
                                <span class="txt">완료</span>
                              </p>
                            </div>
                            <div class="td"><p>1234-1234</p></div>
                            <div class="td"><p>2018.12.12</p></div>
                            <div class="td"><p>모조품</p></div>
                            <div class="td"><p class="serial_code">AB12D-DG23H-EKDIG<br />CONTACT ASSY-CLOCK</p></div>
                          </div>
                          <div class="box_answer answer_before">
                            <div class="answer_top">
                              <div class="ip_box02">
                                <input id="reportTitle" name="report_title" type="text" placeholder="제목" />
                              </div>
                              <div class="select_box03">
                                <select class="select03">
                                  <option selected>유형선택</option>
                                  <option>유형01</option>
                                  <option>유형02</option>
                                  <option>유형03</option>
                                </select>
                              </div>
                            </div>
                            <div class="answer_bottom">
                              <textarea placeholder="내용"></textarea>
                              <div class="box_cffile">
                                <dl>
                                  <dt>첨부파일</dt>
                                  <dd>
                                    <div class="drop_box">
                                              <a href="#" class="btn_file">이미지를 여기로 끌어다 놓거나, 여기를 눌러 파일을 선택하세요.</a>
                                              <input type="file" id="fileadd" name="fileadd" required />
                                              <label for="fileadd">파일 첨부</label>
                                    </div>
                                  </dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                          <div class="group_variable">
                            <p>2018.12.31 PM 3:00</p>
                          </div>
                        </div>
                        <div class="tr open">
                          <div class="group_fixed">
                            <div class="td">
                              <p class="report_sts waiting">
                                <span class="icon"></span>
                                <span class="txt">대기중</span>
                              </p>
                            </div>
                            <div class="td"><p>1234-1234</p></div>
                            <div class="td"><p>2018.12.12</p></div>
                            <div class="td"><p>모조품</p></div>
                            <div class="td"><p class="serial_code">AB12D-DG23H-EKDIG<br />CONTACT ASSY-CLOCK</p></div>
                          </div>
                          <div class="box_answer answer_after">
                            <div class="answer_top">
                              <div class="title">작업오류로 인한 신고 답변드립니다.작업오류로 인한 신고 답변드립니다.</div>
                              <div class="title_info">
                                <dl>
                                  <dt>담당자 : </dt>
                                  <dd>이지영</dd>
                                </dl>
                                <dl>
                                  <dt>유형 : </dt>
                                  <dd>작업오류</dd>
                                </dl>
                              </div>
                            </div>
                            <div class="answer_bottom">
                              <div class="answer_con">
                                <p>최근 현대오토넷을 사칭하여 내비게이션 멀티미디어관련 상품을 판매하는 사례가접수되고 있습니다. 고객센터1588-7278로 확인하시기 바랍니다. 최근 현대오토넷을 사칭하여 내비게이션 멀티미디어관련 상품을 판매하는 사례가 접수되고 있습니다. 고객센터1588-7278로 확인하시기 바랍니다.</p>
                                <p>최근 현대오토넷을 사칭하여 내비게이션 멀티미디어관련 상품을 판매하는 사례가접수되고 있습니다. 고객센터1588-7278로 확인하시기 바랍니다. 최근 현대오토넷을 사칭하여 내비게이션 멀티미디어관련 상품을 판매하는 사례가 접수되고 있습니다. 고객센터1588-7278로 확인하시기 바랍니다.</p>
                              </div>
                              <div class="cf_file">
                                <dl>
                                  <dt>첨부파일</dt>
                                  <dd>
                                    <a href="#">20181212 모조품신고.jpg</a>
                                  </dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                          <div class="group_variable">
                            <button class="btn_small w70">답변하기</button>
                          </div>
                        </div>
                        <div class="tr">
                          <div class="group_fixed">
                            <div class="td">
                              <p class="report_sts waiting">
                                <span class="icon"></span>
                                <span class="txt">대기중</span>
                              </p>
                            </div>
                            <div class="td"><p>1234-1234</p></div>
                            <div class="td"><p>2018.12.12</p></div>
                            <div class="td"><p>모조품</p></div>
                            <div class="td"><p class="serial_code">AB12D-DG23H-EKDIG<br />CONTACT ASSY-CLOCK</p></div>
                          </div>
                          <div class="box_answer answer_before">
                            <div class="answer_top">
                              <div class="ip_box02">
                                <input id="reportTitle" name="report_title" type="text" placeholder="제목" />
                              </div>
                              <div class="select_box03">
                                <select class="select03">
                                  <option selected>유형선택</option>
                                  <option>유형01</option>
                                  <option>유형02</option>
                                  <option>유형03</option>
                                </select>
                              </div>
                            </div>
                            <div class="answer_bottom">
                              <textarea placeholder="내용"></textarea>
                              <div class="box_cffile">
                                <dl>
                                  <dt>첨부파일</dt>
                                  <dd>
                                    <div class="drop_box">
                                              <a href="#" class="btn_file">이미지를 여기로 끌어다 놓거나, 여기를 눌러 파일을 선택하세요.</a>
                                              <input type="file" id="fileadd" name="fileadd" required />
                                              <label for="fileadd">파일 첨부</label>
                                    </div>
                                  </dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                          <div class="group_variable">
                            <button class="btn_small w70">답변하기</button>
                          </div>
                        </div>
                        <div class="tr">
                          <div class="group_fixed">
                            <div class="td">
                              <p class="report_sts waiting">
                                <span class="icon"></span>
                                <span class="txt">대기중</span>
                              </p>
                            </div>
                            <div class="td"><p>1234-1234</p></div>
                            <div class="td"><p>2018.12.12</p></div>
                            <div class="td"><p>모조품</p></div>
                            <div class="td"><p class="serial_code">AB12D-DG23H-EKDIG<br/>CONTACT ASSY-CLOCK</p></div>
                          </div>
                          <div class="box_answer answer_before">
                            <div class="answer_top">
                              <div class="ip_box02">
                                <input id="reportTitle" name="report_title" type="text" placeholder="제목"/>
                              </div>
                              <div class="select_box03">
                                <select class="select03">
                                  <option selected>유형선택</option>
                                  <option>유형01</option>
                                  <option>유형02</option>
                                  <option>유형03</option>
                                </select>
                              </div>
                            </div>
                            <div class="answer_bottom">
                              <textarea placeholder="내용"></textarea>
                              <div class="box_cffile">
                                <dl>
                                  <dt>첨부파일</dt>
                                  <dd>
                                    <div class="drop_box">
                                              <a href="#" class="btn_file">이미지를 여기로 끌어다 놓거나, 여기를 눌러 파일을 선택하세요.</a>
                                              <input type="file" id="fileadd" name="fileadd" required/>
                                              <label for="fileadd">파일 첨부</label>
                                    </div>
                                  </dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                          <div class="group_variable">
                            <button class="btn_small w70">답변하기</button>
                          </div>
                        </div>
                        <div class="tr">
                          <div class="group_fixed">
                            <div class="td">
                              <p class="report_sts waiting">
                                <span class="icon"></span>
                                <span class="txt">대기중</span>
                              </p>
                            </div>
                            <div class="td"><p>1234-1234</p></div>
                            <div class="td"><p>2018.12.12</p></div>
                            <div class="td"><p>모조품</p></div>
                            <div class="td"><p class="serial_code">AB12D-DG23H-EKDIG<br/>CONTACT ASSY-CLOCK</p></div>
                          </div>
                          <div class="box_answer answer_before">
                            <div class="answer_top">
                              <div class="ip_box02">
                                <input id="reportTitle" name="report_title" type="text" placeholder="제목" />
                              </div>
                              <div class="select_box03">
                                <select class="select03">
                                  <option selected>유형선택</option>
                                  <option>유형01</option>
                                  <option>유형02</option>
                                  <option>유형03</option>
                                </select>
                              </div>
                            </div>
                            <div class="answer_bottom">
                              <textarea placeholder="내용"></textarea>
                              <div class="box_cffile">
                                <dl>
                                  <dt>첨부파일</dt>
                                  <dd>
                                    <div class="drop_box">
                                              <a href="#" class="btn_file">이미지를 여기로 끌어다 놓거나, 여기를 눌러 파일을 선택하세요.</a>
                                              <input type="file" id="fileadd" name="fileadd" required />
                                              <label for="fileadd">파일 첨부</label>
                                    </div>
                                  </dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                          <div class="group_variable">
                            <button class="btn_small w70">답변하기</button>
                          </div>
                        </div>
                        <div class="tr">
                          <div class="group_fixed">
                            <div class="td">
                              <p class="report_sts waiting">
                                <span class="icon"></span>
                                <span class="txt">대기중</span>
                              </p>
                            </div>
                            <div class="td"><p>1234-1234</p></div>
                            <div class="td"><p>2018.12.12</p></div>
                            <div class="td"><p>모조품</p></div>
                            <div class="td"><p class="serial_code">AB12D-DG23H-EKDIG<br/>CONTACT ASSY-CLOCK</p></div>
                          </div>
                          <div class="box_answer answer_before">
                            <div class="answer_top">
                              <div class="ip_box02">
                                <input id="reportTitle" name="report_title" type="text" placeholder="제목" />
                              </div>
                              <div class="select_box03">
                                <select class="select03">
                                  <option selected>유형선택</option>
                                  <option>유형01</option>
                                  <option>유형02</option>
                                  <option>유형03</option>
                                </select>
                              </div>
                            </div>
                            <div class="answer_bottom">
                              <textarea placeholder="내용"></textarea>
                              <div class="box_cffile">
                                <dl>
                                  <dt>첨부파일</dt>
                                  <dd>
                                    <div class="drop_box">
                                              <a href="#" class="btn_file">이미지를 여기로 끌어다 놓거나, 여기를 눌러 파일을 선택하세요.</a>
                                              <input type="file" id="fileadd" name="fileadd" required />
                                              <label for="fileadd">파일 첨부</label>
                                    </div>
                                  </dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                          <div class="group_variable">
                            <button class="btn_small w70">답변하기</button>
                          </div>
                        </div>
                        <div class="tr">
                          <div class="group_fixed">
                            <div class="td">
                              <p class="report_sts waiting">
                                <span class="icon"></span>
                                <span class="txt">대기중</span>
                              </p>
                            </div>
                            <div class="td"><p>1234-1234</p></div>
                            <div class="td"><p>2018.12.12</p></div>
                            <div class="td"><p>모조품</p></div>
                            <div class="td"><p class="serial_code">AB12D-DG23H-EKDIG<br />CONTACT ASSY-CLOCK</p></div>
                          </div>
                          <div class="box_answer answer_before">
                            <div class="answer_top">
                              <div class="ip_box02">
                                <input id="reportTitle" name="report_title" type="text" placeholder="제목" />
                              </div>
                              <div class="select_box03">
                                <select class="select03">
                                  <option selected>유형선택</option>
                                  <option>유형01</option>
                                  <option>유형02</option>
                                  <option>유형03</option>
                                </select>
                              </div>
                            </div>
                            <div class="answer_bottom">
                              <textarea placeholder="내용"></textarea>
                              <div class="box_cffile">
                                <dl>
                                  <dt>첨부파일</dt>
                                  <dd>
                                    <div class="drop_box">
                                              <a href="#" class="btn_file">이미지를 여기로 끌어다 놓거나, 여기를 눌러 파일을 선택하세요.</a>
                                              <input type="file" id="fileadd" name="fileadd" required />
                                              <label for="fileadd">파일 첨부</label>
                                    </div>
                                  </dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                          <div class="group_variable">
                            <button class="btn_small w70">답변하기</button>
                          </div>
                        </div>
                        <div class="tr">
                          <div class="group_fixed">
                            <div class="td">
                              <p class="report_sts waiting">
                                <span class="icon"></span>
                                <span class="txt">대기중</span>
                              </p>
                            </div>
                            <div class="td"><p>1234-1234</p></div>
                            <div class="td"><p>2018.12.12</p></div>
                            <div class="td"><p>모조품</p></div>
                            <div class="td"><p class="serial_code">AB12D-DG23H-EKDIG<br/>CONTACT ASSY-CLOCK</p></div>
                          </div>
                          <div class="box_answer answer_before">
                            <div class="answer_top">
                              <div class="ip_box02">
                                <input id="reportTitle" name="report_title" type="text" placeholder="제목"/>
                              </div>
                              <div class="select_box03">
                                <select class="select03">
                                  <option selected>유형선택</option>
                                  <option>유형01</option>
                                  <option>유형02</option>
                                  <option>유형03</option>
                                </select>
                              </div>
                            </div>
                            <div class="answer_bottom">
                              <textarea placeholder="내용"></textarea>
                              <div class="box_cffile">
                                <dl>
                                  <dt>첨부파일</dt>
                                  <dd>
                                    <div class="drop_box">
                                              <a href="#" class="btn_file">이미지를 여기로 끌어다 놓거나, 여기를 눌러 파일을 선택하세요.</a>
                                              <input type="file" id="fileadd" name="fileadd" required/>
                                              <label for="fileadd">파일 첨부</label>
                                    </div>
                                  </dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                          <div class="group_variable">
                            <button class="btn_small w70">답변하기</button>
                          </div>
                        </div>
                        <div class="tr">
                          <div class="group_fixed">
                            <div class="td">
                              <p class="report_sts waiting">
                                <span class="icon"></span>
                                <span class="txt">대기중</span>
                              </p>
                            </div>
                            <div class="td"><p>1234-1234</p></div>
                            <div class="td"><p>2018.12.12</p></div>
                            <div class="td"><p>모조품</p></div>
                            <div class="td"><p class="serial_code">AB12D-DG23H-EKDIG<br/>CONTACT ASSY-CLOCK</p></div>
                          </div>
                          <div class="box_answer answer_before">
                            <div class="answer_top">
                              <div class="ip_box02">
                                <input id="reportTitle" name="report_title" type="text" placeholder="제목"/>
                              </div>
                              <div class="select_box03">
                                <select class="select03">
                                  <option selected>유형선택</option>
                                  <option>유형01</option>
                                  <option>유형02</option>
                                  <option>유형03</option>
                                </select>
                              </div>
                            </div>
                            <div class="answer_bottom">
                              <textarea placeholder="내용"></textarea>
                              <div class="box_cffile">
                                <dl>
                                  <dt>첨부파일</dt>
                                  <dd>
                                    <div class="drop_box">
                                              <a href="#" class="btn_file">이미지를 여기로 끌어다 놓거나, 여기를 눌러 파일을 선택하세요.</a>
                                              <input type="file" id="fileadd" name="fileadd" required/>
                                              <label for="fileadd">파일 첨부</label>
                                    </div>
                                  </dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                          <div class="group_variable">
                            <button class="btn_small w70">답변하기</button>
                          </div>
                        </div>
                      </div>
                      <div class="pagination">
                              <div class="prev">
                                {/*  pagination 버튼 비활 성화 클래스 - disable */}
                                  <a href="#" class="prev02 disable"></a>
                                  <a href="#" class="prev01 disable"></a>
                              </div>
                              {/* pagination 선택 클래스 - on_pager */}
                              <a href="#" class="on_pager">1</a>
                              <a href="#">2</a>
                              <a href="#">3</a>
                              <a href="#">4</a>
                              <a href="#">5</a>
                              <div class="next">
                                  <a href="#" class="next01"></a>
                                  <a href="#" class="next02"></a>
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
};

export default Main;