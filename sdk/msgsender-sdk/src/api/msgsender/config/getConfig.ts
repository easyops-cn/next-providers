import { http, HttpOptions } from "@next-core/brick-http";
import { ModelEasyTornadoCommonResponse } from "../../../model/monitor";
import { ModelMessageConfig } from "../../../model/msgsender";

export type GetConfigResponseBody = Partial<ModelEasyTornadoCommonResponse> &
  GetConfigResponseBody_2;

/**
 * @description 获取通知配置
 * @endpoint GET /api/v1/message_sender/configs/:instanceId
 */
export const getConfig = (
  instanceId: string | number,
  options?: HttpOptions
): Promise<GetConfigResponseBody> =>
  http.get<GetConfigResponseBody>(
    `api/gateway/msgsender.config.GetConfig/api/v1/message_sender/configs/${instanceId}`,
    options
  );

export interface GetConfigResponseBody_2 {
  /** 通知配置 */
  data?: Partial<ModelMessageConfig>;
}
