import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstanceQueryStrategy } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_BatchListInstanceQueryStrategyRequestParams {
  /** 多个模型ID，以逗号分隔 */
  object_ids?: string;

  /** 策略类型 */
  type?: string;

  /** 策略名称(模糊匹配) */
  name?: string;
}

export interface InstanceApi_BatchListInstanceQueryStrategyResponseBody {
  /** 各模型的实例查询策略数据 */
  strategy_data?: InstanceApi_BatchListInstanceQueryStrategyResponseBody_strategy_data_item[];
}

/**
 * @description 批量获取实例查询策略列表
 * @endpoint GET /batch/object/query/strategy
 */
export const InstanceApi_batchListInstanceQueryStrategy = async (
  params: InstanceApi_BatchListInstanceQueryStrategyRequestParams,
  options?: HttpOptions
): Promise<InstanceApi_BatchListInstanceQueryStrategyResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.BatchListInstanceQueryStrategy@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<InstanceApi_BatchListInstanceQueryStrategyResponseBody>
    >(
      "api/gateway/cmdb.instance.BatchListInstanceQueryStrategy/batch/object/query/strategy",
      { ...options, params }
    )
  ).data;

export interface InstanceApi_BatchListInstanceQueryStrategyResponseBody_strategy_data_item {
  /** 模型ID */
  object_id?: string;

  /** 策略列表 */
  strategy_list?: Partial<ModelInstanceQueryStrategy>[];
}
