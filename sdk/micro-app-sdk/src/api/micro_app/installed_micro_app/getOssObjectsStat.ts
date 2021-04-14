import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetOssObjectsStatRequestBody {
  /** 存储桶名称 */
  bucketName: string;

  /** 存储桶中对象 */
  objects: GetOssObjectsStatRequestBody_objects_item[];
}

/** 对象信息 */
export interface GetOssObjectsStatResponseBody {
  /** 存储桶中对象 */
  objects?: GetOssObjectsStatResponseBody_objects_item[];
}

/**
 * @description 获取对象信息
 * @endpoint POST /api/v1/micro-app/oss/get-objects-stat
 */
export const getOssObjectsStat = async (
  data: GetOssObjectsStatRequestBody,
  options?: HttpOptions
): Promise<GetOssObjectsStatResponseBody> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.GetOssObjectsStat */ (
    await http.post<ResponseBodyWrapper<GetOssObjectsStatResponseBody>>(
      "api/gateway/micro_app.installed_micro_app.GetOssObjectsStat/api/v1/micro-app/oss/get-objects-stat",
      data,
      options
    )
  ).data;

export interface GetOssObjectsStatRequestBody_objects_item {
  /** 对象名称 */
  objectName?: string;
}

export interface GetOssObjectsStatResponseBody_objects_item {
  /** 对象名称 */
  objectName?: string;

  /** 对象md5 */
  md5?: string;
}
