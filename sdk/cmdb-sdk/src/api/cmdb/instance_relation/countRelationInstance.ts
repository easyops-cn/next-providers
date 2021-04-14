import { http, HttpOptions } from "@next-core/brick-http";

export interface CountRelationInstanceResponseBody {
  /** 返回码 */
  code: number;

  /** 错误信息 */
  error: string;

  /** 返回消息 */
  message: string;

  /** 总数 */
  data: number;
}

/**
 * @description 统计关系实例数量
 * @endpoint GET /object_relation/:relationId/relation_instance/_count_relation_instance
 */
export const countRelationInstance = (
  relationId: string | number,
  options?: HttpOptions
): Promise<CountRelationInstanceResponseBody> =>
  /**! @contract easyops.api.cmdb.instance_relation.CountRelationInstance */ http.get<CountRelationInstanceResponseBody>(
    `api/gateway/cmdb.instance_relation.CountRelationInstance/object_relation/${relationId}/relation_instance/_count_relation_instance`,
    options
  );
