import { mockRequest } from '../request';

/**
 * @description 获取南丁格尔玫瑰图数据
 *
 * @export
 * @param
 * @returns
 */
export function fetchPieData() {
  return mockRequest.get('/piecharts');
}
