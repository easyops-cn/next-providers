import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface BuildApi_RecoverFromHistoryVersionRequestBody {
  /** 历史版本 */
  historyVersion: string;
}

export interface BuildApi_RecoverFromHistoryVersionResponseBody {
  /** 新的小产品instanceId */
  newAppInstanceId?: string;

  /** 新的小产品projectId */
  newAppProjectId?: string;
}

/**
 * @description 从历史版本恢复数据
 * @endpoint POST /api/v1/next_builder/:appId/recover
 */
export const BuildApi_recoverFromHistoryVersion = async (
  appId: string | number,
  data: BuildApi_RecoverFromHistoryVersionRequestBody,
  options?: HttpOptions
): Promise<BuildApi_RecoverFromHistoryVersionResponseBody> =>
  /**! @contract easyops.api.next_builder.build.RecoverFromHistoryVersion@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<BuildApi_RecoverFromHistoryVersionResponseBody>
    >(
      `api/gateway/next_builder.build.RecoverFromHistoryVersion/api/v1/next_builder/${appId}/recover`,
      data,
      options
    )
  ).data;
