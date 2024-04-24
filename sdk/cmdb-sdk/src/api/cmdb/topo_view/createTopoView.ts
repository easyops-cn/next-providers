import { http, HttpOptions } from "@next-core/brick-http";
import { ModelTopoCenterView } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface TopoViewApi_CreateTopoViewRequestBody {
  /** 视图 */
  view?: Partial<ModelTopoCenterView>;

  /** 模版信息 */
  template?: TopoViewApi_CreateTopoViewRequestBody_template;
}

export interface TopoViewApi_CreateTopoViewResponseBody {
  /** 视图id */
  viewId?: string;
}

/**
 * @description 创建拓扑视图
 * @endpoint POST /api/v1/create-topo-view
 */
export const TopoViewApi_createTopoView = async (
  data: TopoViewApi_CreateTopoViewRequestBody,
  options?: HttpOptions
): Promise<TopoViewApi_CreateTopoViewResponseBody> =>
  /**! @contract easyops.api.cmdb.topo_view.CreateTopoView@1.0.2 */ (
    await http.post<
      ResponseBodyWrapper<TopoViewApi_CreateTopoViewResponseBody>
    >(
      "api/gateway/cmdb.topo_view.CreateTopoView/api/v1/create-topo-view",
      data,
      options
    )
  ).data;

export interface TopoViewApi_CreateTopoViewRequestBody_template {
  /** 模版ID */
  id?: string;

  /** 请求参数 */
  args?: TopoViewApi_CreateTopoViewRequestBody_template_args_item[];
}

export interface TopoViewApi_CreateTopoViewRequestBody_template_args_item {
  /** 参数id */
  id?: string;

  /** 参数值 */
  value?: any;
}
