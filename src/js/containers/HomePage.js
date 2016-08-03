import React, { Component } from 'react';

import Responsive from 'grommet/utils/Responsive';

import Box from 'grommet/components/Box';
import Map from './Map';
import CircleMeter from './CircleMeter';
import AreaChart from './AreaChart';
import Heading from 'grommet/components/Heading';
import LinkNext from 'grommet/components/icons/base/LinkNext';

import '../../scss/index.scss';

export default class HomePage extends Component {
  constructor() {
    super();

    this._onResponsive = this._onResponsive.bind(this);

    this.state = {
      layout: 'large'
    };
  }

  componentDidMount() {
    this._responsive = Responsive.start(this._onResponsive);
  }

  componentWillUnmount() {
    this._responsive.stop();
  }

  _onResponsive (small) {
    this.setState({
      layout: (small) ? 'small' : 'large'
    });
  }

  render() {
    let statImg = (this.state.layout !== 'small')
      ? <img src="../img/people.svg" />
      : <img src="../img/people-mobile.svg" />;
    return (
      <Box className="dashboard" justify="center" align="center" pad="medium" full={true} colorIndex="neutral-1">
       
      <Box className="infographic-start" direction="column">
        <Box justify="center" align="start" className="col__span-100">
          <Heading className="infographic-title" tag="h1" strong={true}>Worldwide Internet Usage</Heading>         
          <Box>
            <Heading tag="h3">
              Access to the internet has increased at an unprecedented rate over the past
              10 years. Creating today’s idea economy, where the speed of businesses is faster
              and more agile than ever.
              <a href="#" className="cta"><LinkNext />Learn More</a>
            </Heading>
          </Box>
        </Box>

        <Box className="infographic-stat" responsive={false} direction="row" style={{paddingTop:'20px'}}>
          <Box justify="center" align="center" style={{height:'auto'}} className="col__span-50">
            {statImg}
          </Box>
          <Box justify="center" align="start" className="col__span-50">
            <Heading tag="h4" strong={true} margin="none">Nearly</Heading>
            <Heading tag="h1" strong={true}>
              50
              <span className="unit">%</span>
              <span className="support"> (or 3.2B people)</span>
            </Heading>
            <Heading tag="h3">of the world's population have access to the internet.</Heading>
          </Box>
        </Box>
      </Box>

        <Box className="col-row" direction="row">
          <Box justify="start" align="center" className="col__span-25">
            <CircleMeter />
          </Box>
          <Box justify="start" align="center" className="col__span-25">
            <AreaChart />
          </Box>
          <Box justify="start" align="center" className="col__span-50">
            <Map />
          </Box>
        </Box>
      </Box>
    );
  }
};