import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ImageUploadRequestBody {
  /** 图片名称(如果不为空，则服务器以该参数值命名存储图片，用于覆盖已存在的图片) */
  objectName?: string;

  /** 上传文件流。 */
  file: File;
}

export interface ImageUploadResponseBody {
  /** 上传图片后，服务器返回的图片地址 */
  url?: string;
}

/**
 * @description 上传图片
 * @endpoint PUT /api/v1/next-builder/image-upload
 */
export const imageUpload = async (
  data: ImageUploadRequestBody,
  options?: HttpOptions
): Promise<ImageUploadResponseBody> => {
  /**! @contract easyops.api.next_builder.build.ImageUpload */ const _formData = new FormData();
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
  return (
    await http.put<ResponseBodyWrapper<ImageUploadResponseBody>>(
      "api/gateway/next_builder.build.ImageUpload/api/v1/next-builder/image-upload",
      _formData,
      options
    )
  ).data;
};
