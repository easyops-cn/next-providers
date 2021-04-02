import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelObjectAttr,
  ModelObjectRelation,
  ModelObjectIndex,
} from "../../../model/cmdb";

/** 模型 */
export interface CheckModelRequestBody {
  /** model instanceId */
  instanceId?: string;

  /** 名称 */
  name?: string;

  /** objectId */
  objectId?: string;

  /** attrList */
  attrList?: (Partial<ModelObjectAttr> & CheckModelRequestBody_attrList_item)[];

  /** relation_list */
  relation_list?: (Partial<ModelObjectRelation> &
    CheckModelRequestBody_relation_list_item)[];

  /** indexList */
  indexList?: (Partial<ModelObjectIndex> &
    CheckModelRequestBody_indexList_item)[];

  /** 命名空间 */
  space?: CheckModelRequestBody_space;
}

/**
 * @description 校验模型
 * @endpoint POST /api/v1/model/check
 */
export const checkModel = (
  data: CheckModelRequestBody,
  options?: HttpOptions
): Promise<void> =>
  http.post<void>(
    "api/gateway/next_builder.model.CheckModel/api/v1/model/check",
    data,
    options
  );

export interface CheckModelRequestBody_attrList_item {
  /** attr instanceId */
  instanceId?: string;
}

export interface CheckModelRequestBody_relation_list_item {
  /** relation instanceId */
  instanceId?: string;
}

export interface CheckModelRequestBody_indexList_item {
  /** index instanceId */
  instanceId?: string;
}

export interface CheckModelRequestBody_space {
  /** 命名空间instanceId */
  instanceId?: string;
}
