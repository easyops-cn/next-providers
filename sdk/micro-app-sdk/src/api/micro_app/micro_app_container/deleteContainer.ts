import { http, HttpOptions } from "@next-core/brick-http";

export interface MicroAppContainerApi_DeleteContainerRequestParams {
  /** 可以选择将原容器下的app和自定义菜单项移动到新容器 */
  newContainerInstanceId?: string;
}

/**
 * @description 删除导航菜单/分类菜单(容器)
 * @endpoint DELETE /api/micro_app/v1/micro_app_container/:instanceId
 */
export const MicroAppContainerApi_deleteContainer = (
  instanceId: string | number,
  params: MicroAppContainerApi_DeleteContainerRequestParams,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.micro_app_container.DeleteContainer@1.0.0 */ http.delete<void>(
    `api/gateway/micro_app.micro_app_container.DeleteContainer/api/micro_app/v1/micro_app_container/${instanceId}`,
    { ...options, params }
  );
