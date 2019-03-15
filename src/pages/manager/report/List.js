import React, { Component } from 'react';
import Item from './Item';
import './List.scss'

  
class List extends Component {
    constructor() {
        super();
        
        this.state= {
            currentPage: 1,
            datasPerPage: 10,
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
        const datas = this.props.todos;

        const indexOfLastData= currentPage * datasPerPage;
        const indexOfFirstData = indexOfLastData - datasPerPage;
        const currentDatas = datas.slice(indexOfFirstData, indexOfLastData);

        const renderDatas = currentDatas.map(
            (data, index) => 
            (
                <Item
                    title={data.Record.partsId}
                    completed={data.Record.isValid}
                    idx={data.Record.supervisorId} 
                />
            )
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



/*
        const todos = this.props.todos;

        const TodoList= todos.map(
            (x,idx)=> (
                <Item
                    className="report-item"
                    title= {x.title}
                    completed = {x.completed}
                    idx={x.id}
                />
            )
        );
*/
        return (
            <div>
                <div class="data-list">
                    {renderDatas}
                </div>
                <div id="page-numbers">
                    {renderPageNumbers}
                </div>               
            </div>
        );
    }
}

export default List;