import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ListGroupsIdNameRequestParams {
  /** 用户id, 传此参数返回用户所在的所有用户组, 默认返回所有用户组 */
  user_id?: string;
}

export type ListGroupsIdNameResponseBody = Record<string, any>;

/**
 * @description 获取用户Id与name映射
 * @endpoint GET /api/v1/groups/id_map_name
 */
export const listGroupsIdName = async (
  params: ListGroupsIdNameRequestParams,
  options?: HttpOptions
): Promise<ListGroupsIdNameResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<ListGroupsIdNameResponseBody>>(
      "api/gateway/user_service.user_admin.ListGroupsIdName/api/v1/groups/id_map_name",
      { ...options, params }
    )
  ).data;
