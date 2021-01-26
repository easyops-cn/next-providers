import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface UpdatePermissionBatchRequestBody {
  /** 实例ID列表 */
  ids: string[];

  /** 权限字段 */
  field?: string;

  /** updateAthorizers, deleteAuthorizers, readAuthorizers, operateAuthorizers中的一个或多个 */
  fields?: (
    | "updateAthorizers"
    | "deleteAuthorizers"
    | "readAuthorizers"
    | "operateAuthorizers"
  )[];

  /** 修改操作的类型(overwrite, append, pull)(在枚举之外的操作类型会报错) */
  method: "overwrite" | "append" | "pull";

  /** 用户,用户组列表 */
  list: string[];
}

export interface UpdatePermissionBatchResponseBody {
  /** 没有权限更新的实例列表 */
  noAuthorizedList?: Record<string, any>[];
}

/**
 * @description 批量修改实例权限
 * @endpoint PUT /permission/:objectId/instances/_batch
 */
export const updatePermissionBatch = async (
  objectId: string | number,
  data: UpdatePermissionBatchRequestBody,
  options?: HttpOptions
): Promise<UpdatePermissionBatchResponseBody> =>
  (
    await http.put<ResponseBodyWrapper<UpdatePermissionBatchResponseBody>>(
      `api/gateway/cmdb.instance.UpdatePermissionBatch/permission/${objectId}/instances/_batch`,
      data,
      options
    )
  ).data;
