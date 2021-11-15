import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 下载静态的存储对象; 无租户校验
 * @endpoint GET /api/v1/objectStore/bucket/:bucketName/static_object/:objectName
 */
export const ObjectStoreApi_getStaticObject = (
  bucketName: string | number,
  objectName: string | number,
  options?: HttpOptions
): Promise<Blob> =>
  /**! @contract easyops.api.object_store.object_store.GetStaticObject */ http.get<Blob>(
    `api/gateway/object_store.object_store.GetStaticObject/api/v1/objectStore/bucket/${bucketName}/static_object/${objectName}`,
    { ...options, responseType: "blob" }
  );
