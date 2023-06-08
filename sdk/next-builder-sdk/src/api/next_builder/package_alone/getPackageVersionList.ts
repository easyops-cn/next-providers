import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface PackageAloneApi_GetPackageVersionListRequestBody {
  /** packageList */
  packageList: PackageAloneApi_GetPackageVersionListRequestBody_packageList_item[];
}

export interface PackageAloneApi_GetPackageVersionListResponseBody {
  /** 包版本列表 */
  list?: PackageAloneApi_GetPackageVersionListResponseBody_list_item[];
}

/**
 * @description 获取包的版本列表
 * @endpoint POST /api/v1/next-builder/package/version
 */
export const PackageAloneApi_getPackageVersionList = async (
  data: PackageAloneApi_GetPackageVersionListRequestBody,
  options?: HttpOptions
): Promise<PackageAloneApi_GetPackageVersionListResponseBody> =>
  /**! @contract easyops.api.next_builder.package_alone.GetPackageVersionList@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<PackageAloneApi_GetPackageVersionListResponseBody>
    >(
      "api/gateway/next_builder.package_alone.GetPackageVersionList/api/v1/next-builder/package/version",
      data,
      options
    )
  ).data;

export interface PackageAloneApi_GetPackageVersionListRequestBody_packageList_item {
  /** 制品包名字 */
  name?: string;
}

export interface PackageAloneApi_GetPackageVersionListResponseBody_list_item {
  /** name */
  name?: string;

  /** versionList */
  versionList?: PackageAloneApi_GetPackageVersionListResponseBody_list_item_versionList_item[];
}

export interface PackageAloneApi_GetPackageVersionListResponseBody_list_item_versionList_item {
  /** 版本名称 */
  name?: string;

  /** 版本类型 1 开发, 3 测试, 7 预发布, 15 生产 */
  env_type?: 1 | 3 | 7 | 15;
}
