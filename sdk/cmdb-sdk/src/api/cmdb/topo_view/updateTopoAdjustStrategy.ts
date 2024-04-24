import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface TopoViewApi_UpdateTopoAdjustStrategyRequestBody {
  /** 汇聚策略定义 */
  strategy: TopoViewApi_UpdateTopoAdjustStrategyRequestBody_strategy;

  /** 视图id */
  viewId?: string;
}

export interface TopoViewApi_UpdateTopoAdjustStrategyResponseBody {
  /** 实例ID */
  instanceId?: string;
}

/**
 * @description 更新拓扑中心汇聚策略
 * @endpoint PUT /api/v1/update-topo-adjust-strategy/:instanceId
 */
export const TopoViewApi_updateTopoAdjustStrategy = async (
  instanceId: string | number,
  data: TopoViewApi_UpdateTopoAdjustStrategyRequestBody,
  options?: HttpOptions
): Promise<TopoViewApi_UpdateTopoAdjustStrategyResponseBody> =>
  /**! @contract easyops.api.cmdb.topo_view.UpdateTopoAdjustStrategy@1.0.2 */ (
    await http.put<
      ResponseBodyWrapper<TopoViewApi_UpdateTopoAdjustStrategyResponseBody>
    >(
      `api/gateway/cmdb.topo_view.UpdateTopoAdjustStrategy/api/v1/update-topo-adjust-strategy/${instanceId}`,
      data,
      options
    )
  ).data;

export interface TopoViewApi_UpdateTopoAdjustStrategyRequestBody_strategy {
  /** 数据ID */
  dataId?: string;

  /** 调和参数 */
  args?: Record<string, any>;

  /** 排序值 */
  sort?: number;

  /** 处理方法 */
  method?: string;

  /** 策略名称 */
  name?: string;

  /** 编辑模式 */
  editMode?: "default" | "highLevel";
}
