import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_GetDefaultValueTemplateRequestParams {
  /** 不获取默认值的字段，用逗号分隔 */
  exclude_keys?: string;
}

export type InstanceApi_GetDefaultValueTemplateResponseBody = Record<
  string,
  any
>;

/**
 * @description 获取实例默认值模板
 * @endpoint GET /object/:objectId/instance_default_value_template
 */
export const InstanceApi_getDefaultValueTemplate = async (
  objectId: string | number,
  params: InstanceApi_GetDefaultValueTemplateRequestParams,
  options?: HttpOptions
): Promise<InstanceApi_GetDefaultValueTemplateResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.GetDefaultValueTemplate@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<InstanceApi_GetDefaultValueTemplateResponseBody>
    >(
      `api/gateway/cmdb.instance.GetDefaultValueTemplate/object/${objectId}/instance_default_value_template`,
      { ...options, params }
    )
  ).data;
