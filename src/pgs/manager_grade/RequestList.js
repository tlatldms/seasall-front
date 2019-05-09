import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Item from './RequestItem';


const axios1 = axios.create({
    withCredentials: true
})
const styles = {
    nonee: {
        display: 'none',
    },
}


class RequestList extends Component {
    constructor() {
        super();

        this.state = {
            currentPage: 1,
            datasPerPage: 7,
            requests: []
        };
        this.handleClick = this.handleClick.bind(this);

    }
    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter || this.props.tab != prevProps.tab) {
            console.log("componentDidUpdate");
            this.getRequests(0);
            this.getRequestCount();
            this.setState({
                currentPage:1
            })
        }
    }

    componentDidMount() {
        this.getRequests(0);
        this.getRequestCount();
    }



    getRequestCount = (e) => {

        var URL = 'https://dev.hchecker.org/promotions/count';

        if (this.props.filter!="all" && this.props.tab != -1) { // grade와 state filter가 둘 다 있을 때 
            URL=`https://dev.hchecker.org/promotions/count?filter=group_name&condition=${this.props.filter}&filter2=state&condition2=${this.props.tab}`;
        } else if (this.props.filter!="all") { // grade filter만 있을 때
            URL=`https://dev.hchecker.org/promotions/count?filter=group_name&condition=${this.props.filter}`;
        } else if (this.props.tab != -1 ) { // state filter만 있을 때
            URL=`https://dev.hchecker.org/promotions/count?filter=state&condition=${this.props.tab}`;
        }

        axios1.get(URL)
            .then(res => {
                if (res.data.success) {
                    const requestsCount = res.data.count;
                    this.setState({ requestsCount });
                    console.log("requestCount: ",requestsCount);
                }
            })
            .catch(e => { console.log(e); });
    }

    getRequests = (offset) => {
        this.setState({
            fetching: true
        });
        var URL=`https://dev.hchecker.org/promotions?offset=${offset}&limit=${this.state.datasPerPage}`;
        
        if (this.props.filter!="all" && this.props.tab != -1) { // grade와 state filter가 둘 다 있을 때 
            URL=`https://dev.hchecker.org/promotions?offset=${offset}&limit=${this.state.datasPerPage}&filter=group_name&condition=${this.props.filter}&filter2=state&condition2=${this.props.tab}`;
        } else if (this.props.filter!="all") { // grade filter만 있을 때
            URL=`https://dev.hchecker.org/promotions?offset=${offset}&limit=${this.state.datasPerPage}&filter=group_name&condition=${this.props.filter}`;
        } else if (this.props.tab != -1 ){ // state filter만 있을 때
            URL=`https://dev.hchecker.org/promotions?offset=${offset}&limit=${this.state.datasPerPage}&filter=state&condition=${this.props.tab}`;
        }
        axios1.get(URL)
            .then(res => {
                if (res.data.success) {
                    const requests = res.data.promotions['promotions'];
                    this.setState({ requests });
                }                
            })
            .catch(e => { console.log(e); });
        this.setState({
            fetching: false
        })
    }

    goLowest = (e) => {
        this.handleClick(e, 1);
        this.setState({
            currentPage: 1
        });
    }

    goHighest = (e) => {
        const highest = Number(Math.ceil(this.state.requestsCount / this.state.datasPerPage));
        this.handleClick(e, highest);
        this.setState({
            currentPage: highest
        });
    }
    handleClick(event, number) {
        this.setState({
            currentPage: Number(event.target.text),
        });
        const offset = (number - 1) * (this.state.datasPerPage);
        this.getRequests(offset);

    }
    handlePrevClick = (e) => {
        if (this.state.currentPage > 1) {
            this.handleClick(e, this.state.currentPage - 1);
            this.setState({
                currentPage: this.state.currentPage - 1
            })
        }
    }

    handleNextClick = (e) => {
        if (this.state.currentPage < Math.ceil(this.state.requestsCount / this.state.datasPerPage)) {
            this.handleClick(e, this.state.currentPage + 1);
            this.setState({
                currentPage: this.state.currentPage + 1
            })
        }
    }
    

    render() {
        const { datasPerPage } = this.state;
        const datas = this.state.requests.map(
            (dat, index) => {     
                    return <Item
                        companyId={dat.companyId}
                        state={dat.state}
                        createdAt={dat.createdAt}
                        group_name={dat.group_name}
                        id={dat.id}
                        key={dat.id}
                        currentPage={this.state.currentPage}
                        user_email={dat.user_email}
                        user_name={dat.user_name}
                    />
            }
        );


        const highest = Math.ceil(this.state.requestsCount / datasPerPage);
        const pageNumbers = [];
        for (let i = 1; i <= highest; i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <a
                    key={number}
                    onClick={(e) => this.handleClick(e, number)}
                    className={Number(this.state.currentPage) === number ? "on_pager" : null}
                    style={(this.state.currentPage - 2 <= number && number <= this.state.currentPage + 2)
                        ||
                        ((this.state.currentPage < 3 && number < 6)
                            ||
                            (this.state.currentPage > highest - 3 && number > highest - 5)
                        )
                        ? null : styles.nonee
                    }
                >
                    {number}
                </a>
            );
        });


        return (
            <div className="panel_contents">
            <div className="table03">
                <div className="thead">
                    <div className="th">상태</div>
                    <div className="th">요청일자</div>
                    <div className="th">등급</div>
                    <div className="th">부서명</div>
                    <div className="th">이름 [사번]</div>
                    <div className="th">답변시간</div>
                </div>
                {datas}
            </div>

            <div className="pagination">
                <div className="prev">
                    <a onClick={this.goLowest} className="prev02"> &lt;&lt; </a>
                    <a onClick={this.handlePrevClick} className="prev01"> &lt; </a>
                </div>
                {renderPageNumbers}
                <div className="next">
                    <a onClick={this.handleNextClick} className="next02"> &gt;</a>
                    <a onClick={this.goHighest} className="next01"> &gt;&gt; </a>
                </div>
            </div>
        </div>
        );
    }
}

export default RequestList;