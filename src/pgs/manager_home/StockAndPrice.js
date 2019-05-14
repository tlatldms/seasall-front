import React, { Component } from 'react';
import * as d3 from 'd3';
import { Element } from 'react-faux-dom';
import './test.css';
class BarChart extends React.Component {
  render() {
    return (
      <Chart width={this.props.width} height={this.props.height}>
        <DataSeries
          data={[30, 100, 5, 8, 15, 10]}
          width={this.props.width}
          height={this.props.height}
          color="pink"
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
      .padding(0.05);

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

  render() {
    return (
      <div className="hihi">
        <BarChart width={100} height={100} />
      </div>
    );
  }
}

export default StockAndPrice;