import { http, HttpOptions } from "@next-core/brick-http";
import { ModelTransalteRule } from "../../../model/monitor";

export interface TranslateApi_ListTranslateRuleRequestParams {
  /** 页数 */
  page?: number;

  /** 分页大小 */
  page_size?: number;
}

export interface TranslateApi_ListTranslateRuleResponseBody {
  /** 返回码 */
  code: number;

  /** 返回信息 */
  msg: string;

  /** 总数 */
  total: number;

  /** 页码 */
  page: number;

  /** 分页大小 */
  page_size: number;

  /** 翻译规则列表 */
  data: Partial<ModelTransalteRule>[];
}

/**
 * @description 获取翻译规则列表
 * @endpoint GET /api/v1/translate/rule
 */
export const TranslateApi_listTranslateRule = (
  params: TranslateApi_ListTranslateRuleRequestParams,
  options?: HttpOptions
): Promise<TranslateApi_ListTranslateRuleResponseBody> =>
  /**! @contract easyops.api.monitor.translate.ListTranslateRule@1.0.0 */ http.get<TranslateApi_ListTranslateRuleResponseBody>(
    "api/gateway/monitor.translate.ListTranslateRule/api/v1/translate/rule",
    { ...options, params }
  );
