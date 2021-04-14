import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

/** 对象存储桶 */
export interface ListBucketsResponseBody {
  /** 对象存储桶列表 */
  buckets?: ListBucketsResponseBody_buckets_item[];
}

/**
 * @description 列出所有对象存储桶
 * @endpoint GET /api/v1/objectStore/bucket
 */
export const listBuckets = async (
  options?: HttpOptions
): Promise<ListBucketsResponseBody> =>
  /**! @contract easyops.api.object_store.object_store.ListBuckets */ (
    await http.get<ResponseBodyWrapper<ListBucketsResponseBody>>(
      "api/gateway/object_store.object_store.ListBuckets/api/v1/objectStore/bucket",
      options
    )
  ).data;

export interface ListBucketsResponseBody_buckets_item {
  /** 对象存储桶名称 */
  bucketName?: string;

  /** 创建时间 */
  creationDate?: string;
}
