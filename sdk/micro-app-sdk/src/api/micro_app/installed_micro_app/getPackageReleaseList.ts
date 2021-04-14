import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetPackageReleaseListRequestParams {
  /** 组织代码 */
  org?: number;

  /** 需要返回的数量，目前只返回一页，如果这个值为0时，最多返回3000条数据 */
  needCount?: number;
}

export interface GetPackageReleaseListResponseBody {
  /** 包列表 */
  packages?: GetPackageReleaseListResponseBody_packages_item[];
}

/**
 * @description 指定环境一键打包上传到r环境
 * @endpoint GET /api/v1/micro_app/packages/:appId
 */
export const getPackageReleaseList = async (
  appId: string | number,
  params: GetPackageReleaseListRequestParams,
  options?: HttpOptions
): Promise<GetPackageReleaseListResponseBody> =>
  /**! @contract easyops.api.micro_app.installed_micro_app.GetPackageReleaseList */ (
    await http.get<ResponseBodyWrapper<GetPackageReleaseListResponseBody>>(
      `api/gateway/micro_app.installed_micro_app.GetPackageReleaseList/api/v1/micro_app/packages/${appId}`,
      { ...options, params }
    )
  ).data;

export interface GetPackageReleaseListResponseBody_packages_item {
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
}
