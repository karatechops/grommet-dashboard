// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Chart,
  { Layers, Base, Area, HotSpots }
  from 'grommet/components/chart/Chart';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Legend from 'grommet/components/Legend';

const VALUES = [50.9, 53.5, 59.0, 61.3, 62.9, 67.1, 70.5, 73.1, 75.7, 78.3];
const VALUES_2 = [7.8, 9.4, 11.9, 14.6, 17.4, 21.2, 24.3, 27.4, 29.9, 32.4];

export default class AreaChart extends Component {

  constructor() {
    super();
    this.state = { index: (VALUES.length - 1) };
  }

  render() {
    return (
      <Box align="center" style={{width:'100%'}}>
        <Heading className="box-title" tag="h4" strong={true}>Growth in Internet Users</Heading>
          <Chart vertical={true} full={true}>
            <Base height="medium" width="full" />
            <Layers>
              <Area values={VALUES} colorIndex="graph-2" activeIndex={this.state.index} />
              <Area values={VALUES_2} colorIndex="graph-3" activeIndex={this.state.index} />
              <HotSpots count={VALUES.length}
                activeIndex={this.state.index}
                onActive={(index) => this.setState({
                  index: (undefined === index ? (VALUES.length - 1) : index)
                })} />
            </Layers>
          </Chart>
        <Box>
          <Heading tag="h5" strong={true}>Per 100 Users in {this.state.index + 2005}</Heading>
        </Box>
        <Box align="center" justify="start" className="area-legend" 
          direction="row" wrap={true} style={{width:'100%'}}>
          <Box className="area-legend__list" justify="center" align="center" direction="column">
            <Heading tag="h1" strong={true}>{VALUES_2[this.state.index]}</Heading>
            <Legend series={[
              {
                "label": "Developing Countries",
                "colorIndex": "graph-3"
              }
            ]} />
          </Box>

          <Box className="area-legend__list" justify="center" align="center" direction="column">
            <Heading tag="h1" strong={true}>{VALUES[this.state.index]}</Heading>
            <Legend series={[
              {
                "label": "Developed Countries",
                "colorIndex": "graph-2"
              }
            ]} />
          </Box>
        </Box>

      </Box>
    );
  }

};
