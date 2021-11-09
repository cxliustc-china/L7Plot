import { Choropleth } from '@antv/l7plot';

new Choropleth('container', {
  map: {
    type: 'mapbox',
    style: 'blank',
    center: [120.19382669582967, 30.258134],
    zoom: 3,
    pitch: 0,
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
    adcode: 100000,
  },
  drill: {
    steps: ['province', 'city'],
    triggerUp: 'unclick',
    triggerDown: 'click',
    onDown: (from, to, callback) => {
      // 如果是浙江省，禁止下钻
      console.log('to: ', to);
      if (to.adcode !== 330000) {
        callback();
      }
    },
    onUp: (from, to, callback) => {
      callback();
    },
  },
  autoFit: true,
  color: {
    field: 'name',
    value: ['#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70'],
  },
  style: {
    opacity: 1,
    stroke: '#ccc',
    lineWidth: 0.6,
    lineOpacity: 1,
  },
  label: {
    visible: true,
    field: 'name',
    style: {
      fill: '#fff',
      opacity: 0.8,
      fontSize: 12,
      stroke: '#fff', // 描边颜色
      strokeWidth: 0.5, // 描边宽度
    },
  },
  state: {
    active: { stroke: 'black', lineWidth: 1 },
  },
  tooltip: {
    items: ['name', 'adcode', 'value'],
  },
  zoom: {
    position: 'bottomright',
  },
});