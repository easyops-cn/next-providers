import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ListObjectsRequestParams {
  /** 要列举的对象前缀 */
  objectPrefix?: string;

  /** true代表递归查找，false代表类似文件夹查找，以'/'分隔，不查子文件夹。 */
  recursive?: boolean;
}

/** 返回对象 */
export interface ListObjectsResponseBody {
  /** 对象数组 */
  objects?: ListObjectsResponseBody_objects_item[];
}

/**
 * @description 列出对象存储桶中所有对象
 * @endpoint GET /api/v1/objectStore/bucket/:bucketName/object
 */
export const listObjects = async (
  bucketName: string | number,
  params: ListObjectsRequestParams,
  options?: HttpOptions
): Promise<ListObjectsResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<ListObjectsResponseBody>>(
      `api/gateway/object_store.object_store.ListObjects/api/v1/objectStore/bucket/${bucketName}/object`,
      { ...options, params }
    )
  ).data;

export interface ListObjectsResponseBody_objects_item {
  /** 对象MD5值 */
  etag?: string;

  /** 对象名称 */
  name?: string;

  /** 最后修改时间 */
  lastModified?: string;

  /** 对象大小 */
  size?: number;

  /** 标准MIME类型，描述对象数据格式 */
  contentType?: string;

  /** 过期时间(超过将不再缓存) */
  expires?: string;

  /** 所属用户 */
  owner?: ListObjectsResponseBody_objects_item_owner;
}

export interface ListObjectsResponseBody_objects_item_owner {
  /** 用户名 */
  name?: string;

  /** 用户ID */
  id?: string;
}
