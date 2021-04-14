import { http, HttpOptions } from "@next-core/brick-http";
import { ModelImage } from "../../../model/micro_app";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface UploadImagesRequestBody {
  /** 小产品id */
  appId?: string;

  /** 图片 */
  images?: Partial<ModelImage>[];
}

export interface UploadImagesResponseBody {
  /** 图片 */
  images?: Partial<ModelImage>[];
}

/**
 * @description 上传app图片库
 * @endpoint POST /api/v1/micro-app/upload-app-images
 */
export const uploadImages = async (
  data: UploadImagesRequestBody,
  options?: HttpOptions
): Promise<UploadImagesResponseBody> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.UploadImages */ (
    await http.post<ResponseBodyWrapper<UploadImagesResponseBody>>(
      "api/gateway/micro_app.installed_micro_app.UploadImages/api/v1/micro-app/upload-app-images",
      data,
      options
    )
  ).data;
