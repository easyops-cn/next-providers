import { http, HttpOptions } from "@next-core/brick-http";
import { ModelUpdateByQueryResult } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface UpdateByQueryRequestBody {
  /** e.g.: { name: { $like: '%q%' } }, { $or: [{ name: { $like: '%q%' }}] } */
  query?: Record<string, any>;

  /** 要更新的数据 */
  data?: Record<string, any>;
}

export interface UpdateByQueryResponseBody {
  /** 实例更新成功结果 */
  successResult?: Partial<ModelUpdateByQueryResult>[];

  /** 实例更新失败结果 */
  failResult?: Partial<ModelUpdateByQueryResult>[];

  /** 查询实例总数 */
  total?: number;

  /** 更新成功总数 */
  successTotal?: number;

  /** 更新失败总数 */
  failTotal?: number;
}

/**
 * @description 根据查询条件更新实例
 * @endpoint POST /object/:object_id/instance/update_by_query
 */
export const updateByQuery = async (
  object_id: string | number,
  data: UpdateByQueryRequestBody,
  options?: HttpOptions
): Promise<UpdateByQueryResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.UpdateByQuery */ (
    await http.post<ResponseBodyWrapper<UpdateByQueryResponseBody>>(
      `api/gateway/cmdb.instance.UpdateByQuery/object/${object_id}/instance/update_by_query`,
      data,
      options
    )
  ).data;
