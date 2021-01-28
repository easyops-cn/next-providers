import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetInstanceAuthorizersRequestParams {
  /** 筛选字段,用逗号分隔,不支持 * */
  fields: string;
}

export type GetInstanceAuthorizersResponseBody = Record<string, any>;

/**
 * @description 获取实例的白名单
 * @endpoint GET /object/:objectId/instance/:instanceId/authorizers
 */
export const getInstanceAuthorizers = async (
  objectId: string | number,
  instanceId: string | number,
  params: GetInstanceAuthorizersRequestParams,
  options?: HttpOptions
): Promise<GetInstanceAuthorizersResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<GetInstanceAuthorizersResponseBody>>(
      `api/gateway/permission.inheritance.GetInstanceAuthorizers/object/${objectId}/instance/${instanceId}/authorizers`,
      { ...options, params }
    )
  ).data;
