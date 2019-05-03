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
            datasPerPage: 10,
            offset: 0,
            limit: 10,
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

    getReports = (offset) => {
        this.setState({
            fetching: true
        });

        axios1.get(`https://dev.hchecker.org/reports?offset=${offset}&limit=${this.state.datasPerPage}`)
            .then(res => {
                if (res.data.success) {
                    const reports = res.data.reports['reports'];
                    this.setState({ reports });
                    console.log(res);
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
        const datas = this.state.reports;

        const renderDatas = datas.map(
            (dat, index) =>
                (
                    <Item
                        call={dat.call}
                        createdAt={dat.createdAt}
                        type={dat.type}
                        parts={dat.parts}
                        id={dat.id}
                    />
                )
        );
        const shortDatas = datas.slice(0, 5).map(
            (dat, index) =>
                (
                    <Item
                        call={dat.call}
                        createdAt={dat.createdAt}
                        type={dat.type}
                        parts={dat.parts}
                        id={dat.id}
                    />
                )
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
                    <table className="table02">
                        <colgroup>
                            <col width="15.6%" />
                            <col width="13.7%" />
                            <col width="23.3%" />
                            <col width="30%" />
                            <col width="17.4%" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>신고번호</th>
                                <th>신고일자</th>
                                <th>신고유형</th>
                                <th>P/N</th>
                                <th>신고인</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.long ? renderDatas : shortDatas}
                        </tbody>
                    </table>
                </div>

                {this.props.long ?
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
                    :
                    null}
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