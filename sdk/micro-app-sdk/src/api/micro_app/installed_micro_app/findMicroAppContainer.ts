import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstalledMicroAppApi_FindMicroAppContainerRequestBody {
  /** 小产品id */
  app_id?: string;
}

export interface InstalledMicroAppApi_FindMicroAppContainerResponseBody {
  /** 小产品应该关联的容器 */
  containerId?: string;
}

/**
 * @description 升级时查找微应用应该关联的容器
 * @endpoint POST /api/micro_app/v1/installed_micro_app/find_container
 */
export const InstalledMicroAppApi_findMicroAppContainer = async (
  data: InstalledMicroAppApi_FindMicroAppContainerRequestBody,
  options?: HttpOptions
): Promise<InstalledMicroAppApi_FindMicroAppContainerResponseBody> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.FindMicroAppContainer@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstalledMicroAppApi_FindMicroAppContainerResponseBody>
    >(
      "api/gateway/micro_app.installed_micro_app.FindMicroAppContainer/api/micro_app/v1/installed_micro_app/find_container",
      data,
      options
    )
  ).data;
