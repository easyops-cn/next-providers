import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface UserAdminApi_SearchAllUsersInfoRequestBody {
  /** e.g.: { name: { $like: '%q%' } }, { $or: [{ name: { $like: '%q%' }}] } */
  query?: Record<string, any>;

  /** e.g.: { instanceId: true, name: true } */
  fields: Record<string, any>;

  /** 按字段排序, 留空默认按照实例ID降序排序(1表示升序, -1表示降序) e.g.: { instanceId: 1 } */
  sort?: Record<string, any>;
}

export interface UserAdminApi_SearchAllUsersInfoResponseBody {
  /** 用户列表 */
  list?: Record<string, any>[];
}

/**
 * @description 搜索所有用户信息列表
 * @endpoint POST /api/v1/users/all
 */
export const UserAdminApi_searchAllUsersInfo = async (
  data: UserAdminApi_SearchAllUsersInfoRequestBody,
  options?: HttpOptions
): Promise<UserAdminApi_SearchAllUsersInfoResponseBody> =>
  /**! @contract easyops.api.user_service.user_admin.SearchAllUsersInfo@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<UserAdminApi_SearchAllUsersInfoResponseBody>
    >("api/gateway/logic.user_service/api/v1/users/all", data, options)
  ).data;
