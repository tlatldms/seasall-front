import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RequestItem extends Component {
    constructor(props) {
        super(props);
        this.state= {
            refresh:false,
            changed: false
        }
    }
    handleChange = () => {
        this.setState({
            changed: true
        })
    }
    render() {
        const { state, createdAt, group_name, id, user_name, user_email, companyId } = this.props;
        return (
            <div className="tr">
                <div className="group_fixed">
                    <div className="td">
                        {/* 대기중 상태일 때 들어가는 클래스 - waiting */}
                        <p className={`report_sts ${state == 1 ? '' : "waiting"}`}>
                            <span className="icon"></span>
                            <span className="txt">{state == 1 ? "완료" : "대기중"}</span>
                        </p>
                    </div>
                    <div className="td"><p>{createdAt?createdAt.slice(0, 10):null}</p></div>
                    <div className="td"><p>{group_name}</p></div>
                    <div className="td"><p>{id}</p></div>
                    <div className="td"><p>{user_name} [사번 : {companyId}]</p></div>
                    <div className="td">
                        {state == 1 ?
                            <p>{createdAt?createdAt.slice(0,10):null} <br />PM 3:00</p>
                            :
                            <p><h6 className="btn_small w70">
                                <Link to={{
                                    pathname: '/manager_grade/popup',
                                    state: {
                                        email: user_email,
                                        id: id,

                                    }
                                }} >수락하기</Link></h6>                           
                            </p>
                        }

                    </div>


                </div>
            </div>
        );
    }
}

export default RequestItem;