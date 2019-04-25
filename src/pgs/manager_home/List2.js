import React, { Component } from 'react';

class List2 extends Component {

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
        const datas = JSON.stringify(this.props.reports);
        console.log("List2에서"+datas+"보냄");
        console.log(datas);
        const test = JSON.parse(datas);
        console.log(test[0].id);
  

        return (
            <div>
                d
            </div>
        );
    }
}

export default List2;