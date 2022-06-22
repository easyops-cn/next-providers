import { http, HttpOptions } from "@next-core/brick-http";

export interface InstalledMicroAppApi_UpdateInstalledMicroAppContainerRequestBody {
  /** 小产品所属桌面Id */
  containerId: string;

  /** 容器类型， 自定义容器or默认容器 */
  containerType: string;

  /** 微应用在容器中的排序 */
  position?: number;
}

/**
 * @description 更新小产品与桌面关系
 * @endpoint PUT /api/micro_app/v1/installed_micro_app/:app_id/container
 */
export const InstalledMicroAppApi_updateInstalledMicroAppContainer = (
  app_id: string | number,
  data: InstalledMicroAppApi_UpdateInstalledMicroAppContainerRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.UpdateInstalledMicroAppContainer@1.0.0 */ http.put<void>(
    `api/gateway/micro_app.installed_micro_app.UpdateInstalledMicroAppContainer/api/micro_app/v1/installed_micro_app/${app_id}/container`,
    data,
    options
  );
