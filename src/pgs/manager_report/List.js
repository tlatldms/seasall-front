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

        return (
            <div>
     
            </div>
        );
  
    }
}

export default List;