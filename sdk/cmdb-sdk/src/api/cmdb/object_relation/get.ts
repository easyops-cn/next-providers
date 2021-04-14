import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectRelation } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export type GetResponseBody = Partial<ModelObjectRelation>;

/**
 * @description 获取单个模型关系
 * @endpoint GET /object_relation/:relation_id
 */
export const get = async (
  relation_id: string | number,
  options?: HttpOptions
): Promise<GetResponseBody> =>
  /**! @contract easyops.api.cmdb.object_relation.Get */ (
    await http.get<ResponseBodyWrapper<GetResponseBody>>(
      `api/gateway/cmdb.object_relation.Get/object_relation/${relation_id}`,
      options
    )
  ).data;
