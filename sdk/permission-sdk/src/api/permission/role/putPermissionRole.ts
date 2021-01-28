import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface PutPermissionRoleRequestBody {
  /** 角色名 */
  role: string;
}

export interface PutPermissionRoleResponseBody {
  /** 修改用户数量 */
  count?: number;
}

/**
 * @description 修改角色名
 * @endpoint PUT /api/v1/permission_role/rename_role/:id
 */
export const putPermissionRole = async (
  id: string | number,
  data: PutPermissionRoleRequestBody,
  options?: HttpOptions
): Promise<PutPermissionRoleResponseBody> =>
  (
    await http.put<ResponseBodyWrapper<PutPermissionRoleResponseBody>>(
      `api/gateway/permission.role.PutPermissionRole/api/v1/permission_role/rename_role/${id}`,
      data,
      options
    )
  ).data;
