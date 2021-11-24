import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstalledMicroAppApi_GetOssObjectsStatRequestBody {
  /** 存储桶名称 */
  bucketName: string;

  /** 存储桶中对象 */
  objects: InstalledMicroAppApi_GetOssObjectsStatRequestBody_objects_item[];
}

/** 对象信息 */
export interface InstalledMicroAppApi_GetOssObjectsStatResponseBody {
  /** 存储桶中对象 */
  objects?: InstalledMicroAppApi_GetOssObjectsStatResponseBody_objects_item[];
}

/**
 * @description 获取对象信息
 * @endpoint POST /api/v1/micro-app/oss/get-objects-stat
 */
export const InstalledMicroAppApi_getOssObjectsStat = async (
  data: InstalledMicroAppApi_GetOssObjectsStatRequestBody,
  options?: HttpOptions
): Promise<InstalledMicroAppApi_GetOssObjectsStatResponseBody> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.GetOssObjectsStat@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstalledMicroAppApi_GetOssObjectsStatResponseBody>
    >(
      "api/gateway/micro_app.installed_micro_app.GetOssObjectsStat/api/v1/micro-app/oss/get-objects-stat",
      data,
      options
    )
  ).data;

export interface InstalledMicroAppApi_GetOssObjectsStatRequestBody_objects_item {
  /** 对象名称 */
  objectName?: string;
}

export interface InstalledMicroAppApi_GetOssObjectsStatResponseBody_objects_item {
  /** 对象名称 */
  objectName?: string;

  /** 对象md5 */
  md5?: string;
}
