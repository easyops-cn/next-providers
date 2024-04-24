import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface TopoViewApi_CreateTopoViewVersionRequestBody {
  /** 拓扑视图ID */
  viewId: string;

  /** 版本 */
  version: string;

  /** 是否同时保存数据快照 */
  isSaveSnapshot?: boolean;

  /** 节点数据 */
  nodes?: Record<string, any>[];

  /** 边数据 */
  edges?: Record<string, any>[];

  /** 是否发送审批通知 */
  isNotify?: boolean;

  /** 是否通用逻辑， 汉口开关isNotify打开时，为false， 汉口开关关闭时, 恒为true, 与汉口的开关互斥 */
  isGeneral?: boolean;
}

export interface TopoViewApi_CreateTopoViewVersionResponseBody {
  /** 实例ID */
  instanceId?: string;
}

/**
 * @description 创建拓扑视图版本
 * @endpoint POST /api/v1/create-topo-view-version
 */
export const TopoViewApi_createTopoViewVersion = async (
  data: TopoViewApi_CreateTopoViewVersionRequestBody,
  options?: HttpOptions
): Promise<TopoViewApi_CreateTopoViewVersionResponseBody> =>
  /**! @contract easyops.api.cmdb.topo_view.CreateTopoViewVersion@1.0.3 */ (
    await http.post<
      ResponseBodyWrapper<TopoViewApi_CreateTopoViewVersionResponseBody>
    >(
      "api/gateway/cmdb.topo_view.CreateTopoViewVersion/api/v1/create-topo-view-version",
      data,
      options
    )
  ).data;
