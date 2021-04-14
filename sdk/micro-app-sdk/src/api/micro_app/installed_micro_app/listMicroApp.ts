import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelInstalledMicroApp,
  ModelMicroAppContainer,
} from "../../../model/micro_app";
import { ResponseListWrapper, ResponseBodyWrapper } from "../../../wrapper";

export interface ListMicroAppRequestParams {
  /** 页码 */
  page?: number;

  /** 每页大小 */
  page_size?: number;
}

export type ListMicroAppResponseItem = ModelInstalledMicroApp &
  ListMicroAppResponseItem_2;

export type ListMicroAppResponseBody = ResponseListWrapper<ListMicroAppResponseItem>;

/**
 * @description 获取已安装小产品列表
 * @endpoint LIST /api/micro_app/v1/installed_micro_app
 */
export const listMicroApp = async (
  params: ListMicroAppRequestParams,
  options?: HttpOptions
): Promise<ListMicroAppResponseBody> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.ListMicroApp */ (
    await http.get<ResponseBodyWrapper<ListMicroAppResponseBody>>(
      "api/gateway/micro_app.installed_micro_app.ListMicroApp/api/micro_app/v1/installed_micro_app",
      { ...options, params }
    )
  ).data;

export interface ListMicroAppResponseItem_2 {
  /** 小产品关联的桌面信息 */
  container?: Partial<ModelMicroAppContainer>;
}
