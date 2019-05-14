import React, { Component } from 'react';
import * as d3 from 'd3';
import { Element } from 'react-faux-dom';
import './test.css';
import axios from 'axios';

const getURL = 'https://dev.hchecker.org/ecountSellings';
const axios1 = axios.create({
    withCredentials: true
})


class BarChart extends React.Component {
  render() {
    return (
      <Chart width={this.props.width} height={this.props.height}>
        <DataSeries
          data={this.props.data}
          width={this.props.width}
          height={this.props.height}
          color="navy"
        />
      </Chart>
    );
  }
}

class Chart extends React.Component {
  render() {
    return (
      <svg width={this.props.width} height={this.props.height}>{this.props.children}</svg>
    );
  }
}

class DataSeries extends React.Component {
  render() {
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(this.props.data)])
      .range([0, this.props.height]);

    const xScale = d3.scaleBand()
      .domain(d3.range(this.props.data.length))
      .rangeRound([0, this.props.width])
      .padding(0.5);

    const bars = this.props.data.map((point, i) => {
      return (
        <Bar
          height={yScale(point)}
          width={xScale.bandwidth()}
          offset={xScale(i)}
          availableHeight={this.props.height}
          color={this.props.color}
          key={i}
        />
      );
    });

    return <g>{bars}</g>
  }
}

DataSeries.defaultProps = {
  title: '',
  data: []
};

class Bar extends React.Component {
  render() {
    return (
      <rect
        fill={this.props.color}
        width={this.props.width}
        height={this.props.height}
        x={this.props.offset}
        y={this.props.availableHeight - this.props.height}
      />
    );
  }
}

Bar.defaultProps = {
  width: 0,
  height: 0,
  offset: 0
};

class Slice extends React.Component {
  render() {
    let {value, fill, innerRadius = 0, outerRadius} = this.props;
    // https://github.com/d3/d3/wiki/SVG-Shapes#arc
    var radius = Math.min(500, 500) / 2 - 40;
    let arc = d3.arc()
      .innerRadius(100)
      .outerRadius(50);
    return (
      <path d={arc(value)} fill={fill} />
    );
  }
}

class Pie extends React.Component {
  constructor(props) {
    super(props);
    // https://github.com/d3/d3/wiki/Ordinal-Scales#category10
    this.renderSlice = this.renderSlice.bind(this);
    this.color = d3.scaleOrdinal(d3.schemeCategory10);
  }

  render() {
    let {x, y, data} = this.props;
    // https://github.com/d3/d3/wiki/Pie-Layout
    let pie = d3.pie();
    return (
      <g transform={`translate(${x}, ${y})`}>
        {/* Render a slice for each data point */}
        {pie(data).map(this.renderSlice)}
      </g>
    );
  }

  renderSlice(value, i) {
    // We'll create this component in a minute
    return (
      <Slice key={i}
             outerRadius={this.props.radius}
             value={value}
             fill={this.color(i)} />
    );
  }
}

class PieTest extends React.Component {
  render() {
    // For a real world project, use something like
    // https://github.com/digidem/react-dimensions
    let width = 100;
    let height = 100;
    let minViewportSize = Math.min(width, height);
    // This sets the radius of the pie chart to fit within
    // the current window size, with some additional padding
    let radius = (minViewportSize * .9) / 2;
    // Centers the pie chart
    let x = width / 2;
    let y = height / 2;

    return (
      <svg width="100%" height="100%">
        {/* We'll create this component in a minute */}
        <Pie x={x} y={y} radius={radius} padAngle={.02}
        innerRadius={radius* .35} outerRadius={radius} cornerRadius={7} data={this.props.data} />
      </svg>
    );
  }
}

class StockAndPrice extends Component {
  /* 
  componentDidMount() {
      this.drawChart();
  }
  drawChart = () => {
      const data = [1,2,3,4,5];
      
      d3.select(".hihi")          // 1
      .selectAll("rest")          // 2
      .data(data)           // 3
      .enter()                 // 4
      .append("svg")             // 5
      .text("hi jeongpro!")
      .attr('id', 'chart')
      .attr('width', 20)
      .attr('height', 50);
  }
  */

 constructor() {
  super();
  this.state = {
      sellings: []
  };
}
 componentDidMount() {
  this.getSellings();
}

 getSellings = (offset) => {
  this.setState({
      fetching: true
  });

  axios1.get(getURL)
      .then(res => {
          if (res.data.success) {
              const sellings = res.data.EcountSelling_list['EcountSelling_list'];
              console.log(sellings[2].price);
              this.setState({
                sellings: sellings,
                test1: sellings.map(x=>{return x.price}) 
              });
              //console.log(res);
          }
      })
      .catch(e => { console.log(e); });
      console.log(this.state.sellings);
  this.setState({
      fetching: false
  })
}

setS=()=>{
  this.setState({

  });
  console.log("setS called");
}
  render() {
console.log("STSTSTST", this.state.test1)

    return (
      <div className="hihi">
        <BarChart width={500} height={200} data={this.state.test1} />
        <PieTest data={[5,2,7,6,3,1,3] } />
      </div>
    );
  }
}

export default StockAndPrice;