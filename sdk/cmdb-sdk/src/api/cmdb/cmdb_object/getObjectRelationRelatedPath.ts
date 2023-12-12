import { http, HttpOptions } from "@next-core/brick-http";
import { ModelStrategyPathNodeBasic } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CmdbObjectApi_GetObjectRelationRelatedPathRequestBody {
  /** 模型数组，数组顺序就是层级 */
  objectDefines: CmdbObjectApi_GetObjectRelationRelatedPathRequestBody_objectDefines_item[];
}

export interface CmdbObjectApi_GetObjectRelationRelatedPathResponseBody {
  /** 路径信息 */
  data?: CmdbObjectApi_GetObjectRelationRelatedPathResponseBody_data;
}

/**
 * @description 拼接返回资源模型路径
 * @endpoint POST /object_relation_related_path
 */
export const CmdbObjectApi_getObjectRelationRelatedPath = async (
  data: CmdbObjectApi_GetObjectRelationRelatedPathRequestBody,
  options?: HttpOptions
): Promise<CmdbObjectApi_GetObjectRelationRelatedPathResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.GetObjectRelationRelatedPath@1.0.1 */ (
    await http.post<
      ResponseBodyWrapper<CmdbObjectApi_GetObjectRelationRelatedPathResponseBody>
    >(
      "api/gateway/cmdb.cmdb_object.GetObjectRelationRelatedPath/object_relation_related_path",
      data,
      options
    )
  ).data;

export interface CmdbObjectApi_GetObjectRelationRelatedPathRequestBody_objectDefines_item {
  /** 模型id */
  objectId?: string;

  /** 对端模型的关系名称id */
  relationSideId?: string;

  /** 本模型与下一跳模型的关系id，数组终点模型可不填，如果填了则以关系id对端模型为终点。 */
  relationId?: string;
}

export interface CmdbObjectApi_GetObjectRelationRelatedPathResponseBody_data {
  /** 自动生成哈希id */
  id?: string;

  /** 路径描述 */
  label?: string;

  /** query条件key */
  reverseQueryKey?: string;

  /** 路径 */
  path?: Partial<ModelStrategyPathNodeBasic>[];
}
