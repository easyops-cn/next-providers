import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ObjectStoreApi_GetObjectsStatRequestBody {
  /** 存储桶中对象 */
  objects: ObjectStoreApi_GetObjectsStatRequestBody_objects_item[];
}

/** 对象信息 */
export interface ObjectStoreApi_GetObjectsStatResponseBody {
  /** 存储桶中对象 */
  objects?: ObjectStoreApi_GetObjectsStatResponseBody_objects_item[];
}

/**
 * @description 获取对象信息
 * @endpoint POST /api/v1/objectStore/bucket/:bucketName/objectStat
 */
export const ObjectStoreApi_getObjectsStat = async (
  bucketName: string | number,
  data: ObjectStoreApi_GetObjectsStatRequestBody,
  options?: HttpOptions
): Promise<ObjectStoreApi_GetObjectsStatResponseBody> =>
  /**! @contract easyops.api.object_store.object_store.GetObjectsStat@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<ObjectStoreApi_GetObjectsStatResponseBody>
    >(
      `api/gateway/object_store.object_store.GetObjectsStat/api/v1/objectStore/bucket/${bucketName}/objectStat`,
      data,
      options
    )
  ).data;

export interface ObjectStoreApi_GetObjectsStatRequestBody_objects_item {
  /** 对象名称 */
  objectName?: string;
}

export interface ObjectStoreApi_GetObjectsStatResponseBody_objects_item {
  /** 对象名称 */
  objectName?: string;

  /** 对象md5 */
  md5?: string;
}
