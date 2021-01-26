import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstanceQueryStrategy } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export type GetInstanceQueryStrategyResponseBody = Partial<ModelInstanceQueryStrategy>;

/**
 * @description 获取实例查询策略
 * @endpoint GET /object/:objectId/query/strategy/:strategyId
 */
export const getInstanceQueryStrategy = async (
  objectId: string | number,
  strategyId: string | number,
  options?: HttpOptions
): Promise<GetInstanceQueryStrategyResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<GetInstanceQueryStrategyResponseBody>>(
      `api/gateway/cmdb.instance.GetInstanceQueryStrategy/object/${objectId}/query/strategy/${strategyId}`,
      options
    )
  ).data;
