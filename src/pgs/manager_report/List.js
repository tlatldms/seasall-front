import React, { Component } from 'react';
import Item from './Item';

  
class List extends Component {
    constructor() {
        super();
        
        this.state= {
            currentPage: 1,
            datasPerPage: 5,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
            

        
    render() {
        const { currentPage, datasPerPage} = this.state;
        const datas = this.props.reports;
        console.log(datas);

        
        const indexOfLastData= currentPage * datasPerPage;
        const indexOfFirstData = indexOfLastData - datasPerPage;
        const currentDatas = datas.slice(indexOfFirstData, indexOfLastData);

        const renderDatas = currentDatas.map(
            (dat, index) =>      
                <Item
                    call={dat.call}
                    createdAt={dat.createdAt}
                    type={dat.type}
                    parts={dat.parts}
                    id={dat.id}
                /> 
            
          );

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(datas.length / datasPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
              <li
                key={number}
                id={number}
                onClick={this.handleClick}
              >
                {number}
              </li>
            );
          });

        return (
            <div>
                <div>
                    {renderDatas}
                </div>
                <div>
                    {renderPageNumbers}
                </div>               
            </div>
        );
  
    }
}

export default List;