import { http, HttpOptions } from "@next-core/brick-http";

export interface CloneApi_CloneMicroAppRequestBody {
  /** appId */
  newAppId?: string;

  /** appName */
  newAppName?: string;

  /** appIcon */
  newAppIcon?: string;

  /** app描述信息 */
  description?: string;
}

/**
 * @description 克隆微应用
 * @endpoint POST /api/v1/clone_micro_app/:originAppInstanceId
 */
export const CloneApi_cloneMicroApp = (
  originAppInstanceId: string | number,
  data: CloneApi_CloneMicroAppRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.clone.CloneMicroApp@1.0.0 */ http.post<void>(
    `api/gateway/next_builder.clone.CloneMicroApp/api/v1/clone_micro_app/${originAppInstanceId}`,
    data,
    options
  );
