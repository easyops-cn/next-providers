import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface UserAdminApi_UpdateUserAvatarRequestBody {
  /** avatar file */
  avatarFile?: File;

  /** 上传的头像文件是否是自带头像 */
  isSystemAvatar?: boolean;
}

export interface UserAdminApi_UpdateUserAvatarResponseBody {
  /** bucket */
  bucketName?: string;

  /** object name */
  objectName?: string;
}

/**
 * @description 更新用户头像
 * @endpoint PUT /api/v1/users/avatar/:name
 */
export const UserAdminApi_updateUserAvatar = async (
  name: string | number,
  data: UserAdminApi_UpdateUserAvatarRequestBody,
  options?: HttpOptions
): Promise<UserAdminApi_UpdateUserAvatarResponseBody> => {
  /**! @contract easyops.api.user_service.user_admin.UpdateUserAvatar@1.1.0 */ const _formData =
    new FormData();
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      const k = `${key}[]`;
      value.forEach((v) => {
        _formData.append(k, v);
      });
    } else {
      _formData.append(key, value);
    }
  }
  return (
    await http.put<
      ResponseBodyWrapper<UserAdminApi_UpdateUserAvatarResponseBody>
    >(
      `api/gateway/logic.user_service/api/v1/users/avatar/${name}`,
      _formData,
      options
    )
  ).data;
};
