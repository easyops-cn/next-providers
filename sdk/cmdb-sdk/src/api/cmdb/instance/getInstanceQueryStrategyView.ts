import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstanceQueryStrategy } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export type InstanceApi_GetInstanceQueryStrategyViewResponseBody =
  Partial<ModelInstanceQueryStrategy>;

/**
 * @description 获取实例查询策略视图
 * @endpoint GET /object/:objectId/query/strategy/view
 */
export const InstanceApi_getInstanceQueryStrategyView = async (
  objectId: string | number,
  options?: HttpOptions
): Promise<InstanceApi_GetInstanceQueryStrategyViewResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.GetInstanceQueryStrategyView@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<InstanceApi_GetInstanceQueryStrategyViewResponseBody>
    >(
      `api/gateway/cmdb.instance.GetInstanceQueryStrategyView/object/${objectId}/query/strategy/view`,
      options
    )
  ).data;
