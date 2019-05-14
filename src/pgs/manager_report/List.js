import React, { Component } from 'react';
import Item from './Item';
import axios from 'axios';

const axios1 = axios.create({
    withCredentials: true
})

class List extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1,
            datasPerPage: 6,
            limit: 7,
            reports: []
        };
        this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount() {
        this.getReports(0);
        this.getReportsCount();
    }
    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter) {
            this.getReports(0);
            this.getReportsCount();
            this.setState({
                currentPage:1
            })
        }
    }

    getReportsCount = (e) => {
    let countURL;
        if (this.props.filter === "all") {
            countURL = 'https://dev.hchecker.org/reports/count';
        } else {
                countURL = `https://dev.hchecker.org/reports/count?filter=type&condition=${this.props.filter}`;
            }
            axios1.get(`${countURL}`)
                .then(res => {
                    if (res.data.success) {
                        const reportsCount = res.data.count;
                        this.setState({ reportsCount });
                        //console.log("reports count: ", this.state.reportsCount);
                    }
                })
                .catch(e => { console.log(e); });
        }

        getReports = (offset) => {
            this.setState({
                fetching: true
            });
            let URL;
            if (this.props.filter === "all") {
                URL = `https://dev.hchecker.org/reports?offset=${offset}&limit=${this.state.datasPerPage}`;
            } else {
                    URL = `https://dev.hchecker.org/reports?offset=${offset}&limit=${this.state.datasPerPage}&filter=type&condition=${this.props.filter}`;
                }
            axios1.get(URL)
                .then(res => {
                    if (res.data.success) {
                        const reports = res.data.reports['reports'];
                        this.setState({ reports });
                        //console.log(res);
                    }
                })
                .catch(e => { console.log(e); });
                console.log("TESTTESTTESTSTSETSTSET", this.state.reports);
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
            const highest = Number(Math.ceil(this.state.reportsCount / this.state.datasPerPage));
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
            this.getReports(offset);

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
            if (this.state.currentPage < Math.ceil(this.state.reportsCount / this.state.datasPerPage)) {
                this.handleClick(e, this.state.currentPage + 1);
                this.setState({
                    currentPage: this.state.currentPage + 1
                })
            }
        }





        render() {
            const { datasPerPage } = this.state;
            console.log("RENDERREDENRDERENDERNERDNERN", this.state.reports);
            
            const datas = this.state.reports.map(
                (dat, index) => {
                    
                        return <Item
                            serial={dat.serial}
                            call={dat.call}
                            createdAt={dat.createdAt}
                            type={dat.type}
                            parts={dat.parts}
                            state={dat.state}
                            id={dat.id}
                            currentPage={this.state.currentPage}
                            userId={dat.user_id}
                            postReply={this.postReply}
                            reply_id={dat.reply_id}
                            reply_updatedAt={dat.reply_updatedAt}
                        />

                }
            );


            const highest = Math.ceil(this.state.reportsCount / datasPerPage);
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
                <React.Fragment>

                    <div className="box_table">
                        <div className="table03">
                            <div className="thead">
                                <div className="th">신고번호</div>
                                <div className="th">신고번호</div>
                                <div className="th">신고일자</div>
                                <div className="th">신고유형</div>
                                <div className="th">P/N</div>
                                <div className="th">답변시간</div>
                            </div>
                            {/* 답변하기 보이는 클래스 open */}
                            {Number(this.state.reportsCount) === 0 ?
                                <div className="tr none">
                                    <div className="td">
                                        <p>신고처리 목록이 없습니다.</p>
                                    </div>
                                </div>
                                :
                                datas
                            }
                        </div>
                    </div>

                    <div className="pagination">
                        <div className="prev">
                            <a onClick={this.goLowest} className="prev02"> &lt;&lt; </a>
                            <a onClick={this.handlePrevClick} className="prev01"> &lt; </a>
                        </div>
                        {/*  pageination 선택 클래스 - on_pager */}

                        {renderPageNumbers}
                        <div className="next">
                            <a onClick={this.handleNextClick} className="next02"> &gt;</a>
                            <a onClick={this.goHighest} className="next01"> &gt;&gt; </a>
                        </div>
                    </div>

                </React.Fragment>
            );
        }
    }

    const styles = {
        nonee: {
            display: 'none',
        },
    }
    export default List;