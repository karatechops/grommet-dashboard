import React, { Component } from 'react';

import Heading from 'grommet/components/Heading';
import Legend from 'grommet/components/Legend';
import Box from 'grommet/components/Box';

import { mapStyles } from '../constants';

export default class Map extends Component {
  constructor() {
    super();

    this._getMapDiv = this._getMapDiv.bind(this);
    this._renderMap = this._renderMap.bind(this);
  }

  componentDidMount() {
    if (window.google) {
      this._renderMap();
    } else {
      this._scriptLoadTimer();
    }
    window.addEventListener('resize', this._renderMap);
  }

  _scriptLoadTimer() {
    const check = setInterval(() => {
      if (window.google) {
        this._renderMap();
        clearInterval(check);
      }
    }, 150);
  }

  _getMapDiv() {
    return this.refs.map;
  }

  _renderMap() {
    var map = new google.maps.Map(this._getMapDiv(), {
      center: {lat: 41.850033, lng: -87.6500523},
      zoom: 2,
      minZoom: 2, 
      maxZoom: 4
    });

    map.setOptions({
      styles: mapStyles,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP]
      },
      disableDefaultUI: true,
      zoomControl: true
    });

    var layer = new google.maps.FusionTablesLayer({
      query: {
        select: '\'geometry\'',
        from: '1Xc4ydN5WPwUV3EfsMor3BWysAjHrNLUqmg7V4LX1'
      },
      styles: [{
        polygonOptions: {
          fillColor: '#2AD2C9',
          strokeColor: '#425563',
          fillOpacity: 1
        }
      }, {
        where: 'users < 50',
        polygonOptions: {
          fillColor: '#39a0a0'
        }
      }, {
        where: 'users < 10',
        polygonOptions: {
          fillColor: '#3e7b80'
        }
      }, {
        where: 'users = 0',
        polygonOptions: {
          fillColor: '#41626c'
        }
      }]
    });
    layer.setMap(map);

    // Changes content of the info window.
    google.maps.event.addListener(layer, 'click', function(e) {
      // Investigate using JSX here -- that could be cool.
      e.infoWindowHtml = `
        <div class="info-window">
        <span class="info-window__country">${e.row.name.value}</span>
        <span class="info-window__value">${e.row.users.value}</span>
        <span class="info-window__units">Per 100 users</span>
        </div>
      `;
    });
  }

  render() {
    return (
      <div style={{width:'100%', height:'100%'}}>
        <Heading tag="h4" strong={true}>Individuals Using the Internet</Heading>
        <div className="infographic-map" ref="map" style={{backgroundColor:'#425563'}}></div>
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
