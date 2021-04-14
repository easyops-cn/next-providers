import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetObjectsStatRequestBody {
  /** 存储桶中对象 */
  objects: GetObjectsStatRequestBody_objects_item[];
}

/** 对象信息 */
export interface GetObjectsStatResponseBody {
  /** 存储桶中对象 */
  objects?: GetObjectsStatResponseBody_objects_item[];
}

/**
 * @description 获取对象信息
 * @endpoint POST /api/v1/objectStore/bucket/:bucketName/objectStat
 */
export const getObjectsStat = async (
  bucketName: string | number,
  data: GetObjectsStatRequestBody,
  options?: HttpOptions
): Promise<GetObjectsStatResponseBody> =>
  /**! @contract easyops.api.object_store.object_store.GetObjectsStat */ (
    await http.post<ResponseBodyWrapper<GetObjectsStatResponseBody>>(
      `api/gateway/object_store.object_store.GetObjectsStat/api/v1/objectStore/bucket/${bucketName}/objectStat`,
      data,
      options
    )
  ).data;

export interface GetObjectsStatRequestBody_objects_item {
  /** 对象名称 */
  objectName?: string;
}

export interface GetObjectsStatResponseBody_objects_item {
  /** 对象名称 */
  objectName?: string;

  /** 对象md5 */
  md5?: string;
}
