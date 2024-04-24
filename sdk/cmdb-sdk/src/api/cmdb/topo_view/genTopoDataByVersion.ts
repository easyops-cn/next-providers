import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCollectStrategyData } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface TopoViewApi_GenTopoDataByVersionRequestBody {
  /** 视图版本的实例id */
  viewVersionId: string;

  /** 占位符的定义 */
  viewArgs?: TopoViewApi_GenTopoDataByVersionRequestBody_viewArgs_item[];

  /** 是否与最新数据对比 */
  isCompareWithLatest?: boolean;
}

export interface TopoViewApi_GenTopoDataByVersionResponseBody {
  /** 拓扑定义 */
  topo?: Partial<ModelCollectStrategyData>;
}

/**
 * @description 根据拓扑视图版本id，生成拓扑数据
 * @endpoint POST /api/v1/view-version/topo-data
 */
export const TopoViewApi_genTopoDataByVersion = async (
  data: TopoViewApi_GenTopoDataByVersionRequestBody,
  options?: HttpOptions
): Promise<TopoViewApi_GenTopoDataByVersionResponseBody> =>
  /**! @contract easyops.api.cmdb.topo_view.GenTopoDataByVersion@1.0.4 */ (
    await http.post<
      ResponseBodyWrapper<TopoViewApi_GenTopoDataByVersionResponseBody>
    >(
      "api/gateway/cmdb.topo_view.GenTopoDataByVersion/api/v1/view-version/topo-data",
      data,
      options
    )
  ).data;

export interface TopoViewApi_GenTopoDataByVersionRequestBody_viewArgs_item {
  /** 占位符，不包含$ */
  id?: string;

  /** 要替换的数据 */
  value?: any;
}
