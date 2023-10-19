import type { MockMethod } from 'vite-plugin-mock';
import { pieModel } from '../model';

const apis: MockMethod[] = [
  // 获取 Nightingale Rose Chart 数据
  {
    url: '/mock/pieCharts',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: pieModel
      };
    }
  }
];

export default apis;
