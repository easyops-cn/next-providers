import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelMicroAppContainer,
  ModelInstalledMicroApp,
} from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ListMicroAppContainerRequestParams {
  /** 页码 */
  page?: number;

  /** 每页大小 */
  page_size?: number;
}

export interface ListMicroAppContainerResponseBody {
  /** 小产品桌面列表 */
  list?: (Partial<ModelMicroAppContainer> &
    ListMicroAppContainerResponseBody_list_item)[];

  /** 实例总数 */
  total?: number;

  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;
}

/**
 * @description 获取小产品桌面列表
 * @endpoint GET /api/micro_app/v1/micro_app_container
 */
export const listMicroAppContainer = async (
  params: ListMicroAppContainerRequestParams,
  options?: HttpOptions
): Promise<ListMicroAppContainerResponseBody> =>
  /**! @contract easyops.api.micro_app.micro_app_container.ListMicroAppContainer */ (
    await http.get<ResponseBodyWrapper<ListMicroAppContainerResponseBody>>(
      "api/gateway/micro_app.micro_app_container.ListMicroAppContainer/api/micro_app/v1/micro_app_container",
      { ...options, params }
    )
  ).data;

export interface ListMicroAppContainerResponseBody_list_item {
  /** 小产品列表 */
  INSTALLED_MICRO_APP?: Partial<ModelInstalledMicroApp>[];

  /** 子容器列表 */
  children?: Partial<ModelMicroAppContainer>[];
}
