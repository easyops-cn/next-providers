import { http, HttpOptions } from "@next-core/brick-http";

export interface SetPermissionDisableStatusRequestBody {
  /** 是否禁用, 默认为false */
  disable?: boolean;
}

/**
 * @description 启用/禁用权限点
 * @endpoint PUT /api/v1/set-permission-disable-status/:action
 */
export const setPermissionDisableStatus = (
  action: string | number,
  data: SetPermissionDisableStatusRequestBody,
  options?: HttpOptions
): Promise<void> =>
  http.put<void>(
    `api/gateway/permission.permission.SetPermissionDisableStatus/api/v1/set-permission-disable-status/${action}`,
    data,
    options
  );
