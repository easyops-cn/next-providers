import { http, HttpOptions } from "@next-core/brick-http";
import { ModelEasyTornadoCommonResponse } from "../../../model/monitor";
import { ModelMessageConfig } from "../../../model/msgsender";

/** 要更新的实例 */
export type UpdateConfigRequestBody = Partial<ModelMessageConfig>;

export type UpdateConfigResponseBody = Partial<ModelEasyTornadoCommonResponse> &
  UpdateConfigResponseBody_2;

/**
 * @description 更新通知配置
 * @endpoint PUT /api/v1/message_sender/configs/:instanceId
 */
export const updateConfig = (
  instanceId: string | number,
  data: UpdateConfigRequestBody,
  options?: HttpOptions
): Promise<UpdateConfigResponseBody> =>
  /**! @contract easyops.api.msgsender.config.UpdateConfig */ http.put<UpdateConfigResponseBody>(
    `api/gateway/msgsender.config.UpdateConfig/api/v1/message_sender/configs/${instanceId}`,
    data,
    options
  );

export interface UpdateConfigResponseBody_2 {
  /** 通知配置 */
  data?: Partial<ModelMessageConfig>;
}
