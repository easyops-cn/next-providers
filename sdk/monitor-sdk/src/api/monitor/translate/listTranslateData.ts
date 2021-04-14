import { http, HttpOptions } from "@next-core/brick-http";

export interface ListTranslateDataRequestParams {
  /** 翻译规则id列表 */
  rule_ids: string[];
}

export interface ListTranslateDataResponseBody {
  /** 返回码 */
  code?: number;

  /** 分页参数 */
  page_size?: number;

  /** 页数 */
  page?: number;

  /** 返回信息 */
  msg?: string;

  /** 总数 */
  total?: number;

  /** 返回数据 */
  data?: ListTranslateDataResponseBody_data_item[];
}

/**
 * @description 获取翻译规则对应的翻译数据
 * @endpoint GET /api/v2/translate/storm/data
 */
export const listTranslateData = (
  params: ListTranslateDataRequestParams,
  options?: HttpOptions
): Promise<ListTranslateDataResponseBody> =>
  /**! @contract easyops.api.monitor.translate.ListTranslateData */ http.get<ListTranslateDataResponseBody>(
    "api/gateway/monitor.translate.ListTranslateData/api/v2/translate/storm/data",
    { ...options, params }
  );

export interface ListTranslateDataResponseBody_data_item {
  /** 匹配key */
  matchKey?: string;

  /** 关联资源 */
  resource?: ListTranslateDataResponseBody_data_item_resource;

  /** 标签 */
  tags?: ListTranslateDataResponseBody_data_item_tags_item[];
}

export interface ListTranslateDataResponseBody_data_item_resource {
  /** 实例id列表 */
  instances?: string[];

  /** 关联模型Id */
  objectId?: string;
}

export interface ListTranslateDataResponseBody_data_item_tags_item {
  /** 值 */
  value?: string[];

  /** 键 */
  key?: string;
}
