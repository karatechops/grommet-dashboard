import React, { Component } from 'react';

import Heading from 'grommet/components/Heading';
import Legend from 'grommet/components/Legend';
import WorldMap from 'grommet/components/WorldMap';
import Box from 'grommet/components/Box';

import { mapSeries } from '../constants';

export default class Map extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
  }

  onClick() {

  }


  render() {
    return (
      <div className="infographic-map-container" style={{width:'100%', height:'100%'}}>
        <Heading className="box-title" tag="h4" strong={true}>Individuals Using the Internet per 100 Users</Heading>
        <div className="infographic-map" ref="map" style={{backgroundColor:'#425563'}}>
          <WorldMap series={mapSeries} legend={true} units="per 100" />
        </div>
        <Box align="center" justify="center">
          <Legend series={[
            {
              "label": "0",
              "colorIndex": "graph-3-fade-10"
            },
            {
              "label": "1-25",
              "colorIndex": "graph-3-fade-25"
            },
            {
              "label": "26-50",
              "colorIndex": "graph-3-fade-75"
            },
            {
              "label": "50+",
              "colorIndex": "graph-3"
            }
          ]} />
        </Box>
      </div>
    );
  }
};
