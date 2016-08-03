import React, { Component } from 'react';

import Heading from 'grommet/components/Heading';
import Meter from 'grommet/components/Meter';
import FormFields from 'grommet/components/FormFields';
import Box from 'grommet/components/Box';
import Legend from 'grommet/components/Legend';

const SERIES = [
  {
    year: '2005',
    max: 6.5,
    series: [{"label": "People", "value": 5.45, "colorIndex": "graph-2"},
    {"label": "People", "value": 1.05, "colorIndex": "graph-3"}]
  },{
    year: '2010',
    max: 6.9,
    series: [{"label": "People", "value": 4.83, "colorIndex": "graph-2"},
    {"label": "People", "value": 2.07, "colorIndex": "graph-3"}]
  },{
    year: '2014',
    max: 7.2,
    series: [{"label": "People", "value": 4.32, "colorIndex": "graph-2"},
    {"label": "People", "value": 2.88, "colorIndex": "graph-3"}]
  }];

export default class CircleMeter extends Component {
  constructor() {
    super();

    this.state = {
      rangeValue: 0
    };

    this._onSlide = this._onSlide.bind(this);
  }

  _onSlide(event) {
    this.setState({ rangeValue: event.target.value });
  }

  render() {
    return (
      <Box align="center">
        <Heading tag="h4" strong={true}>World population using the Internet</Heading>
        <Heading tag="h5">{SERIES[this.state.rangeValue].year}</Heading>
        <FormFields>
          <input type="range" id="slider" name="date-slider" min="0" max="2" onChange={this._onSlide} value={this.state.rangeValue} />
        </FormFields>
        <Meter series={SERIES[this.state.rangeValue].series} units="B"
          max={SERIES[this.state.rangeValue].max} stacked={true} type="circle" size="medium" />
        <Legend series={[
          {
            "label": "Not using the Internet",
            "colorIndex": "graph-3"
          },
          {
            "label": "Using the Internet",
            "colorIndex": "graph-2"
          }
        ]} units="B" />
      </Box>
    );
  }
};
