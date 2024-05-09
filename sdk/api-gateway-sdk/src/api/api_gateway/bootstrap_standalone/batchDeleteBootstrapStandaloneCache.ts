import { http, HttpOptions } from "@next-core/brick-http";

export interface BootstrapStandaloneApi_BatchDeleteBootstrapStandaloneCacheRequestBody {
  /** 主页 */
  homePage?: string[];
}

/**
 * @description 批量删除独立小产品主页缓存
 * @endpoint POST /api/v1/bootstrap_standalone_cache/batch_delete
 */
export const BootstrapStandaloneApi_batchDeleteBootstrapStandaloneCache = (
  data: BootstrapStandaloneApi_BatchDeleteBootstrapStandaloneCacheRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.api_gateway.bootstrap_standalone.BatchDeleteBootstrapStandaloneCache@1.0.0 */ http.post<void>(
    "api/v1/bootstrap_standalone_cache/batch_delete",
    data,
    options
  );
