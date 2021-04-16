import { http, HttpOptions } from "@next-core/brick-http";

export interface TranslateApi_ListTranslateDataRequestParams {
  /** 翻译规则id列表 */
  rule_ids: string[];
}

export interface TranslateApi_ListTranslateDataResponseBody {
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
  data?: TranslateApi_ListTranslateDataResponseBody_data_item[];
}

/**
 * @description 获取翻译规则对应的翻译数据
 * @endpoint GET /api/v2/translate/storm/data
 */
export const TranslateApi_listTranslateData = (
  params: TranslateApi_ListTranslateDataRequestParams,
  options?: HttpOptions
): Promise<TranslateApi_ListTranslateDataResponseBody> =>
  /**! @contract easyops.api.monitor.translate.ListTranslateData */ http.get<TranslateApi_ListTranslateDataResponseBody>(
    "api/gateway/monitor.translate.ListTranslateData/api/v2/translate/storm/data",
    { ...options, params }
  );

export interface TranslateApi_ListTranslateDataResponseBody_data_item {
  /** 匹配key */
  matchKey?: string;

  /** 关联资源 */
  resource?: TranslateApi_ListTranslateDataResponseBody_data_item_resource;

  /** 标签 */
  tags?: TranslateApi_ListTranslateDataResponseBody_data_item_tags_item[];
}

export interface TranslateApi_ListTranslateDataResponseBody_data_item_resource {
  /** 实例id列表 */
  instances?: string[];

  /** 关联模型Id */
  objectId?: string;
}

export interface TranslateApi_ListTranslateDataResponseBody_data_item_tags_item {
  /** 值 */
  value?: string[];

  /** 键 */
  key?: string;
}
