import { http, HttpOptions } from "@next-core/brick-http";
import { ModelRelationQueryStrategyV2 } from "../../../model/cmdb";

export interface CmdbObjectApi_ListRelationQueryStrategyV2RequestRequestParams {
  /** 策略类型 */
  type?: string;
}

export interface CmdbObjectApi_ListRelationQueryStrategyV2RequestResponseBody {
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
export const CmdbObjectApi_listRelationQueryStrategyV2Request = (
  object_id: string | number,
  params: CmdbObjectApi_ListRelationQueryStrategyV2RequestRequestParams,
  options?: HttpOptions
): Promise<CmdbObjectApi_ListRelationQueryStrategyV2RequestResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.ListRelationQueryStrategyV2Request@2.0.0 */ http.get<CmdbObjectApi_ListRelationQueryStrategyV2RequestResponseBody>(
    `api/gateway/cmdb.cmdb_object.ListRelationQueryStrategyV2Request/v2/object/${object_id}/relation_query_strategy`,
    { ...options, params }
  );
