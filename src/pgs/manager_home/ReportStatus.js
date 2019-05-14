import React, { Component } from 'react';
import * as d3 from 'd3';
class Slice extends React.Component {
    render() {
      let {value, fill, innerRadius = 0, outerRadius} = this.props;
      // https://github.com/d3/d3/wiki/SVG-Shapes#arc
      var radius = Math.min(500, 500) / 2 - 40;
      let arc = d3.arc()
        .innerRadius(70)
        .outerRadius(45);
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
      let width = 80;
      let height = 80;
      let minViewportSize = Math.min(width, height);
      // This sets the radius of the pie chart to fit within
      // the current window size, with some additional padding
      let radius = (minViewportSize * .9) / 2;
      // Centers the pie chart
      let x = width ;
      let y = height ;
  
      return (
        <svg width="100%" height="100%">
          {/* We'll create this component in a minute */}
          <Pie x={x} y={y} radius={radius} padAngle={.02}
          innerRadius={radius* .35} outerRadius={radius} cornerRadius={7} data={this.props.data} />
        </svg>
      );
    }
  }

class ReportStatus extends Component {
    render() {

var width = 450;
var height = 450;
var margin = 40;

// The radius of the pieplot is half the width or half the height (smallest one). I substract a bit of margin.
var radius = Math.min(width, height) / 2 - margin

// append the svg object to the div called 'my_dataviz'
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Create dummy data
var data = {a: 9, b: 20, c:30, d:8, e:12}

// set the color scale
var color = d3.scaleOrdinal()
  .domain(data)
  .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

// Compute the position of each group on the pie:
var pie = d3.pie()
  .value(function(d) {return d.value; })
var data_ready = pie(d3.entries(data))

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll('whatever')
  .data(data_ready)
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(100)         // This is the size of the donut hole
    .outerRadius(radius)
  )
  .attr('fill', function(d){ return(color(d.data.key)) })
  .attr("stroke", "black")
  .style("stroke-width", "2px")
  .style("opacity", 0.7)


        return (
            <div>
      
                <PieTest data={[5,2,7,6,3,1,3] } />
            </div>
        );
    }
}

export default ReportStatus;