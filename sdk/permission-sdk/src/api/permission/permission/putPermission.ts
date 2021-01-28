import { http, HttpOptions } from "@next-core/brick-http";
import { ModelPermission } from "../../../model/permission";
import { ResponseBodyWrapper } from "../../../wrapper";

export type PutPermissionRequestBody = Partial<ModelPermission> &
  ModelPermission_partial;

export interface PutPermissionResponseBody {
  /** 修改权限点数量 */
  count?: number;
}

/**
 * @description 修改权限配置
 * @endpoint PUT /api/v1/permission/:id
 */
export const putPermission = async (
  id: string | number,
  data: PutPermissionRequestBody,
  options?: HttpOptions
): Promise<PutPermissionResponseBody> =>
  (
    await http.put<ResponseBodyWrapper<PutPermissionResponseBody>>(
      `api/gateway/permission.permission.PutPermission/api/v1/permission/${id}`,
      data,
      options
    )
  ).data;

export interface ModelPermission_partial {
  /** 权限点id */
  id: string;
}
