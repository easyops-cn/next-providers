import { http, HttpOptions } from "@next-core/brick-http";
import { ModelRelationQueryStrategyV2 } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export type GetRelationQueryStrategyV2ResponseBody = Partial<ModelRelationQueryStrategyV2>;

/**
 * @description 获取单个查询策略v2
 * @endpoint GET /v2/object/:object_id/relation_query_strategy/:id
 */
export const getRelationQueryStrategyV2 = async (
  object_id: string | number,
  id: string | number,
  options?: HttpOptions
): Promise<GetRelationQueryStrategyV2ResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<GetRelationQueryStrategyV2ResponseBody>>(
      `api/gateway/cmdb.cmdb_object.GetRelationQueryStrategyV2/v2/object/${object_id}/relation_query_strategy/${id}`,
      options
    )
  ).data;
