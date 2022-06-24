import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_MixCreateInstanceRequestBody {
  /** 实例列表,实例数据里需要有_object_id字段 */
  data: Record<string, any>[];
}

export interface InstanceApi_MixCreateInstanceResponseBody {
  /** 实例Id列表,与请求的顺序一致 */
  list: string[];
}

/**
 * @description 批量创建实例 (提供多模型实例混合创建接口,不支持关系创建(此接口是保证事务的).如果你想创建同一种模型的多个实例.请参考import_instance.)
 * @endpoint POST /mix/object/instance/create
 */
export const InstanceApi_mixCreateInstance = async (
  data: InstanceApi_MixCreateInstanceRequestBody,
  options?: HttpOptions
): Promise<InstanceApi_MixCreateInstanceResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.MixCreateInstance@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstanceApi_MixCreateInstanceResponseBody>
    >(
      "api/gateway/cmdb.instance.MixCreateInstance/mix/object/instance/create",
      data,
      options
    )
  ).data;
