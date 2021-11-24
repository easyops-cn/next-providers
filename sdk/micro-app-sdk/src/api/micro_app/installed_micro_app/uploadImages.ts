import { http, HttpOptions } from "@next-core/brick-http";
import { ModelImage } from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstalledMicroAppApi_UploadImagesRequestBody {
  /** 小产品id */
  appId?: string;

  /** 图片 */
  images?: Partial<ModelImage>[];
}

export interface InstalledMicroAppApi_UploadImagesResponseBody {
  /** 图片 */
  images?: Partial<ModelImage>[];
}

/**
 * @description 上传app图片库
 * @endpoint POST /api/v1/micro-app/upload-app-images
 */
export const InstalledMicroAppApi_uploadImages = async (
  data: InstalledMicroAppApi_UploadImagesRequestBody,
  options?: HttpOptions
): Promise<InstalledMicroAppApi_UploadImagesResponseBody> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.UploadImages@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstalledMicroAppApi_UploadImagesResponseBody>
    >(
      "api/gateway/micro_app.installed_micro_app.UploadImages/api/v1/micro-app/upload-app-images",
      data,
      options
    )
  ).data;
