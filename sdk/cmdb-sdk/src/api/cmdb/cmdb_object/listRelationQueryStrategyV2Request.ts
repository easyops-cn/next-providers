import { http, HttpOptions } from "@next-core/brick-http";
import { ModelRelationQueryStrategyV2 } from "../../../model/cmdb";

export interface ListRelationQueryStrategyV2RequestRequestParams {
  /** 策略类型 */
  type?: string;
}

export interface ListRelationQueryStrategyV2RequestResponseBody {
  /** 返回码 */
  code?: number;

  /** 页码 */
  error?: string;

  /** 返回信息 */
  message?: string;

  /** 数据 */
  data?: Partial<ModelRelationQueryStrategyV2>[];
}

/**
 * @description 获取查询策略v2
 * @endpoint GET /v2/object/:object_id/relation_query_strategy
 */
export const listRelationQueryStrategyV2Request = (
  object_id: string | number,
  params: ListRelationQueryStrategyV2RequestRequestParams,
  options?: HttpOptions
): Promise<ListRelationQueryStrategyV2RequestResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.ListRelationQueryStrategyV2Request */ http.get<ListRelationQueryStrategyV2RequestResponseBody>(
    `api/gateway/cmdb.cmdb_object.ListRelationQueryStrategyV2Request/v2/object/${object_id}/relation_query_strategy`,
    { ...options, params }
  );
