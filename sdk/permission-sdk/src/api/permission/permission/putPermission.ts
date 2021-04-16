import { http, HttpOptions } from "@next-core/brick-http";
import { ModelPermission } from "../../../model/permission";
import { ResponseBodyWrapper } from "../../../wrapper";

export type PermissionApi_PutPermissionRequestBody = Partial<ModelPermission> &
  ModelPermission_partial;

export interface PermissionApi_PutPermissionResponseBody {
  /** 修改权限点数量 */
  count?: number;
}

/**
 * @description 修改权限配置
 * @endpoint PUT /api/v1/permission/:id
 */
export const PermissionApi_putPermission = async (
  id: string | number,
  data: PermissionApi_PutPermissionRequestBody,
  options?: HttpOptions
): Promise<PermissionApi_PutPermissionResponseBody> =>
  /**! @contract easyops.api.permission.permission.PutPermission */ (
    await http.put<
      ResponseBodyWrapper<PermissionApi_PutPermissionResponseBody>
    >(
      `api/gateway/permission.permission.PutPermission/api/v1/permission/${id}`,
      data,
      options
    )
  ).data;

export interface ModelPermission_partial {
  /** 权限点id */
  id: string;
}
