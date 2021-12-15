import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 下载对象
 * @endpoint GET /api/v1/objectStore/bucket/:bucketName/object/:objectName
 */
export const ObjectStoreApi_getObject = (
  bucketName: string | number,
  objectName: string | number,
  options?: HttpOptions
): Promise<Blob> =>
  /**! @contract easyops.api.object_store.object_store.GetObject@1.0.0 */ http.get<Blob>(
    `api/gateway/object_store.object_store.GetObject/api/v1/objectStore/bucket/${bucketName}/object/${objectName}`,
    { ...options, responseType: "blob" }
  );
