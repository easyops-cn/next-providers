import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_CountAllRequestParams {
  /** 资源模型ID列表，不传则获取所有模型 */
  objectIds?: string;
}

export type InstanceApi_CountAllResponseBody = Record<string, any>;

/**
 * @description 获取所有模型实例数量
 * @endpoint GET /object_count_all
 */
export const InstanceApi_countAll = async (
  params: InstanceApi_CountAllRequestParams,
  options?: HttpOptions
): Promise<InstanceApi_CountAllResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.CountAll */ (
    await http.get<ResponseBodyWrapper<InstanceApi_CountAllResponseBody>>(
      "api/gateway/cmdb.instance.CountAll/object_count_all",
      { ...options, params }
    )
  ).data;
