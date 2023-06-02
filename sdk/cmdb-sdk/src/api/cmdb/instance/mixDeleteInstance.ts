import { http, HttpOptions } from "@next-core/brick-http";

export interface InstanceApi_MixDeleteInstanceRequestBody {
  /** 实例列表 */
  data: InstanceApi_MixDeleteInstanceRequestBody_data_item[];
}

/**
 * @description 批量删除实例 (提供多模型实例混合删除接口(此接口是保证事务的))
 * @endpoint POST /mix/object/instance/delete
 */
export const InstanceApi_mixDeleteInstance = (
  data: InstanceApi_MixDeleteInstanceRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.instance.MixDeleteInstance@1.0.0 */ http.post<void>(
    "api/gateway/cmdb.instance.MixDeleteInstance/mix/object/instance/delete",
    data,
    options
  );

export interface InstanceApi_MixDeleteInstanceRequestBody_data_item {
  /** 模型Id */
  _object_id?: string;

  /** 实例Id */
  instanceId?: string;
}
