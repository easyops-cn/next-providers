import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstanceQueryStrategy } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export type InstanceApi_DeleteInstanceQueryStrategyResponseBody = Partial<ModelInstanceQueryStrategy>;

/**
 * @description 删除实例查询策略
 * @endpoint DELETE /object/:objectId/query/strategy/:strategyId
 */
export const InstanceApi_deleteInstanceQueryStrategy = async (
  objectId: string | number,
  strategyId: string | number,
  options?: HttpOptions
): Promise<InstanceApi_DeleteInstanceQueryStrategyResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.DeleteInstanceQueryStrategy */ (
    await http.delete<
      ResponseBodyWrapper<InstanceApi_DeleteInstanceQueryStrategyResponseBody>
    >(
      `api/gateway/cmdb.instance.DeleteInstanceQueryStrategy/object/${objectId}/query/strategy/${strategyId}`,
      options
    )
  ).data;
