import { http, HttpOptions } from "@next-core/brick-http";

export interface UserRegisterRequestBody {
  /** name */
  name: string;

  /** is_admin */
  is_admin?: boolean;
}

export interface UserRegisterResponseBody {
  /** 返回码 */
  code?: number;

  /** 结果信息 */
  msg?: string;
}

/**
 * @description user注册接口
 * @endpoint POST /api/v2/permission/register_user
 */
export const userRegister = (
  data: UserRegisterRequestBody,
  options?: HttpOptions
): Promise<UserRegisterResponseBody> =>
  http.post<UserRegisterResponseBody>(
    "api/gateway/permission.permission.UserRegister/api/v2/permission/register_user",
    data,
    options
  );
