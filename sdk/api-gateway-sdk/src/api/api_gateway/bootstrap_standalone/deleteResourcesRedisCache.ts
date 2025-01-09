import { http, HttpOptions } from "@next-core/brick-http";

export interface BootstrapStandaloneApi_DeleteResourcesRedisCacheRequestParams {
  /** 资源包名字,多个用,分开 */
  resourcePkgNames?: string;

  /** 模块id, 多个用,分开 */
  moduleIds?: string;
}

/**
 * @description 删除资源的redis缓存
 * @endpoint DELETE /api/v1/resources/redis_cache
 */
export const BootstrapStandaloneApi_deleteResourcesRedisCache = (
  params: BootstrapStandaloneApi_DeleteResourcesRedisCacheRequestParams,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.api_gateway.bootstrap_standalone.DeleteResourcesRedisCache@1.0.0 */ http.delete<void>(
    "api/v1/resources/redis_cache",
    { ...options, params }
  );
