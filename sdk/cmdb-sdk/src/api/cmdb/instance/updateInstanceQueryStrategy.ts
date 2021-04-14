import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstanceQueryStrategy } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface UpdateInstanceQueryStrategyRequestBody {
  /** 策略名称 */
  name: string;

  /** 策略类型(org 或者 user) */
  type?: string;

  /** 策略对应的实例类型(instance 或者 relation) */
  instance_type?: string;

  /** 策略内容(包含查询条件和返回的字段,供前端使用，后台逻辑暂时不做校验) */
  query?: Record<string, any>;
}

export type UpdateInstanceQueryStrategyResponseBody = Partial<ModelInstanceQueryStrategy>;

/**
 * @description 更新实例查询策略
 * @endpoint PUT /object/:objectId/query/strategy/:strategyId
 */
export const updateInstanceQueryStrategy = async (
  objectId: string | number,
  strategyId: string | number,
  data: UpdateInstanceQueryStrategyRequestBody,
  options?: HttpOptions
): Promise<UpdateInstanceQueryStrategyResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.UpdateInstanceQueryStrategy */ (
    await http.put<
      ResponseBodyWrapper<UpdateInstanceQueryStrategyResponseBody>
    >(
      `api/gateway/cmdb.instance.UpdateInstanceQueryStrategy/object/${objectId}/query/strategy/${strategyId}`,
      data,
      options
    )
  ).data;
