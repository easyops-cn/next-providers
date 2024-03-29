import { http, HttpOptions } from "@next-core/brick-http";

export interface InstalledMicroAppApi_UploadAppIconRequestBody {
  /** 小产品id */
  appId?: string;

  /** app图标的base64 */
  appIconBase64?: string;
}

/**
 * @description 上传app图标
 * @endpoint POST /api/v1/micro-app/upload-app-icon
 */
export const InstalledMicroAppApi_uploadAppIcon = (
  data: InstalledMicroAppApi_UploadAppIconRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.UploadAppIcon@1.0.0 */ http.post<void>(
    "api/gateway/micro_app.installed_micro_app.UploadAppIcon/api/v1/micro-app/upload-app-icon",
    data,
    options
  );
