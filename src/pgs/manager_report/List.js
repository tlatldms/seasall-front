import React, { Component } from 'react';
import Item from './Item';
import axios from 'axios';

const countURL = 'https://dev.hchecker.org/reports/count';
const axios1 = axios.create({
    withCredentials: true
})



class List extends Component {
    constructor() {
        super();

        this.state = {
            currentPage: 1,
            datasPerPage: 7,
            currentPagination: 1,
            offset: 0,
            reports: []
        };
        this.handleClick = this.handleClick.bind(this);

    }


    componentDidMount() {
        this.getReports();
        this.getReportsCount();
    }


    getReportsCount = (e) => {
        axios1.get(`${countURL}`)
            .then(res => {
                if (res.data.success) {
                    const reportsCount = res.data.count;
                    this.setState({ reportsCount });
                    console.log(this.state.reportsCount);
                }
            })
            .catch(e => { console.log(e); });
    }

    getReports = (offset, limit) => {
        this.setState({
            fetching: true
        });

        axios1.get(`https://dev.hchecker.org/reports?offset=${offset}&limit=${this.state.datasPerPage}`)
            .then(res => {
                if (res.data.success) {
                    const reports = res.data.reports['reports'];
                    this.setState({ reports });
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
        const limit = this.state.datasPerPage;
        this.getReports(offset, limit);

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
        const datas = this.state.reports;
        console.log(this.props.filter);
        const renderDatas = datas.map(
            (dat, index) => {
                if (this.props.filter=="all" || this.props.filter==dat.type) {
                return  <Item
                        serial={dat.serial}
                        call={dat.call}
                        createdAt={dat.createdAt}
                        type={dat.type}
                        parts={dat.parts}
                        state={dat.state}
                        id={dat.id}
                        key={index}
                        currentPage={this.state.currentPage}
                        userId={dat.user_id}
                    />
                } 
                return null
            
            
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
                    class={this.state.currentPage == number ? "on_pager" : null}
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

                <div class="box_table">
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
                        {this.state.reportsCount == 0 ?
                        <div class="tr none">
                            <div class="td">
                                <p>신고처리 목록이 없습니다.</p>
                            </div>
                        </div>
                        :
                        renderDatas
                        }
                    </div>
                </div>
                
                <div class="pagination">
                    <div class="prev">
                        <a onClick={this.goLowest} class="prev02"> &lt;&lt; </a>
                        <a onClick={this.handlePrevClick} class="prev01"> &lt; </a>
                    </div>
                    {/*  pageination 선택 클래스 - on_pager */}

                    {renderPageNumbers}
                    <div class="next">
                        <a onClick={this.handleNextClick} class="next02"> &gt;</a>
                        <a onClick={this.goHighest} class="next01"> &gt;&gt; </a>
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