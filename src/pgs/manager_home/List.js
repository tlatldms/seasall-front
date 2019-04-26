import React, { Component } from 'react';
import Item from './Item';
import axios from 'axios';

const URL = 'https://dev.hchecker.org/reports/count';
const axios1 = axios.create({
    withCredentials: true
  })

class List extends Component {
    constructor() {
        super();
        
        this.state= {
            currentPage: 1,
            datasPerPage: 8,
            currentPagination: 1,
        };
        this.handleClick = this.handleClick.bind(this);
     
    }

    goLowest = (e) => {
        this.setState({
            currentPage: 1
        });
    }
    getHighest = () => {
        axios1.get(`${URL}`).then(res => {const highest = Number(res.data.count); this.setState({highest})} ).catch(error =>{ console.log(error) });
    }
    goHighest = (e) => {
        this.setState({
            currentPage: Math.ceil(this.state.highest/this.state.datasPerPage)
        });
        console.log(this.state.currentPage);
    }
    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.text),
        });
    }
    handlePrevClick = (e) => {
        if (this.state.currentPage >1 ) {
            this.setState({
                currentPage : this.state.currentPage - 1
            })
        }
    } 

    handleNextClick = (e) => {
        if (this.state.currentPage < 11 ) {
            this.setState({
                currentPage : this.state.currentPage + 1
            })
        }
    }
        
    render() {
        const { currentPage, datasPerPage} = this.state;
        const datas = this.props.reports;
        
        const indexOfLastData= currentPage * datasPerPage;
        const indexOfFirstData = indexOfLastData - datasPerPage;
        const currentDatas = datas.slice(indexOfFirstData, indexOfLastData);

        const renderDatas = currentDatas.map(
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

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(datas.length / datasPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
              <a
                key={number}
                onClick={this.handleClick}
                class={this.state.currentPage == number?"on_pager" : null}
                style={ (this.state.currentPage - 2 <= number && number <= this.state.currentPage + 2)
                            ||
                         ( (this.state.currentPage < 3 && number<6)
                            ||
                            (this.state.currentPage > pageNumbers.length-3 && number > pageNumbers.length-5)
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
                {this.getHighest()}
                <div class="box_table">
                    <table class="table02">
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
                            {renderDatas}
                        </tbody>
                    </table>
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