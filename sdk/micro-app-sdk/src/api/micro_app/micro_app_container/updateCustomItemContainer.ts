import { http, HttpOptions } from "@next-core/brick-http";

export interface MicroAppContainerApi_UpdateCustomItemContainerRequestBody {
  /** 桌面容器实例ID */
  containerId?: string;
}

/**
 * @description 修改自定义项所在桌面容器
 * @endpoint PUT /api/micro_app/v1/custom_items/:instanceId/container
 */
export const MicroAppContainerApi_updateCustomItemContainer = (
  instanceId: string | number,
  data: MicroAppContainerApi_UpdateCustomItemContainerRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.micro_app_container.UpdateCustomItemContainer@1.0.0 */ http.put<void>(
    `api/gateway/micro_app.micro_app_container.UpdateCustomItemContainer/api/micro_app/v1/custom_items/${instanceId}/container`,
    data,
    options
  );
