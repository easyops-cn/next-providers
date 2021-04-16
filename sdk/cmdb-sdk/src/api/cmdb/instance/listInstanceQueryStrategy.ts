import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstanceQueryStrategy } from "../../../model/cmdb";

export interface InstanceApi_ListInstanceQueryStrategyRequestParams {
  /** 策略类型 */
  type?: string;
}

export interface InstanceApi_ListInstanceQueryStrategyResponseBody {
  /** 返回码 */
  code?: number;

  /** 页码 */
  error?: string;

  /** 返回信息 */
  message?: string;

  /** 数据 */
  data?: Partial<ModelInstanceQueryStrategy>[];
}

/**
 * @description 获取实例查询策略列表
 * @endpoint GET /object/:object_id/query/strategy
 */
export const InstanceApi_listInstanceQueryStrategy = (
  object_id: string | number,
  params: InstanceApi_ListInstanceQueryStrategyRequestParams,
  options?: HttpOptions
): Promise<InstanceApi_ListInstanceQueryStrategyResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.ListInstanceQueryStrategy */ http.get<InstanceApi_ListInstanceQueryStrategyResponseBody>(
    `api/gateway/cmdb.instance.ListInstanceQueryStrategy/object/${object_id}/query/strategy`,
    { ...options, params }
  );
