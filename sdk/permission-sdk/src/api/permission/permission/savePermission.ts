import { http, HttpOptions } from "@next-core/brick-http";
import { ModelPermission } from "../../../model/permission";

export type PermissionApi_SavePermissionRequestBody = Partial<ModelPermission> &
  ModelPermission_partial_2;

export interface PermissionApi_SavePermissionResponseBody {
  /** 返回码 */
  code?: number;

  /** 结果信息 */
  msg?: string;

  /** 数据 */
  data?: PermissionApi_SavePermissionResponseBody_data;
}

/**
 * @description 保存权限配置(已存在权限点则更新)
 * @endpoint POST /api/v1/permission/save
 */
export const PermissionApi_savePermission = (
  data: PermissionApi_SavePermissionRequestBody,
  options?: HttpOptions
): Promise<PermissionApi_SavePermissionResponseBody> =>
  /**! @contract easyops.api.permission.permission.SavePermission@1.0.0 */ http.post<PermissionApi_SavePermissionResponseBody>(
    "api/gateway/permission.permission.SavePermission/api/v1/permission/save",
    data,
    options
  );

export interface ModelPermission_partial_2 {
  /** 需要鉴权的动作, 全局唯一 */
  action: string;

  /** 系统名 */
  system: string;

  /** 权限角色 */
  roles: string[];

  /** 权限备注 */
  remark: string;
}

export interface PermissionApi_SavePermissionResponseBody_data {
  /** 权限点id */
  id?: string;
}
