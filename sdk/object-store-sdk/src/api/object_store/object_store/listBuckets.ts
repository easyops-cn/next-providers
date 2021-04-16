import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

/** 对象存储桶 */
export interface ObjectStoreApi_ListBucketsResponseBody {
  /** 对象存储桶列表 */
  buckets?: ObjectStoreApi_ListBucketsResponseBody_buckets_item[];
}

/**
 * @description 列出所有对象存储桶
 * @endpoint GET /api/v1/objectStore/bucket
 */
export const ObjectStoreApi_listBuckets = async (
  options?: HttpOptions
): Promise<ObjectStoreApi_ListBucketsResponseBody> =>
  /**! @contract easyops.api.object_store.object_store.ListBuckets */ (
    await http.get<ResponseBodyWrapper<ObjectStoreApi_ListBucketsResponseBody>>(
      "api/gateway/object_store.object_store.ListBuckets/api/v1/objectStore/bucket",
      options
    )
  ).data;

export interface ObjectStoreApi_ListBucketsResponseBody_buckets_item {
  /** 对象存储桶名称 */
  bucketName?: string;

  /** 创建时间 */
  creationDate?: string;
}
