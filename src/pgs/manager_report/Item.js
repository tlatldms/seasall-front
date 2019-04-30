import React, {Component} from 'react';
import axios from 'axios';

const axios1 = axios.create({
    withCredentials: true
  })

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    handleClick=(e)=> {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    componentDidMount() {
        this.getReply();
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    
    getReply = () => {
        console.log("id = "+this.props.id);
        axios1.get(`https://dev.hchecker.org/replies/${this.props.id}`)
        .then(res => {
            if (res.data.success){
                const reply = res.data.reply;
                this.setState({
                    reply
                })
                console.log("reply id = "+reply.id);
            }
        })
        .catch(e => { console.log(e);});

    }

    postReply = () => {
        axios1.post(`https://dev.hchecker.org/replies`, {

        })
        .then(res => {
            if (res.data.success){
                const reply = res.data.reply;
                this.setState({
                    reply
                })
                console.log("reply id = "+reply.id);
            }
        })
        .catch(e => { console.log(e);});
    }

    render () {
        
        const { call,id,createdAt,type,parts,serial,state, key} = this.props;
        console.log(this.state.reply);
        return (
            <div class= {`tr ${this.state.clicked?"open":null}`}>
            <div class="group_fixed">
            <div class="td">
                <p class="report_sts complete">
                <span class="icon"></span>
                <span class="txt">{state==1?"완료":"대기중"}</span>
                </p>
            </div>
            <div class="td"><p>{id}</p></div>
            <div class="td"><p>{createdAt}</p></div>
            <div class="td"><p>{type}</p></div>
            <div class="td"><p class="serial_code">{parts}<br />CONTACT ASSY-CLOCK</p></div>
            </div>
            <div class="box_answer answer_before">
            <div class="answer_top">
                <div class="ip_box02">
                <input onChange={this.handleChange} id="reportTitle" name="title" type="text" placeholder="제목" />
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
                <textarea onChange={this.handleChange} placeholder="내용" name="content"></textarea>
                <div class="box_cffile">
                <dl>
                    <dt>첨부파일</dt>
                    <dd>
                    <div class="drop_box">
                                <a href="#" class="btn_file">이미지를 여기로 끌어다 놓거나, 여기를 눌러 파일을 선택하세요.</a>
                                <input type="file" id="fileadd" name="filea" required />
                                <label for="fileadd">파일 첨부</label>
                    </div>
                    </dd>
                </dl>
                </div>
            </div>
            </div>
            <div class="group_variable">
            {this.state.reply ?
            <p>2018.12.31 PM 3:00</p>
            :
            <button class="btn_small w70" onClick={this.handleClick}>답변하기</button>
            }
            </div>
        </div>     
        );
    }
};

export default Item;