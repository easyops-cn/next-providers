import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface PermissionApi_UpdatePermissionBatchRequestBody {
  /** 实例ID列表 */
  ids: string[];

  /** updateAthorizers, deleteAuthorizers, readAuthorizers, operateAuthorizers中的一个或多个 */
  fields: (
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

export interface PermissionApi_UpdatePermissionBatchResponseBody {
  /** 没有权限更新的实例列表 */
  noAuthorizedList?: Record<string, any>[];
}

/**
 * @description 批量修改实例权限，供LaunchPad管理使用
 * @endpoint PUT /api/micro_app/v1/permission/:objectId/instances/_batch
 */
export const PermissionApi_updatePermissionBatch = async (
  objectId: string | number,
  data: PermissionApi_UpdatePermissionBatchRequestBody,
  options?: HttpOptions
): Promise<PermissionApi_UpdatePermissionBatchResponseBody> =>
  /**! @contract easyops.api.micro_app.permission.UpdatePermissionBatch@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<PermissionApi_UpdatePermissionBatchResponseBody>
    >(
      `api/gateway/micro_app.permission.UpdatePermissionBatch/api/micro_app/v1/permission/${objectId}/instances/_batch`,
      data,
      options
    )
  ).data;
