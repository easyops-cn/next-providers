import { http, HttpOptions } from "@next-core/brick-http";

export interface MicroAppVersionLogApi_LogAppVersionRequestBody {
  /** 升级版本号 */
  distVersionNo?: string;

  /** 变更结果 */
  changeResult?: boolean;

  /** 原版本号 */
  srcVersionNo?: string;
}

/**
 * @description 记录小产品版本变化（存在更新，不存在创建）
 * @endpoint POST /api/micro_app/v1/log_micro_app_version/:packageOrg/:packageId
 */
export const MicroAppVersionLogApi_logAppVersion = (
  packageOrg: string | number,
  packageId: string | number,
  data: MicroAppVersionLogApi_LogAppVersionRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.micro_app_version_log.LogAppVersion */ http.post<void>(
    `api/gateway/micro_app.micro_app_version_log.LogAppVersion/api/micro_app/v1/log_micro_app_version/${packageOrg}/${packageId}`,
    data,
    options
  );
