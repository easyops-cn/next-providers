import { http, HttpOptions } from "@next-core/brick-http";

export interface CmdbObjectApi_GetObjectAuthorizersResponseBody {
  /** 返回码 */
  code: number;

  /** 错误信息 */
  error: string;

  /** 返回消息 */
  message: string;

  /** 列表 */
  data: CmdbObjectApi_GetObjectAuthorizersResponseBody_data_item[];
}

/**
 * @description 获取模型的白名单属性
 * @endpoint GET /object/:objectId/authorizers
 */
export const CmdbObjectApi_getObjectAuthorizers = (
  objectId: string | number,
  options?: HttpOptions
): Promise<CmdbObjectApi_GetObjectAuthorizersResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.GetObjectAuthorizers */ http.get<CmdbObjectApi_GetObjectAuthorizersResponseBody>(
    `api/gateway/cmdb.cmdb_object.GetObjectAuthorizers/object/${objectId}/authorizers`,
    options
  );

export interface CmdbObjectApi_GetObjectAuthorizersResponseBody_data_item {
  /** 白名单key */
  authorizersKey?: string;

  /** 对应权限点action */
  action?: string;

  /** 白名单描述 */
  remark?: string;
}
