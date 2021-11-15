import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ObjectStoreApi_RemoveObjectsRequestBody {
  /** 存储桶中对象名称列表 */
  objectNames: string[];
}

export interface ObjectStoreApi_RemoveObjectsResponseBody {
  /** 删除失败的对象列表 */
  errResult?: ObjectStoreApi_RemoveObjectsResponseBody_errResult_item[];
}

/**
 * @description 删除对象列表
 * @endpoint POST /api/v1/objectStore/bucket/:bucketName/deletion
 */
export const ObjectStoreApi_removeObjects = async (
  bucketName: string | number,
  data: ObjectStoreApi_RemoveObjectsRequestBody,
  options?: HttpOptions
): Promise<ObjectStoreApi_RemoveObjectsResponseBody> =>
  /**! @contract easyops.api.object_store.object_store.RemoveObjects */ (
    await http.post<
      ResponseBodyWrapper<ObjectStoreApi_RemoveObjectsResponseBody>
    >(
      `api/gateway/object_store.object_store.RemoveObjects/api/v1/objectStore/bucket/${bucketName}/deletion`,
      data,
      options
    )
  ).data;

export interface ObjectStoreApi_RemoveObjectsResponseBody_errResult_item {
  /** 对象名称 */
  objectName?: string;

  /** 错误信息 */
  errMsg?: string;
}
