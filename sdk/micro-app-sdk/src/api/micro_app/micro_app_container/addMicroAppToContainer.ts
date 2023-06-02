import { http, HttpOptions } from "@next-core/brick-http";

export interface MicroAppContainerApi_AddMicroAppToContainerRequestBody {
  /** 需添加的Micro App的id */
  appIds?: string[];
}

/**
 * @description 为桌面添加微应用
 * @endpoint POST /api/micro_app/v1/micro_app_container/:containerId/add_micro_app
 */
export const MicroAppContainerApi_addMicroAppToContainer = (
  containerId: string | number,
  data: MicroAppContainerApi_AddMicroAppToContainerRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.micro_app_container.AddMicroAppToContainer@1.0.0 */ http.post<void>(
    `api/gateway/micro_app.micro_app_container.AddMicroAppToContainer/api/micro_app/v1/micro_app_container/${containerId}/add_micro_app`,
    data,
    options
  );
