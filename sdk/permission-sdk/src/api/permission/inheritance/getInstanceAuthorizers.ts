import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InheritanceApi_GetInstanceAuthorizersRequestParams {
  /** 筛选字段,用逗号分隔,不支持 * */
  fields: string;
}

export type InheritanceApi_GetInstanceAuthorizersResponseBody = Record<
  string,
  any
>;

/**
 * @description 获取实例的白名单
 * @endpoint GET /object/:objectId/instance/:instanceId/authorizers
 */
export const InheritanceApi_getInstanceAuthorizers = async (
  objectId: string | number,
  instanceId: string | number,
  params: InheritanceApi_GetInstanceAuthorizersRequestParams,
  options?: HttpOptions
): Promise<InheritanceApi_GetInstanceAuthorizersResponseBody> =>
  /**! @contract easyops.api.permission.inheritance.GetInstanceAuthorizers */ (
    await http.get<
      ResponseBodyWrapper<InheritanceApi_GetInstanceAuthorizersResponseBody>
    >(
      `api/gateway/permission.inheritance.GetInstanceAuthorizers/object/${objectId}/instance/${instanceId}/authorizers`,
      { ...options, params }
    )
  ).data;
