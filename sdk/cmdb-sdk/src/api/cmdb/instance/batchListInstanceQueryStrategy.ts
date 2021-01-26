import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstanceQueryStrategy } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface BatchListInstanceQueryStrategyRequestParams {
  /** 多个模型ID，以逗号分隔 */
  object_ids?: string;

  /** 策略类型 */
  type?: string;

  /** 策略名称(模糊匹配) */
  name?: string;
}

export interface BatchListInstanceQueryStrategyResponseBody {
  /** 各模型的实例查询策略数据 */
  strategy_data?: BatchListInstanceQueryStrategyResponseBody_strategy_data_item[];
}

/**
 * @description 批量获取实例查询策略列表
 * @endpoint GET /batch/object/query/strategy
 */
export const batchListInstanceQueryStrategy = async (
  params: BatchListInstanceQueryStrategyRequestParams,
  options?: HttpOptions
): Promise<BatchListInstanceQueryStrategyResponseBody> =>
  (
    await http.get<
      ResponseBodyWrapper<BatchListInstanceQueryStrategyResponseBody>
    >(
      "api/gateway/cmdb.instance.BatchListInstanceQueryStrategy/batch/object/query/strategy",
      { ...options, params }
    )
  ).data;

export interface BatchListInstanceQueryStrategyResponseBody_strategy_data_item {
  /** 模型ID */
  object_id?: string;

  /** 策略列表 */
  strategy_list?: Partial<ModelInstanceQueryStrategy>[];
}
