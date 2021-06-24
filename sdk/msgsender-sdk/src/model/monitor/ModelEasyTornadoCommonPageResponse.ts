import { ModelEasyTornadoCommonResponse } from ".";

/** easy_tornado 返回通用页码字段 */
export type ModelEasyTornadoCommonPageResponse =
  ModelEasyTornadoCommonResponse & ModelEasyTornadoCommonPageResponse_2;

export interface ModelEasyTornadoCommonPageResponse_2 {
  /** 页码 */
  page: number;

  /** 每页记录数 */
  page_size: number;

  /** 记录总数 */
  tatal: number;
}
