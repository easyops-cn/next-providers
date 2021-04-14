import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetMicroAppListResponseBody {
  /** 已安装小产品 */
  installedMicroAppList?: GetMicroAppListResponseBody_installedMicroAppList_item[];
}

/**
 * @description 获取所有拥有权限的小产品
 * @endpoint GET /api/micro_app/v1/permission
 */
export const getMicroAppList = async (
  options?: HttpOptions
): Promise<GetMicroAppListResponseBody> =>
  /**! @contract easyops.api.micro_app.permission.GetMicroAppList */ (
    await http.get<ResponseBodyWrapper<GetMicroAppListResponseBody>>(
      "api/gateway/micro_app.permission.GetMicroAppList/api/micro_app/v1/permission",
      options
    )
  ).data;

export interface GetMicroAppListResponseBody_installedMicroAppList_item {
  /** 小产品名称 */
  name?: string;

  /** 小产品id */
  appId?: string;
}
