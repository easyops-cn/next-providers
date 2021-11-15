import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ObjectStoreApi_PutObjectByPathBucketRequestBody {
  /** 存储桶名称 */
  bucketName: string;

  /** 存储桶中对象名称(如果不为空，则服务器以该参数值命名存储对象) */
  objectName?: string;

  /** 上传文件流。 */
  file: File;

  /** 压缩质量, 为0或100，标识不压缩 */
  quality?: number;
}

export interface ObjectStoreApi_PutObjectByPathBucketResponseBody {
  /** 上传对象后，服务器返回的对象名称 */
  objectName?: string;
}

/**
 * @description 上传对象
 * @endpoint POST /api/v1/objectStore/object
 */
export const ObjectStoreApi_putObjectByPathBucket = async (
  data: ObjectStoreApi_PutObjectByPathBucketRequestBody,
  options?: HttpOptions
): Promise<ObjectStoreApi_PutObjectByPathBucketResponseBody> => {
  /**! @contract easyops.api.object_store.object_store.PutObjectByPathBucket */ const _formData =
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
    await http.post<
      ResponseBodyWrapper<ObjectStoreApi_PutObjectByPathBucketResponseBody>
    >(
      "api/gateway/object_store.object_store.PutObjectByPathBucket/api/v1/objectStore/object",
      _formData,
      options
    )
  ).data;
};
