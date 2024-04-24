import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceRelationApi_RelationExistRequestBody {
  /** 模型Id */
  leftObjectId: string;

  /** 模型Id */
  rightObjectId: string;

  /** 实例Id */
  leftInstanceId: string;

  /** 实例Id */
  rightInstanceId: string;
}

export interface InstanceRelationApi_RelationExistResponseBody {
  /** 是否存在 */
  isExist?: boolean;

  /** 关系边id */
  sideId?: string;
}

/**
 * @description 判断实例之间关系是否存在
 * @endpoint POST /object/relation/exist
 */
export const InstanceRelationApi_relationExist = async (
  data: InstanceRelationApi_RelationExistRequestBody,
  options?: HttpOptions
): Promise<InstanceRelationApi_RelationExistResponseBody> =>
  /**! @contract easyops.api.cmdb.instance_relation.RelationExist@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstanceRelationApi_RelationExistResponseBody>
    >(
      "api/gateway/cmdb.instance_relation.RelationExist/object/relation/exist",
      data,
      options
    )
  ).data;
