import { http, HttpOptions } from "@next-core/brick-http";

export interface GetObjectAuthorizersResponseBody {
  /** 返回码 */
  code: number;

  /** 错误信息 */
  error: string;

  /** 返回消息 */
  message: string;

  /** 列表 */
  data: GetObjectAuthorizersResponseBody_data_item[];
}

/**
 * @description 获取模型的白名单属性
 * @endpoint GET /object/:objectId/authorizers
 */
export const getObjectAuthorizers = (
  objectId: string | number,
  options?: HttpOptions
): Promise<GetObjectAuthorizersResponseBody> =>
  http.get<GetObjectAuthorizersResponseBody>(
    `api/gateway/cmdb.cmdb_object.GetObjectAuthorizers/object/${objectId}/authorizers`,
    options
  );

export interface GetObjectAuthorizersResponseBody_data_item {
  /** 白名单key */
  authorizersKey?: string;

  /** 对应权限点action */
  action?: string;

  /** 白名单描述 */
  remark?: string;
}
