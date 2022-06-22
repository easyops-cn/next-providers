import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstalledMicroApp } from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstalledMicroAppApi_FindMicroAppContainerRequestBody {
  /** 小产品id */
  app_id?: string;

  /** 默认容器 */
  defaultContainer?: ModelInstalledMicroApp["defaultContainer"];

  /** 微应用在容器中的排序 */
  position?: number;
}

export interface InstalledMicroAppApi_FindMicroAppContainerResponseBody {
  /** 小产品应该关联的容器 */
  containerId?: string;

  /** 容器类型， 自定义容器or默认容器 */
  containerType?: string;

  /** 小产品应该关联的容器的instanceId */
  containerInstanceId?: string;

  /** 微应用在容器中的排序 */
  position?: number;
}

/**
 * @description build&push/升级时查找微应用应该关联的容器（容器不存在时， 要创建容器）
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
