import React, { Component } from 'react';
import Navi from 'common/Navi';
import thumbnailBuy from 'asset/images/thumbnail_buy.png';

class Main extends Component {
    render() {
        return (
            <article id="contentsWrap" className="buy01">
			<div className="innerwrap">
				<form action="#" acceptCharset="utf-8" name="buy01" method="get">
				<Navi />
				<div className="contents_area">
					<div className="tab02">
			            <ul>
			                {/*  tab02 탭 선택시 들어 가는 클래스 - on_tab */}
			                <li><a href="#" className="on_tab">라벨용지</a></li>
			                <li><a href="#">먹지</a></li>
			                <li><a href="#">라벨프린터</a></li>
			                <li><a href="#">머신비전</a></li>
			            </ul>
			        </div>
			        <div className="tab021_cont">
			        	{/* 패널 열리는 클래스 - open */}
						<div className="panel_arcodian option_select open">
							<div className="panel_header">
								<div className="left">
									<h3>옵션선택</h3>
								</div>
								<div className="right">
									<button type="button" className="btn_down"></button>
								</div>
							</div>
							<div className="panel_contents">
								<div className="panel02">
									<div className="panel_contents">
										<ul className="list03">
											<li>
												<div className="check_box02">
										            <input type="checkbox" id="o1" name="o1" />
										            <label for="o1"><span></span></label>
										        </div>
										        <div className="box_img">
										        	<img src={thumbnailBuy} alt="" />
										        </div>
										        <div className="box_info">
										        	<div className="info">
										        		<p className="tit">현대씨즈올 기본라벨</p>
										        		<p className="sub_tit">현대씨즈올 기본라벨에 대한 설명이 들어갑니다</p>
										        	</div>
										        	<div className="box_spinner02">
												   		<div className="spinner spinner02">
												   			<input id="spinner02" type="text" name="quantity" value="1"/>
															<div className="group_btn">
																<button className="btn_sp_plus" type="button"></button>
																<button className="btn_sp_minus" type="button"></button>
															</div>
														</div>
												   	</div>
												   	<div className="quantity"><span className="quantity_num">100,000</span>/개</div>
										        </div>
										       	<div className="box_btn">
										       		<button className="btn_small_w w94">장바구니</button>
													<button className="btn_small w94">바로구매</button>
										       	</div>
											</li>
											<li>
												<div className="check_box02">
										            <input type="checkbox" id="o2" name="o2" />
										            <label for="o2"><span></span></label>
										        </div>
										        <div className="box_img">
										        	<img src={thumbnailBuy} alt="" />
										        </div>
										        <div className="box_info">
										        	<div className="info">
										        		<p className="tit">현대씨즈올 기본라벨</p>
										        		<p className="sub_tit">현대씨즈올 기본라벨에 대한 설명이 들어갑니다</p>
										        	</div>
										        	<div className="box_spinner02">
												   		<div className="spinner spinner02">
												   			<input id="spinner02" type="text" name="quantity" value="1" />
															<div className="group_btn">
																<button className="btn_sp_plus" type="button"></button>
																<button className="btn_sp_minus" type="button"></button>
															</div>
														</div>
												   	</div>
												   	<div className="quantity"><span className="quantity_num">100,000</span>/개</div>
										        </div>
										       	<div className="box_btn">
										       		<button className="btn_small_w w94">장바구니</button>
													<button className="btn_small w94">바로구매</button>
										       	</div>
											</li>
											<li>
												<div className="check_box02">
										            <input type="checkbox" id="o3" name="o3"/>
										            <label for="o3"><span></span></label>
										        </div>
										        <div className="box_img">
										        	<img src={thumbnailBuy} alt=""/>
										        </div>
										        <div className="box_info">
										        	<div className="info">
										        		<p className="tit">현대씨즈올 기본라벨</p>
										        		<p className="sub_tit">현대씨즈올 기본라벨에 대한 설명이 들어갑니다</p>
										        	</div>
										        	<div className="box_spinner02">
												   		<div className="spinner spinner02">
												   			<input id="spinner02" type="text" name="quantity" value="1" />
															<div className="group_btn">
																<button className="btn_sp_plus" type="button"></button>
																<button className="btn_sp_minus" type="button"></button>
															</div>
														</div>
												   	</div>
												   	<div className="quantity"><span className="quantity_num">100,000</span>/개</div>
										        </div>
										       	<div className="box_btn">
										       		<button className="btn_small_w w94">장바구니</button>
													<button className="btn_small w94">바로구매</button>
										       	</div>
											</li>
											<li>
												<div className="check_box02">
										            <input type="checkbox" id="o4" name="o4"/>
										            <label for="o4"><span></span></label>
										        </div>
										        <div className="box_img">
										        	<img src={thumbnailBuy} alt=""/>
										        </div>
										        <div className="box_info">
										        	<div className="info">
										        		<p className="tit">현대씨즈올 기본라벨</p>
										        		<p className="sub_tit">현대씨즈올 기본라벨에 대한 설명이 들어갑니다</p>
										        	</div>
										        	<div className="box_spinner02">
												   		<div className="spinner spinner02">
												   			<input id="spinner02" type="text" name="quantity" value="1" />
															<div className="group_btn">
																<button className="btn_sp_plus" type="button"></button>
																<button className="btn_sp_minus" type="button"></button>
															</div>
														</div>
												   	</div>
												   	<div className="quantity"><span className="quantity_num">100,000</span>/개</div>
										        </div>
										       	<div className="box_btn">
										       		<button className="btn_small_w w94">장바구니</button>
													<button className="btn_small w94">바로구매</button>
										       	</div>
											</li>
										</ul>
										<div className="box_btn">
											<button className="btn_big_w w200">장바구니 추가</button>
											<button className="btn_big w200">바로결제</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="panel_arcodian shopping_basket">
							<div className="panel_header">
								<div className="left">
									<h3>장바구니(<span className="shopping_basket_num">0</span>)</h3>
								</div>
								<div className="right">
									<button type="button" className="btn_down"></button>
								</div>
							</div>
							<div className="panel_contents">
								<div className="panel02">
									<div className="panel_header">
										<div className="left">
											<div className="check_box02">
									            <input type="checkbox" id="o0" name="o0" className="allChk" />
									            <label for="o0"><span></span></label>
									            <span>전체선택</span>
									        </div>
										</div>
										<div className="right">
											<button className="btn_small w80 disable">전체삭제</button>
										</div>
									</div>
									<div className="panel_contents">
										<ul className="list03">
											<li className="none">
												<p>장바구니에 담은 제품이 없습니다.</p>
											</li>
										</ul>
										<div className="box_total">
											<div className="left">
												<span>전체합계</span>
											</div>
											<div className="right">
												<p><span>400,000</span>원</p>
											</div>
										</div>
										<div className="box_total_payment">
											<p className="tit">총 결제 금액</p>
											<div className="box_formula">
												<dl className="d1">
													<dt>총 상품가격</dt>
													<dd><span className="total_product_price">0</span>원</dd>
												</dl>
												<span className="icon icon_plus"></span>
												<dl className="d2">
													<dt>배송비</dt>
													<dd><span className="delivery_fee">0</span>원</dd>
												</dl>
												<span className=" icon icon_equal"></span>
												<p><span className="total_price">0</span>원</p>
											</div>
										</div>
										<div className="box_btn">
											<button className="btn_big_w w200">계속 구매하기</button>
											<button className="btn_big w200">바로결제</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="panel_arcodian buy_delivery_info">
							<div className="panel_header">
								<div className="left">
									<h3>구매/배송정보</h3>
									<b>최초 배송지 주소가 기본주소로 설정됩니다.</b>
								</div>
								<div className="right">
									<button type="button" className="btn_down"></button>
								</div>
							</div>
							<div className="panel_contents">
								<div className="panel02">
									<div className="panel_header">
										구매자 정보
										<span></span>
									</div>
									<div className="panel_contents">
										<div className="table04">
											<div className="tr col04">
												<div className="th required"><p>업체명</p></div>
												<div className="td">
													<div className="ip_box04 w127">
														<input id="buyerCompany" name="buyer_company" type="text"/>
													</div>
												</div>
												<div className="th required"><p>주문자</p></div>
												<div className="td">
													<div className="ip_box04 w127">
														<input id="buyerName" name="buyer_name" type="text"/>
													</div>
												</div>
											</div>
											<div className="tr">
												<div className="th required"><p>배송지</p></div>
												<div className="td">
													<div className="post_box01">
														<div className="ib_box">
															<div className="ip_box04 w127"><input id="post01" name="post01" type="text"/></div>
															<button className="btn_medium w100">우편번호 찾기</button>
														</div>
														<div className="check_box">
												            <input type="checkbox" id="a1" name="default_location"/>
												            <label for="a1"><span><em className="bld">기본 배송지 설정</em></span></label>
												            <span>기본 배송지 설정</span> 
												        </div>
													</div>
													<div className="post_box02">
														<div className="ip_box04 w310"><input id="post02" name="post02" type="text"/></div>
														<div className="ip_box04 w240"><input id="post03" name="post03" type="text"/></div>
													</div>
													<div className="post_box03">
														<p>도로명 주소</p>
													</div>
												</div>
											</div>
											<div className="tr">
												<div className="th required"><p>연락처</p></div>
												<div className="td">
													<div className="phone_box">
														<div className="ip_box04 w70"><input id="phone_num01" name="phone_num01" type="text"/></div>
														<span></span>
														<div className="ip_box04 w70"><input id="phone_num02" name="phone_num02" type="text"/></div>
														<span></span>
														<div className="ip_box04 w70"><input id="phone_num03" name="phone_num03" type="text"/></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="panel02 bt_none">
									<div className="panel_header">
										결제 정보
										<span></span>
									</div>
									<div className="panel_contents">
										<div className="box_formula">
											<dl className="d1">
												<dt>총 상품가격</dt>
												<dd><span className="total_product_price">400,000</span>원</dd>
											</dl>
											<span className="icon icon_plus"></span>
											<dl className="d2">
												<dt>배송비</dt>
												<dd><span className="delivery_fee">5,000</span>원</dd>
											</dl>
											<span className=" icon icon_equal"></span>
											<p><span className="total_price">405,000</span>원</p>
										</div>
									</div>
								</div>
								<div className="panel02">
									<div className="panel_header">
										결제 방법
										<span></span>
									</div>
									<div className="panel_contents">
										<div className="table04">
											<div className="tr">
												<div className="td colspan02">
													<div className="radio_box">
											            <input type="radio" id="creditCard" name="payment" />
											            <label for="creditCard"><span></span></label>
											            <span>신용카드</span>
											        </div>
											        <div className="radio_box">
											            <input type="radio" id="bankBook" name="payment"/>
											            <label for="bankBook"><span></span></label>
											            <span>무통장입금</span>
											        </div>
											        <div className="radio_box">
											            <input type="radio" id="bankTransfer" name="payment"/>
											            <label for="bankTransfer"><span></span></label>
											            <span>실시간계좌이체</span>
											        </div>
										        </div>
											</div>
											<div className="change_area">
												<div className="tr">
													<div className="th"><p>카드종류</p></div>
													<div className="td">
														<div className="ib_box">
															<div className="select_box04 w150">
										        				<select className="select04">
																  <option defaultValue>현대카드</option>
																  <option>롯데카드</option>
																  <option>삼성카드</option>
																  <option>비씨카드</option>
																</select>
															</div>
															<button className="btn_medium w120">신용카드 혜택보기</button>
														</div>
													</div>
												</div>
												<div className="tr">
													<div className="th"><p>할부개월</p></div>
													<div className="td">
														<div className="select_box04 w150">
									        				<select className="select04">
															  <option defaultValue>일시불</option>
															  <option>2개월</option>
															  <option>3개월</option>
															  <option>4개월</option>
															</select>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="check_box02 mt14">
								            <input type="checkbox" id="againPayment" name="again_payment"/>
								            <label for="againPayment"><span></span></label>
								            <span>지금 선택한 결제수단을 다음에도 사용하겠습니다.</span>
								        </div>
									</div>
								</div>
								<div className="panel02">
									<div className="panel_header">
										주문자 동의
										<span></span>
									</div>
									<div className="panel_contents">
										<div className="table04">
											<div className="tr">
												<div className="td colspan02">
													<div className="check_box02">
											            <input type="checkbox" id="buyerAgree" name="buyer_agree"/>
											            <label for="buyerAgree"><span></span></label>
											            <span>구매 및 결제대행서비스 이용약관 등에 모두 동의합니다.</span>
											        </div>
												</div>
											</div>
											<div className="tr">
												<div className="td colspan02">
													<div className="terms_box">
														<div className="col">
															<div className="tit">
																<span className="icon_check"></span><p>구매조건 확인 및 결제 진행 동의</p>
															</div>
															<button className="btn_small w80">내용보기</button>
														</div>
														<div className="col">
															<div className="tit">
																<span className="icon_check"></span><p>개인정보 수집·이용 및 제3자 정보 제공 동의</p>
															</div>
															<button className="btn_small w80">내용보기</button>
														</div>
														<div className="col">
															<div className="tit">
																<span className="icon_check"></span><p>결제대행서비스 이용약관 동의</p>
															</div>
															<button className="btn_small w80">내용보기</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="box_btn">
									<button className="btn_big w300">결제하기</button>
								</div>
							</div>
						</div>
						<div className="panel_arcodian order_payment">
							<div className="panel_header">
								<div className="left">
									<h3>주문/결제</h3>
								</div>
								<div className="right">
									<button type="button" className="btn_down"></button>
								</div>
							</div>
							<div className="panel_contents">
								<div className="panel02">
									<div className="panel_contents">
										<div className="order_box01">
											<div className="left">
												<ul>
													<li>
														<div className="box_img">
															<img src={thumbnailBuy} alt="" />
														</div>
														<div className="box_info">
															<div className="info">
																<p className="tit">현대씨즈올 기본라벨</p>
																<p className="sub_tit">현대씨즈올 기본라벨에 대한 설명이 들어갑니다</p>
															</div>
															<p className="quantity"><span className="num">1</span>개/<span className="price">100,000</span></p>
														</div>
													</li>
													<li>
														<div className="box_img">
															<img src={thumbnailBuy} alt=""/>
														</div>
														<div className="box_info">
															<div className="info">
																<p className="tit">현대씨즈올 기본라벨</p>
																<p className="sub_tit">현대씨즈올 기본라벨에 대한 설명이 들어갑니다</p>
															</div>
															<p className="quantity"><span className="num">1</span>개/<span className="price">100,000</span></p>
														</div>
													</li>
													<li>
														<div className="box_img">
															<img src={thumbnailBuy} alt="" />
														</div>
														<div className="box_info">
															<div className="info">
																<p className="tit">현대씨즈올 기본라벨</p>
																<p className="sub_tit">현대씨즈올 기본라벨에 대한 설명이 들어갑니다</p>
															</div>
															<p className="quantity"><span className="num">1</span>개/<span className="price">100,000</span></p>
														</div>
													</li>
												</ul>
											</div>
											<div className="right">
												<div className="box_btn"><button className="btn_small_w w90">배송조회</button><button className="btn_small w90">구매취소</button></div>
											</div>
										</div>
									</div>
								</div>
								<div className="panel02">
									<div className="panel_header">
										구매자 정보
										<span></span>
									</div>
									<div className="panel_contents">
										<table className="table05">
											<colgroup>
												<col width="16.4%" />
												<col width="83.6%" />
											</colgroup>
											<tbody>
												<tr>
													<th>업체명</th>
													<td>현대씨즈올 본사</td>
												</tr>
												<tr>
													<th>주문자 이름</th>
													<td>이흥수</td>
												</tr>
												<tr>
													<th>배송주소</th>
													<td>[10101] 서울시 영등포구 의사당대로 3 현대캐피탈빌딩</td>
												</tr>
												<tr>
													<th>연락처</th>
													<td>010-1234-5678</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div className="panel02">
									<div className="panel_header">
										결제정보
										<span></span>
									</div>
									<div className="panel_contents">
										<div className="order_box02">
											<div className="left">
												<dl>
													<dt>결제수단</dt>
													<dd>
														<p><span className="cardname">현대카드</span>/<span className="installment_period">일시불</span></p>
														<p className="payment_info">결제일시 <span className="payment_date">2019.03.05 16:36</span></p>
													</dd>
												</dl>
											</div>
											<div className="right">
												<div className="box_top">
													<dl>
														<dt>상품금액</dt>
														<dd>
															<p><span className="product_rate">400,000</span>원</p>
														</dd>
													</dl>
													<dl>
														<dt>배송비</dt>
														<dd>
															<p><span className="delivery_fee">5,000</span>원</p>
														</dd>
													</dl>
												</div>
												<div className="box_bottom">
													<dl>
														<dt>총 결제금액</dt>
														<dd>
															<p><span className="total_price">405,000</span>원</p>
														</dd>
													</dl>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="panel02">
									<div className="panel_header">
										결제영수증 정보
										<span></span>
									</div>
									<div className="panel_contents">
										<ul className="order_list">
											<li>
												<p>해당 주문건에 대해 구매 전표 출력이 가능합니다.</p>
												<button className="btn_medium w120">신용카드 전표 인쇄</button>
											</li>
											<li>
												<p>해당 주문건에 대해 거래명세서 출력이 가능합니다.</p>
												<button className="btn_medium w120">거래명세서 인쇄</button>
											</li>
										</ul>
									</div>
								</div>
								<div className="box_btn">
									<button className="btn_big w300">주문내역보기</button>
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