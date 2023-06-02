import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface DatabaseApi_ListV1ResponseItem {
  /** database id */
  id?: number;
}

export type DatabaseApi_ListV1ResponseBody =
  ResponseListWrapper<DatabaseApi_ListV1ResponseItem>;

/**
 * @description 获取database列表
 * @endpoint LIST /v1/database
 */
export const DatabaseApi_listV1 = async (
  options?: HttpOptions
): Promise<DatabaseApi_ListV1ResponseBody> =>
  /**! @contract easyops.api.cmdb.database.ListV1@1.0.0 */ (
    await http.get<ResponseBodyWrapper<DatabaseApi_ListV1ResponseBody>>(
      "api/gateway/cmdb.database.ListV1/v1/database",
      options
    )
  ).data;
