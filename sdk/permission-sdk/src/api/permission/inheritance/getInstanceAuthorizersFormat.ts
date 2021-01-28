import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetInstanceAuthorizersFormatRequestParams {
  /** 白名单名称，多个用,分隔 */
  authorizersKeys: string;

  /** 额外返回实例字段 */
  fields?: string;
}

export interface GetInstanceAuthorizersFormatResponseBody {
  /** 实例白名单 */
  authorizers?: GetInstanceAuthorizersFormatResponseBody_authorizers_item[];

  /** 实例数据 */
  instanceData?: Record<string, any>;
}

/**
 * @description 获取实例的白名单,返回数据结构化
 * @endpoint GET /object/:objectId/instance/:instanceId/authorizers_format
 */
export const getInstanceAuthorizersFormat = async (
  objectId: string | number,
  instanceId: string | number,
  params: GetInstanceAuthorizersFormatRequestParams,
  options?: HttpOptions
): Promise<GetInstanceAuthorizersFormatResponseBody> =>
  (
    await http.get<
      ResponseBodyWrapper<GetInstanceAuthorizersFormatResponseBody>
    >(
      `api/gateway/permission.inheritance.GetInstanceAuthorizersFormat/object/${objectId}/instance/${instanceId}/authorizers_format`,
      { ...options, params }
    )
  ).data;

export interface GetInstanceAuthorizersFormatResponseBody_authorizers_item {
  /** 白名单名称 */
  authorizersKey?: string;

  /** 实例原始白名单 */
  originAuthorizers?: string[];

  /** 关联白名单 */
  relateAuthorizers?: string[];

  /** 是否有关联到起点模型 */
  relateToSource?: boolean;

  /** 只有管理员拥有权限 */
  onlyAdmin?: boolean;
}
