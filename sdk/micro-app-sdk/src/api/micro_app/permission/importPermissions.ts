import { http, HttpOptions } from "@next-core/brick-http";
import { ModelPermission } from "../../../model/permission";

export interface PermissionApi_ImportPermissionsRequestBody {
  /** 权限点列表 */
  permissionList?: Partial<ModelPermission>[];
}

/**
 * @description 导入小产品权限点（只能导入一个小产品的权限点）
 * @endpoint POST /api/micro_app/v1/permission/import
 */
export const PermissionApi_importPermissions = (
  data: PermissionApi_ImportPermissionsRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.permission.ImportPermissions */ http.post<void>(
    "api/gateway/micro_app.permission.ImportPermissions/api/micro_app/v1/permission/import",
    data,
    options
  );
