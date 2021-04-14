import { http, HttpOptions } from "@next-core/brick-http";

export interface CreateBucketRequestBody {
  /** 存储桶被创建的region(地区) */
  location?: string;
}

/**
 * @description 创建对象存储桶
 * @endpoint PUT /api/v1/objectStore/bucket/:bucketName
 */
export const createBucket = (
  bucketName: string | number,
  data: CreateBucketRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.object_store.object_store.CreateBucket */ http.put<void>(
    `api/gateway/object_store.object_store.CreateBucket/api/v1/objectStore/bucket/${bucketName}`,
    data,
    options
  );
