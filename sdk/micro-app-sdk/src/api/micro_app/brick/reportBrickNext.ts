import { http, HttpOptions } from "@next-core/brick-http";

export interface BrickApi_ReportBrickNextRequestBody {
  /** 包名 */
  packageName: string;

  /** 包版本 */
  packageVersion: string;

  /** brick_next.tar.gz */
  file: File;
}

/**
 * @description 上报brick_next到制品仓库
 * @endpoint POST /api/v1/brick_next/report
 */
export const BrickApi_reportBrickNext = (
  data: BrickApi_ReportBrickNextRequestBody,
  options?: HttpOptions
): Promise<void> => {
  /**! @contract easyops.api.micro_app.brick.ReportBrickNext@1.0.0 */ const _formData =
    new FormData();
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      const k = `${key}[]`;
      value.forEach((v) => {
        _formData.append(k, v);
      });
    } else {
      _formData.append(key, value);
    }
  }
  return http.post<void>(
    "api/gateway/micro_app.brick.ReportBrickNext/api/v1/brick_next/report",
    _formData,
    options
  );
};
