import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface SearchAllUsersInfoRequestBody {
  /** e.g.: { name: { $like: '%q%' } }, { $or: [{ name: { $like: '%q%' }}] } */
  query?: Record<string, any>;

  /** e.g.: { instanceId: true, name: true } */
  fields: Record<string, any>;

  /** 按字段排序, 留空默认按照实例ID降序排序(1表示升序, -1表示降序) e.g.: { instanceId: 1 } */
  sort?: Record<string, any>;
}

export interface SearchAllUsersInfoResponseBody {
  /** 用户列表 */
  list?: Record<string, any>[];
}

/**
 * @description 搜索所有用户信息列表
 * @endpoint POST /api/v1/users/all
 */
export const searchAllUsersInfo = async (
  data: SearchAllUsersInfoRequestBody,
  options?: HttpOptions
): Promise<SearchAllUsersInfoResponseBody> =>
  /**! @contract easyops.api.user_service.user_admin.SearchAllUsersInfo */ (
    await http.post<ResponseBodyWrapper<SearchAllUsersInfoResponseBody>>(
      "api/gateway/user_service.user_admin.SearchAllUsersInfo/api/v1/users/all",
      data,
      options
    )
  ).data;
