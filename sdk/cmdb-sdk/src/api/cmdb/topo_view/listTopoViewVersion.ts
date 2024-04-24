import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface TopoViewApi_ListTopoViewVersionRequestBody {
  /** 视图ID */
  viewId?: string;

  /** page */
  page?: number;

  /** pageSize */
  pageSize?: number;

  /** 排序 */
  sort?: TopoViewApi_ListTopoViewVersionRequestBody_sort_item[];
}

export interface TopoViewApi_ListTopoViewVersionResponseBody {
  /** page */
  page?: number;

  /** pageSize */
  pageSize?: number;

  /** total */
  total?: number;

  /** list */
  list?: Record<string, any>[];
}

/**
 * @description 获取拓扑视图版本列表
 * @endpoint POST /api/v1/list-topo-view-version
 */
export const TopoViewApi_listTopoViewVersion = async (
  data: TopoViewApi_ListTopoViewVersionRequestBody,
  options?: HttpOptions
): Promise<TopoViewApi_ListTopoViewVersionResponseBody> =>
  /**! @contract easyops.api.cmdb.topo_view.ListTopoViewVersion@1.0.2 */ (
    await http.post<
      ResponseBodyWrapper<TopoViewApi_ListTopoViewVersionResponseBody>
    >(
      "api/gateway/cmdb.topo_view.ListTopoViewVersion/api/v1/list-topo-view-version",
      data,
      options
    )
  ).data;

export interface TopoViewApi_ListTopoViewVersionRequestBody_sort_item {
  /** 属性id */
  key?: string;

  /** 排序 */
  order?: number;
}
