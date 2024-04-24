import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface TopoViewApi_CreateTopoAdjustStrategyRequestBody {
  /** 汇聚策略定义 */
  strategy: TopoViewApi_CreateTopoAdjustStrategyRequestBody_strategy;

  /** 关联视图实例ID */
  viewId?: string;
}

export interface TopoViewApi_CreateTopoAdjustStrategyResponseBody {
  /** 实例ID */
  instanceId?: string;
}

/**
 * @description 创建拓扑中心调和策略
 * @endpoint POST /api/v1/create-topo-adjust-strategy
 */
export const TopoViewApi_createTopoAdjustStrategy = async (
  data: TopoViewApi_CreateTopoAdjustStrategyRequestBody,
  options?: HttpOptions
): Promise<TopoViewApi_CreateTopoAdjustStrategyResponseBody> =>
  /**! @contract easyops.api.cmdb.topo_view.CreateTopoAdjustStrategy@1.0.1 */ (
    await http.post<
      ResponseBodyWrapper<TopoViewApi_CreateTopoAdjustStrategyResponseBody>
    >(
      "api/gateway/cmdb.topo_view.CreateTopoAdjustStrategy/api/v1/create-topo-adjust-strategy",
      data,
      options
    )
  ).data;

export interface TopoViewApi_CreateTopoAdjustStrategyRequestBody_strategy {
  /** 调和参数 */
  args?: Record<string, any>;

  /** 排序值 */
  sort?: number;

  /** 处理方法 */
  method?: string;

  /** 数据id */
  dataId?: string;

  /** 策略名称 */
  name?: string;

  /** 编辑模式 */
  editMode?: "default" | "highLevel";
}
