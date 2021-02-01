import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetModifiedInformationRequestParams {
  /** 开始版本 */
  startVersion?: string;

  /** 结束版本，如果为 `current`时，返回数据包含基于最新版本的修改 */
  endVersion?: string;
}

export interface GetModifiedInformationResponseBody {
  /** 修改日志 */
  modifiedLogs?: GetModifiedInformationResponseBody_modifiedLogs_item[];
}

/**
 * @description 获取两个版本之间的修改信息
 * @endpoint GET /api/v1/next-builder/modified-information/:projectId
 */
export const getModifiedInformation = async (
  projectId: string | number,
  params: GetModifiedInformationRequestParams,
  options?: HttpOptions
): Promise<GetModifiedInformationResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<GetModifiedInformationResponseBody>>(
      `api/gateway/next_builder.build.GetModifiedInformation/api/v1/next-builder/modified-information/${projectId}`,
      { ...options, params }
    )
  ).data;

export interface GetModifiedInformationResponseBody_modifiedLogs_item {
  /** modifiedUser */
  modifiedUser?: string;

  /** 最后修改时间 */
  lastModifiedTime?: string;

  /** 修改次数 */
  modifiedTimes?: number;
}
