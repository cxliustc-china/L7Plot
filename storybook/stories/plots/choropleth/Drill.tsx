import React, { Component } from 'react';
import { Choropleth } from '@antv/l7plot';

class Drill extends Component {
  public map: Choropleth | undefined;

  constructor(props) {
    super(props);
  }

  async initMap() {
    const chinaMap = new Choropleth('container', {
      map: {
        type: 'mapbox',
        style: 'blank',
        center: [120.19382669582967, 30.258134],
        zoom: 3,
        pitch: 0,
      },

      geoArea: {
        type: 'geojson',
      },

      source: {
        data: [],
        joinBy: {
          sourceField: 'code',
          geoField: 'adcode',
        },
      },

      viewLevel: {
        level: 'country',
        adcode: '100000',
        granularity: 'province',
      },
      // chinaBorder: false,
      autoFit: true,

      drill: {
        // steps: ['province', 'city', 'district'],
        steps: [
          {
            level: 'province',
            // source: { data: [] },
            // color: { field: 'name' },
          },
          {
            level: 'city',
            // source: { data: [] },
            // color: { field: 'name' },
          },
          {
            level: 'district',
            source: { data: [] },
            color: { field: 'name' },
          },
        ],
      },

      color: {
        field: 'name',
        value: ['#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70'],
      },
      style: {
        opacity: 0.8,
        stroke: '#F2F7F7',
        lineWidth: 0.5,
        lineOpacity: 0.5,
      },
      label: {
        visible: true,
        field: 'name',
        style: {
          fill: '#000',
          opacity: 0.8,
          fontSize: 10,
          stroke: '#fff',
          strokeWidth: 2,
          textAllowOverlap: false,
          padding: [5, 5],
        },
      },
      state: {
        active: { stroke: 'red' },
      },
      tooltip: {
        items: ['name', 'adcode'],
      },
      zoom: {
        position: 'bottomright',
      },
      scale: {
        position: 'bottomright',
      },
      // layerMenu: {
      //   position: 'topright',
      // },
      legend: {
        position: 'bottomleft',
      },
    });

    this.map = chinaMap;
  }

  componentDidMount() {
    this.initMap();
  }

  componentWillUnmount() {
    this.map && this.map.destroy();
  }

  render() {
    return (
      <div
        id="container"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      ></div>
    );
  }
}

export default Drill;
