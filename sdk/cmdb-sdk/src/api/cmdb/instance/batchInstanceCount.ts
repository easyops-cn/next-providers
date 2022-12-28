import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_BatchInstanceCountRequestBody {
  /** 模型列表 */
  objectList?: InstanceApi_BatchInstanceCountRequestBody_objectList_item[];
}

export interface InstanceApi_BatchInstanceCountResponseBody {
  /** 模型信息列表 */
  objectInfo?: InstanceApi_BatchInstanceCountResponseBody_objectInfo_item[];
}

/**
 * @description 获取多个模型指定过滤条件对应的实例数量
 * @endpoint POST /v1/batch/instance/count
 */
export const InstanceApi_batchInstanceCount = async (
  data: InstanceApi_BatchInstanceCountRequestBody,
  options?: HttpOptions
): Promise<InstanceApi_BatchInstanceCountResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.BatchInstanceCount@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstanceApi_BatchInstanceCountResponseBody>
    >(
      "api/gateway/cmdb.instance.BatchInstanceCount/v1/batch/instance/count",
      data,
      options
    )
  ).data;

export interface InstanceApi_BatchInstanceCountRequestBody_objectList_item {
  /** 模型id */
  objectId?: string;

  /** 搜索条件, 不传则计数所有实例 */
  query?: Record<string, any>;
}

export interface InstanceApi_BatchInstanceCountResponseBody_objectInfo_item {
  /** 模型id */
  objectId?: string;

  /** 模型实例数量 */
  count?: number;
}
