import { http, HttpOptions } from "@next-core/brick-http";
import { ModelRelationQueryStrategyV2 } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface BatchListRelationQueryStrategyV2RequestRequestParams {
  /** 多个模型ID，以逗号分隔 */
  object_ids?: string;

  /** 策略类型 */
  type?: string;

  /** 策略名称(模糊匹配) */
  name?: string;
}

export interface BatchListRelationQueryStrategyV2RequestResponseBody {
  /** 各模型策略数据 */
  strategy_data?: BatchListRelationQueryStrategyV2RequestResponseBody_strategy_data_item[];
}

/**
 * @description 批量获取模型查询策略v2
 * @endpoint GET /v2/batch/object/relation_query_strategy
 */
export const batchListRelationQueryStrategyV2Request = async (
  params: BatchListRelationQueryStrategyV2RequestRequestParams,
  options?: HttpOptions
): Promise<BatchListRelationQueryStrategyV2RequestResponseBody> =>
  (
    await http.get<
      ResponseBodyWrapper<BatchListRelationQueryStrategyV2RequestResponseBody>
    >(
      "api/gateway/cmdb.cmdb_object.BatchListRelationQueryStrategyV2Request/v2/batch/object/relation_query_strategy",
      { ...options, params }
    )
  ).data;

export interface BatchListRelationQueryStrategyV2RequestResponseBody_strategy_data_item {
  /** 模型ID */
  object_id?: string;

  /** 策略列表 */
  strategy_list?: Partial<ModelRelationQueryStrategyV2>[];
}
