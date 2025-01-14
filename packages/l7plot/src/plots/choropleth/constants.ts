import { Plot } from '../../core/plot';
import { deepAssign } from '../../utils';
import { ChoroplethOptions } from './types';

/**
 * 默认配置项
 */
export const DEFAULT_OPTIONS: Partial<ChoroplethOptions> = deepAssign({}, Plot.DefaultOptions, {
  source: {
    data: [],
    joinBy: {
      geoField: 'adcode',
    },
  },
  viewLevel: {
    level: 'country',
    adcode: '100000',
  },
  chinaBorder: true,
});

/**
 * 行政数据默认显示粒度
 */
export const DEFAULT_AREA_GRANULARITY: Record<string, 'country' | 'province' | 'city' | 'district'> = {
  world: 'country',
  country: 'province',
  province: 'city',
  city: 'district',
  district: 'district',
};

/**
 * 行政地理数据服务地址
 */
// export const GEO_DATA_URL = 'http://localhost:8080';
export const GEO_DATA_URL = 'https://gw.alipayobjects.com/os/alisis/geo-data-v0.1.2';
export const GEO_AREA_URL = `${GEO_DATA_URL}/choropleth-data`;

/**
 * 中国国界样式
 */
export const CHINA_BOUNDARY_STYLE = {
  // 国界
  national: {
    color: 'red',
    width: 1,
    opacity: 1,
  },
  // 争议
  dispute: {
    color: 'red',
    width: 1,
    opacity: 0.8,
    dashArray: [1, 6],
  },
  // 海洋
  coast: {
    color: 'blue',
    width: 0.7,
    opacity: 0.8,
  },
  // 港澳
  hkm: {
    color: 'gray',
    width: 0.7,
    opacity: 0.8,
  },
};
