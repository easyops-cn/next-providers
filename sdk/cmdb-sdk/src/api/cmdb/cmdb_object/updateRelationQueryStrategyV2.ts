import { http, HttpOptions } from "@next-core/brick-http";
import { ModelRelationQueryStrategyV2 } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

/** 策略数据 */
export interface CmdbObjectApi_UpdateRelationQueryStrategyV2RequestBody {
  /** 策略ID(可以自定义, 不给定后台会默认生成) */
  id?: string;

  /** v3(精确查询)或v4(全量查询字段) */
  byPath?: string;

  /** 策略名称 */
  name?: string;

  /** 策略类型(org 或者 user) */
  type?: string;

  /** 策略内容(包含查询条件和返回的字段, 不指定返回的字段则默认返回name字段, alias ${objectId}.name) */
  path_list?: Record<string, any>[];

  /** 访问白名单 */
  readAuthorizers?: string[];

  /** 修改白名单 */
  updateAuthorizers?: string[];

  /** 删除白名单 */
  deleteAuthorizers?: string[];
}

export type CmdbObjectApi_UpdateRelationQueryStrategyV2ResponseBody = Partial<ModelRelationQueryStrategyV2>;

/**
 * @description 更新查询策略v2
 * @endpoint PUT /v2/object/:object_id/relation_query_strategy/:id
 */
export const CmdbObjectApi_updateRelationQueryStrategyV2 = async (
  object_id: string | number,
  id: string | number,
  data: CmdbObjectApi_UpdateRelationQueryStrategyV2RequestBody,
  options?: HttpOptions
): Promise<CmdbObjectApi_UpdateRelationQueryStrategyV2ResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.UpdateRelationQueryStrategyV2 */ (
    await http.put<
      ResponseBodyWrapper<CmdbObjectApi_UpdateRelationQueryStrategyV2ResponseBody>
    >(
      `api/gateway/cmdb.cmdb_object.UpdateRelationQueryStrategyV2/v2/object/${object_id}/relation_query_strategy/${id}`,
      data,
      options
    )
  ).data;
