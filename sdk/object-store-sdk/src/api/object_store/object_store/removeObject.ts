import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除对象
 * @endpoint DELETE /api/v1/objectStore/bucket/:bucketName/object/:objectName
 */
export const ObjectStoreApi_removeObject = (
  bucketName: string | number,
  objectName: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.object_store.object_store.RemoveObject */ http.delete<void>(
    `api/gateway/object_store.object_store.RemoveObject/api/v1/objectStore/bucket/${bucketName}/object/${objectName}`,
    options
  );
