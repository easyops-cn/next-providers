import { http, HttpOptions } from "@next-core/brick-http";
import { ModelEasyTornadoCommonResponse } from "../../../model/monitor";

export type DeleteConfigResponseBody = Partial<ModelEasyTornadoCommonResponse> &
  DeleteConfigResponseBody_2;

/**
 * @description 删除通知配置
 * @endpoint DELETE /api/v1/message_sender/configs/:instanceId
 */
export const deleteConfig = (
  instanceId: string | number,
  options?: HttpOptions
): Promise<DeleteConfigResponseBody> =>
  http.delete<DeleteConfigResponseBody>(
    `api/gateway/msgsender.config.DeleteConfig/api/v1/message_sender/configs/${instanceId}`,
    options
  );

export interface DeleteConfigResponseBody_2 {
  /** data */
  data?: Record<string, any>;
}
