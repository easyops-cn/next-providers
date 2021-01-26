import { http, HttpOptions } from "@next-core/brick-http";
import { ModelPermission } from "../../../model/permission";

export interface ImportPermissionsRequestBody {
  /** 权限点列表 */
  permissionList?: Partial<ModelPermission>[];
}

/**
 * @description 导入小产品权限点（只能导入一个小产品的权限点）
 * @endpoint POST /api/micro_app/v1/permission/import
 */
export const importPermissions = (
  data: ImportPermissionsRequestBody,
  options?: HttpOptions
): Promise<void> =>
  http.post<void>(
    "api/gateway/micro_app.permission.ImportPermissions/api/micro_app/v1/permission/import",
    data,
    options
  );
