import { http, HttpOptions } from "@next-core/brick-http";

export interface ResourceApi_UpgradeResourcePackageRequestBody {
  /** 包名 */
  packageName: string;
}

/**
 * @description 升级资源包
 * @endpoint POST /api/v1/resourcePackage/resource/upgrade
 */
export const ResourceApi_upgradeResourcePackage = (
  data: ResourceApi_UpgradeResourcePackageRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.resource.UpgradeResourcePackage@1.0.0 */ http.post<void>(
    "api/gateway/micro_app.resource.UpgradeResourcePackage/api/v1/resourcePackage/resource/upgrade",
    data,
    options
  );
