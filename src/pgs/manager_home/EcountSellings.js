import React, { Component } from 'react';
import axios from 'axios';

const sellingURL = 'https://dev.hchecker.org/ecountSellings';
const axios1 = axios.create({
    withCredentials: true
  })

class EcountSellings extends Component {
    getSellings=()=> {
        axios1.get(`${sellingURL}`)
        .then(res => {
            if (res.data.success) {

                console.log(res.data.EcountSelling_list['EcountSelling_list']);
            }
        })
        .catch(e => { console.log(e); });
    }

    render() {
        return (
            <div>
                <button onClick={this.getSellings}>클릭</button>
            </div>
        );
    }
}

export default EcountSellings;