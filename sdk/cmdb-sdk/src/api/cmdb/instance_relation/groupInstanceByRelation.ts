import { http, HttpOptions } from "@next-core/brick-http";
import { ModelGroupInstanceByRelationFunc } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceRelationApi_GroupInstanceByRelationRequestBody {
  /** 查询条件,与[实例搜索接口]的query字段说明一致 */
  query?: Record<string, any>;

  /** 聚合属性id（支持多字段，包括属性和单个关系） */
  group_fields: string[];

  /** 操作列表,对某字段进行,sum, max... */
  funcs: Partial<ModelGroupInstanceByRelationFunc>[];
}

export interface InstanceRelationApi_GroupInstanceByRelationResponseBody {
  /** 数据列表，将group_field和funcs.alias的值作为key，group_value和funcs.value的值作为value */
  list: Record<string, any>[];
}

/**
 * @description 通过关系的实例聚合接口, 支持多字段聚合，返回结果为平铺的实例列表
 * @endpoint POST /relation/:relation_id/instance/group
 */
export const InstanceRelationApi_groupInstanceByRelation = async (
  relation_id: string | number,
  data: InstanceRelationApi_GroupInstanceByRelationRequestBody,
  options?: HttpOptions
): Promise<InstanceRelationApi_GroupInstanceByRelationResponseBody> =>
  /**! @contract easyops.api.cmdb.instance_relation.GroupInstanceByRelation@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstanceRelationApi_GroupInstanceByRelationResponseBody>
    >(
      `api/gateway/cmdb.instance_relation.GroupInstanceByRelation/relation/${relation_id}/instance/group`,
      data,
      options
    )
  ).data;
