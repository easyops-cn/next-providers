import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetDefaultValueTemplateRequestParams {
  /** 不获取默认值的字段，用逗号分隔 */
  exclude_keys?: string;
}

export type GetDefaultValueTemplateResponseBody = Record<string, any>;

/**
 * @description 获取实例默认值模板
 * @endpoint GET /object/:objectId/instance_default_value_template
 */
export const getDefaultValueTemplate = async (
  objectId: string | number,
  params: GetDefaultValueTemplateRequestParams,
  options?: HttpOptions
): Promise<GetDefaultValueTemplateResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<GetDefaultValueTemplateResponseBody>>(
      `api/gateway/cmdb.instance.GetDefaultValueTemplate/object/${objectId}/instance_default_value_template`,
      { ...options, params }
    )
  ).data;
