import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ObjectStoreApi_PutObjectRequestBody {
  /** 存储桶中对象名称(如果不为空，则服务器以该参数值命名存储对象) */
  objectName?: string;

  /** 上传文件流。 */
  file: File;

  /** 压缩质量, 不传表示100，不压缩 */
  quality?: number;

  /** 图片压缩最大宽度, 为0表示不按宽度等比例压缩 */
  width?: number;

  /** 图片压缩最大高度, 为0表示不按高度等比例压缩 */
  height?: number;
}

export interface ObjectStoreApi_PutObjectResponseBody {
  /** 上传对象后，服务器返回的对象名称 */
  objectName?: string;
}

/**
 * @description 上传对象
 * @endpoint PUT /api/v1/objectStore/bucket/:bucketName/object
 */
export const ObjectStoreApi_putObject = async (
  bucketName: string | number,
  data: ObjectStoreApi_PutObjectRequestBody,
  options?: HttpOptions
): Promise<ObjectStoreApi_PutObjectResponseBody> => {
  /**! @contract easyops.api.object_store.object_store.PutObject@1.0.0 */ const _formData =
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
  return (
    await http.put<ResponseBodyWrapper<ObjectStoreApi_PutObjectResponseBody>>(
      `api/gateway/object_store.object_store.PutObject/api/v1/objectStore/bucket/${bucketName}/object`,
      _formData,
      options
    )
  ).data;
};
