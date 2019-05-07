import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import classNames from 'classnames/bind';
import axios from 'axios';


const axios1 = axios.create({
    withCredentials: true
})


const nopad = {
    padding: '0px',
}

class Main extends Component {
    setGrade = (e) => {
        this.setState({
            grade: e.target.text
        })
    }
    componentDidMount() {
        this.getUser();
        this.Test();

    }

    acceptGrade = () => {
        const { email, id } = this.props.location.state;

        console.log("selected grade is :", this.state.grade);
        axios1.put(`https://dev.hchecker.org/users/${email}`, {
            group_name: this.state.grade
        })
            .then(res => {
                if (res.data.success) {
                    axios1.put(`https://dev.hchecker.org/promotions/${id}`, {
                        state: 1
                    })
                        .then(res => {
                            if (res.data.success) {
                                console.log("state (완료/대기중) put 완료 ");

                            }
                        })
                        .catch(e => { console.log(e); });
                    alert("수락했습니다.");
                }
                console.log(res)
            })
            .catch(error => {
                console.log(error);
            })
        this.onCloseModal();
    }


    getUser = () => {
        this.setState({
            fetching: true
        });
        const { email } = this.props.location.state;
        const arr = email.split('@');

        axios1.get(`https://dev.hchecker.org/users/${arr[0]}%40${arr[1]}`)
            .then(res => {
                if (res.data.success) {
                    const user = res.data.user;
                    this.setState({
                        name: user.name,
                        id: user.companyId,
                        company: user.company_name,
                        phone: user.phone
                    })
                }
            })
            .catch(e => { console.log(e); });


        this.setState({
            fetching: false
        })
    }

    state = {
        option: false
    }

    onCloseModal = () => {
        this.setState({ open: false });
        this.props.history.goBack();
    };
    render() {
        return (
            <Modal open={true} onClose={this.onCloseModal} center style={nopad}>
                <div className="popup pop01 grade_pop01">
                    <div className="pop_header">
                        권한요청
                <button className="btn_close" type="button" onClick={this.onCloseModal}></button>
                    </div>
                    <div className="pop_content">
                        <div className="pop_top">
                            <p className="tit">권한요청을 수락하시겠습니까?</p>
                            <p className="txt">해당 요청자에 부여할 등급을 선택해 주세요.</p>
                            <div className="box_grade">
                                <div className="requester_info">
                                    <p>요청자 : <span className="requester_name">{this.state.name} </span>[사번 : <span className="requester_num">{this.state.id}</span>]</p>
                                    <p>소속 : <span className="requester_belong bar">{this.state.company}</span> 부서명 : <span className="requester_department">{this.state.phone}</span></p>
                                </div>

                                <div onClick={() => this.setState({ option: !this.state.option })} className={classNames("selectBox select_box08", { 'open': this.state.option })}>
                                    <div className="select_btn">
                                        <p><span>등급선택</span></p>
                                    </div>
                                    <div className="option_list">
                                        <ul>
                                            <li><a onClick={this.setGrade}>G1</a></li>
                                            <li><a onClick={this.setGrade}>G2</a></li>
                                            <li><a onClick={this.setGrade}>G3</a></li>
                                            <li><a onClick={this.setGrade}>G4</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pop_bottom">
                            <button className="btn_big" onClick={this.acceptGrade}>요청수락하기</button>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
};

export default Main;

