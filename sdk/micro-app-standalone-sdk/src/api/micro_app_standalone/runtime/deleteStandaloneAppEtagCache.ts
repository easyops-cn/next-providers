import { http, HttpOptions } from "@next-core/brick-http";

export interface RuntimeApi_DeleteStandaloneAppEtagCacheRequestParams {
  /** 小产品id，多个用逗号分割 */
  appIds?: string;
}

/**
 * @description 删除具体bootstrapV2的etag缓存(standalone_micro_app)
 * @endpoint DELETE /api/v1/standalone_micro_app/bootstrap_etag
 */
export const RuntimeApi_deleteStandaloneAppEtagCache = (
  params: RuntimeApi_DeleteStandaloneAppEtagCacheRequestParams,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app_standalone.runtime.DeleteStandaloneAppEtagCache@1.0.0 */ http.delete<void>(
    "api/gateway/micro_app_standalone.runtime.DeleteStandaloneAppEtagCache/api/v1/standalone_micro_app/bootstrap_etag",
    { ...options, params }
  );
