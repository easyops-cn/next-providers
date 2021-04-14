import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 下载对象
 * @endpoint GET /api/v1/objectStore/bucket/:bucketName/object/:objectName
 */
export const getObject = (
  bucketName: string | number,
  objectName: string | number,
  options?: HttpOptions
): Promise<Blob> =>
  /**! @contract easyops.api.object_store.object_store.GetObject */ http.get<Blob>(
    `api/gateway/object_store.object_store.GetObject/api/v1/objectStore/bucket/${bucketName}/object/${objectName}`,
    { ...options, responseType: "blob" }
  );
