import { http, HttpOptions } from "@next-core/brick-http";

export interface StoryboardApi_CloneRoutesRequestBody {
  /** 源路由id */
  sourceRouteId: string;

  /** 新的父路由id */
  newParentRouteId?: string;

  /** 新的应用id */
  newAppId: string;

  /** 是否排除sourceRoute，默认false */
  exclude?: boolean;
}

/**
 * @description 拷贝路由 (拷贝路由)
 * @endpoint POST /api/v1/nextBuilder/clone_route
 */
export const StoryboardApi_cloneRoutes = (
  data: StoryboardApi_CloneRoutesRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.storyboard.CloneRoutes@1.0.0 */ http.post<void>(
    "api/gateway/next_builder.storyboard.CloneRoutes/api/v1/nextBuilder/clone_route",
    data,
    options
  );
