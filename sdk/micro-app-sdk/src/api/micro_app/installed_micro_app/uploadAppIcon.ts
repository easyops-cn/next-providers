import { http, HttpOptions } from "@next-core/brick-http";

export interface UploadAppIconRequestBody {
  /** 小产品id */
  appId?: string;

  /** app图标的base64 */
  appIconBase64?: string;
}

/**
 * @description 上传app图标
 * @endpoint POST /api/v1/micro-app/upload-app-icon
 */
export const uploadAppIcon = (
  data: UploadAppIconRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.UploadAppIcon */ http.post<void>(
    "api/gateway/micro_app.installed_micro_app.UploadAppIcon/api/v1/micro-app/upload-app-icon",
    data,
    options
  );
