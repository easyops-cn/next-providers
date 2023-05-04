import { http, HttpOptions } from "@next-core/brick-http";

export interface InstanceApi_SetInstanceQueryStrategyViewRequestBody {
  /** 旧的全局视图策略id */
  oldStrategyId?: string;

  /** 新的全局视图策略id */
  newStrategyId?: string;
}

/**
 * @description 设置实例查询策略视图
 * @endpoint PUT /object/:objectId/query/strategy/view
 */
export const InstanceApi_setInstanceQueryStrategyView = (
  objectId: string | number,
  data: InstanceApi_SetInstanceQueryStrategyViewRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.instance.SetInstanceQueryStrategyView@1.0.0 */ http.put<void>(
    `api/gateway/cmdb.instance.SetInstanceQueryStrategyView/object/${objectId}/query/strategy/view`,
    data,
    options
  );
