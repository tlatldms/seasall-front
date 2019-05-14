import React, { Component } from 'react';
import axios from 'axios';
import { AccordionTitle } from 'semantic-ui-react';

const axios1 = axios.create({
    withCredentials: true
})

class Item extends Component {


    constructor(props) {
        super(props);
        this.state = {
            clicked: 0,
            type: "all",
            registered: false,
        }
        
    }



    handleType = (e) => {
        this.setState({
            type: e.target.value,
        })
    }



    
    handleClick = () => {
        const { title, content, type, file, clicked } = this.state;
        const { id, userId } = this.props;
        this.setState({
            clicked: clicked + 1
        })
        if (this.state.clicked > 1) {

            
                axios1.post(`https://dev.hchecker.org/replies`, {
                    title: title,
                    content: content,
                    type: type,
                    file: file,
                    report_id: id,
                    user_id: userId
                })
                    .then(res => {
                        if (res.data.success) {
                            console.log(res);
                            this.getReply(res.data.reply.id);
                        }
                    })
                    .catch(e => { console.log(e); });
            

            this.setState({
                registered: true
            });
            
        }

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            clicked: 0
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    getReply = (x) => {

        //console.log("id = "+this.props.id);
        axios1.get(`https://dev.hchecker.org/replies/${x}`)
            .then(res => {
                if (res.data.success) {
                    const reply = res.data.reply;
                    //console.log(reply);
                    this.setState({
                        reply
                    })
                    //console.log("reply id = "+reply.id);
                }
            })
            .catch(e => { console.log(e); });

            this.setState({
                clicked:1
            })

    }

    render() {

        const { call, id, createdAt, type, parts, state, reply_id, reply_updatedAt } = this.props;

        const reply=this.state.reply;
        //console.log(this.state.reply);
        return (
            <div className={`tr ${this.state.clicked > 0 ? "open" : null}`}>
                <div className="group_fixed">
                    <div className="td">
                        <p className="report_sts complete">
                            <span className="icon"></span>
                            <span className="txt" >{reply_updatedAt==null ? "대기중" : "완료"}</span>
                        </p>
                    </div>
                    <div className="td"><p>{id}</p></div>
                    <div className="td"><p>{createdAt.slice(0, 10)}</p></div>
                    <div className="td"><p>{type}</p></div>
                    <div className="td"><p className="serial_code">{parts}<br />CONTACT ASSY-CLOCK</p></div>
                </div>

                {reply_updatedAt!=null || this.state.registered
                    ?
                    <div className="box_answer answer_after" >
                        <div className="answer_top">
                            <div className="title"> { reply ? reply.title : null} </div>
                            <div className="title_info">
                                <dl>
                                    <dt>담당자 : </dt>
                                    <dd> {reply ? reply.id : null }</dd>
                                </dl>
                                <dl>
                                    <dt>유형 : </dt>
                                    <dd>{reply? reply.type : null }</dd>
                                </dl>
                            </div>
                        </div>
                        <div className="answer_bottom">
                            <div className="answer_con">
                                <p>{reply? reply.content : null}</p>
                                
                            </div>
                            <div className="cf_file">
                                <dl>
                                    <dt>첨부파일</dt>
                                    <dd>
                                        <a href="#">20181212 모조품신고.jpg</a>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="box_answer answer_before">
                        <div className="answer_top">
                            <div className="ip_box02">
                                <input onChange={this.handleChange} id="reportTitle" name="title" type="text" placeholder="제목" />
                            </div>
                            <div className="select_box03">
                                <select value={this.state.type} className="select03" onChange={this.handleType}>
                                    <option value="all" defaultValue>유형선택</option>
                                    <option value="유형11">유형111</option>
                                    <option value="유형22">유형222</option>
                                    <option value="유형33">유형333</option>
                                </select>
                            </div>
                        </div>
                        <div className="answer_bottom" >
                            <textarea onChange={this.handleChange} placeholder="내용" name="content"></textarea>
                            {/* 
                        <div className="box_cffile">
                        <dl>
                            <dt>첨부파일</dt>
                            <dd>
                            <div className="drop_box">
                                        <a href="#" className="btn_file">이미지를 여기로 끌어다 놓거나, 여기를 눌러 파일을 선택하세요.</a>
                                        <input type="file" id="fileadd" name="fileName" required />
                                        <label for="fileadd">파일 첨부</label>
                            </div>
                            </dd>
                        </dl>
                        </div>
                        */}
                        </div>
                    </div>
                }

                <div className="group_variable" >
                    {/* 
            {this.state.reply ?
            <p>2018.12.31 PM 3:00</p>
            :
            <button className="btn_small w70" onClick={this.handleClick}>답변하기</button>
            }*/} {reply_updatedAt!= null
                        ?
                        <p onClick={()=>this.getReply(reply_id)}>{reply_updatedAt ? reply_updatedAt.slice(0, 10) : null}</p>
                        :
                        <p className="btn_small w70" onClick={this.handleClick}>답변하기</p>
                }
                </div>
            </div>
        );
    }
};

const styles = {
    dis: {
        color: "pink",

    }
}
export default Item;
