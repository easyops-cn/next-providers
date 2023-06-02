import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ObjectStoreApi_CopyObjectRequestBody {
  /** 源对象 */
  src?: ObjectStoreApi_CopyObjectRequestBody_src;

  /** 目标对象 */
  dst?: ObjectStoreApi_CopyObjectRequestBody_dst;
}

export interface ObjectStoreApi_CopyObjectResponseBody {
  /** 复制对象后，服务器返回的对象名称 */
  objectName?: string;
}

/**
 * @description 复制对象
 * @endpoint POST /api/v1/objectStore/objectCopy
 */
export const ObjectStoreApi_copyObject = async (
  data: ObjectStoreApi_CopyObjectRequestBody,
  options?: HttpOptions
): Promise<ObjectStoreApi_CopyObjectResponseBody> =>
  /**! @contract easyops.api.object_store.object_store.CopyObject@1.0.0 */ (
    await http.post<ResponseBodyWrapper<ObjectStoreApi_CopyObjectResponseBody>>(
      "api/gateway/object_store.object_store.CopyObject/api/v1/objectStore/objectCopy",
      data,
      options
    )
  ).data;

export interface ObjectStoreApi_CopyObjectRequestBody_src {
  /** 存储桶名称 */
  bucketName?: string;

  /** 存储桶中对象名称 */
  objectName?: string;
}

export interface ObjectStoreApi_CopyObjectRequestBody_dst {
  /** 存储桶名称 */
  bucketName?: string;

  /** 存储桶中对象名称 */
  objectName?: string;
}
