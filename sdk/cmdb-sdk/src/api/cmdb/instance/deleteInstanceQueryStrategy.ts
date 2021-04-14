import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstanceQueryStrategy } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export type DeleteInstanceQueryStrategyResponseBody = Partial<ModelInstanceQueryStrategy>;

/**
 * @description 删除实例查询策略
 * @endpoint DELETE /object/:objectId/query/strategy/:strategyId
 */
export const deleteInstanceQueryStrategy = async (
  objectId: string | number,
  strategyId: string | number,
  options?: HttpOptions
): Promise<DeleteInstanceQueryStrategyResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.DeleteInstanceQueryStrategy */ (
    await http.delete<
      ResponseBodyWrapper<DeleteInstanceQueryStrategyResponseBody>
    >(
      `api/gateway/cmdb.instance.DeleteInstanceQueryStrategy/object/${objectId}/query/strategy/${strategyId}`,
      options
    )
  ).data;
