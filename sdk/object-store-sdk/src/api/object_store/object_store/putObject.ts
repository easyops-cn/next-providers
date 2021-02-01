import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface PutObjectRequestBody {
  /** 存储桶中对象名称(如果不为空，则服务器以该参数值命名存储对象) */
  objectName?: string;

  /** 上传文件流。 */
  file: File;
}

export interface PutObjectResponseBody {
  /** 上传对象后，服务器返回的对象名称 */
  objectName?: string;
}

/**
 * @description 上传对象
 * @endpoint PUT /api/v1/objectStore/bucket/:bucketName/object
 */
export const putObject = async (
  bucketName: string | number,
  data: PutObjectRequestBody,
  options?: HttpOptions
): Promise<PutObjectResponseBody> => {
  const _formData = new FormData();
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
    await http.put<ResponseBodyWrapper<PutObjectResponseBody>>(
      `api/gateway/object_store.object_store.PutObject/api/v1/objectStore/bucket/${bucketName}/object`,
      _formData,
      options
    )
  ).data;
};
