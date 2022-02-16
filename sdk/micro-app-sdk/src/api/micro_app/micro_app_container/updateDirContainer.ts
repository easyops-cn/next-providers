import { http, HttpOptions } from "@next-core/brick-http";

export interface MicroAppContainerApi_UpdateDirContainerRequestBody {
  /** 桌面容器ID */
  containerId?: string;
}

/**
 * @description 修改文件夹所在桌面容器
 * @endpoint PUT /api/micro_app/v1/dir/:instanceId/container
 */
export const MicroAppContainerApi_updateDirContainer = (
  instanceId: string | number,
  data: MicroAppContainerApi_UpdateDirContainerRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.micro_app_container.UpdateDirContainer@1.0.0 */ http.put<void>(
    `api/gateway/micro_app.micro_app_container.UpdateDirContainer/api/micro_app/v1/dir/${instanceId}/container`,
    data,
    options
  );
