import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface BusinessInstanceApi_GetBusinessGraphResponseBody {
  /** 根节点 */
  topic_vertices?: Record<string, any>[];

  /** 节点 */
  vertices?: Record<string, any>[];

  /** 边 */
  edges?: Record<string, any>[];
}

/**
 * @description 查询应用系统子系统拓扑 (查询应用系统展示出树状或者拓扑状的数据结构)
 * @endpoint GET /systems/_graph_mode
 */
export const BusinessInstanceApi_getBusinessGraph = async (
  options?: HttpOptions
): Promise<BusinessInstanceApi_GetBusinessGraphResponseBody> =>
  /**! @contract easyops.api.cmdb.business_instance.GetBusinessGraph */ (
    await http.get<
      ResponseBodyWrapper<BusinessInstanceApi_GetBusinessGraphResponseBody>
    >(
      "api/gateway/cmdb.business_instance.GetBusinessGraph/systems/_graph_mode",
      options
    )
  ).data;
