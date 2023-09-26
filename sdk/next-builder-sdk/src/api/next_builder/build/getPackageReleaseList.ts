import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroAppReleasedLog } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface BuildApi_GetPackageReleaseListRequestParams {
  /** 是否standalone模式的打包记录 */
  isStandalone?: boolean;

  /** 页数, 不传或为0时表示全量查询（不超过3000条） */
  page?: number;

  /** 分页大小 */
  pageSize?: number;
}

export interface BuildApi_GetPackageReleaseListResponseBody {
  /** 包列表 */
  packages?: BuildApi_GetPackageReleaseListResponseBody_packages_item[];
}

/**
 * @description 指定环境一键打包上传到r环境
 * @endpoint GET /api/v1/next-builder/packages/:projectId
 */
export const BuildApi_getPackageReleaseList = async (
  projectId: string | number,
  params: BuildApi_GetPackageReleaseListRequestParams,
  options?: HttpOptions
): Promise<BuildApi_GetPackageReleaseListResponseBody> =>
  /**! @contract easyops.api.next_builder.build.GetPackageReleaseList@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<BuildApi_GetPackageReleaseListResponseBody>
    >(
      `api/gateway/next_builder.build.GetPackageReleaseList/api/v1/next-builder/packages/${projectId}`,
      { ...options, params }
    )
  ).data;

export interface BuildApi_GetPackageReleaseListResponseBody_packages_item {
  /** 小产品id */
  appId?: string;

  /** 版本 */
  version?: string;

  /** 版本描述 */
  description?: string;

  /** 打包状态 */
  packageStatus?: string;

  /** 创建用户 */
  commitUser?: string;

  /** 创建时间 */
  ctime?: string;

  /** 制品包信息 */
  packageInfo?: ModelMicroAppReleasedLog["packageInfo"];
}
