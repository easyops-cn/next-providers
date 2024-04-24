import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceBaselineApi_GetInstanceBaselineRequestParams {
  /** 多个逗号分隔，不传则默认返回页面需要的所有字段 */
  fields?: string;
}

export type InstanceBaselineApi_GetInstanceBaselineResponseBody = Record<
  string,
  any
>;

/**
 * @description 获取实例基线
 * @endpoint GET /object/:objectId/instance_baseline/:instanceId
 */
export const InstanceBaselineApi_getInstanceBaseline = async (
  objectId: string | number,
  instanceId: string | number,
  params: InstanceBaselineApi_GetInstanceBaselineRequestParams,
  options?: HttpOptions
): Promise<InstanceBaselineApi_GetInstanceBaselineResponseBody> =>
  /**! @contract easyops.api.cmdb.instance_baseline.GetInstanceBaseline@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<InstanceBaselineApi_GetInstanceBaselineResponseBody>
    >(
      `api/gateway/cmdb.instance_baseline.GetInstanceBaseline/object/${objectId}/instance_baseline/${instanceId}`,
      { ...options, params }
    )
  ).data;
