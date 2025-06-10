import { http, HttpOptions } from "@next-core/brick-http";

export interface UserAdminApi_CheckUserExistRequestParams {
  /** 用户名或者邮箱 */
  parameter: string;

  /** 校验类型 */
  type: "username" | "email";
}

/**
 * @description 验证用户或者邮箱是否存在
 * @endpoint GET /api/v1/users/user_exist
 */
export const UserAdminApi_checkUserExist = (
  params: UserAdminApi_CheckUserExistRequestParams,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.user_admin.CheckUserExist@1.0.0 */ http.get<void>(
    "api/gateway/logic.user_service/api/v1/users/user_exist",
    { ...options, params }
  );
