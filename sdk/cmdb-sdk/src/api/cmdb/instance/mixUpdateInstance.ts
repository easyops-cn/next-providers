import { http, HttpOptions } from "@next-core/brick-http";

export interface MixUpdateInstanceRequestBody {
  /** 实例列表,实例数据里需要有_object_id,instanceId字段 */
  data: Record<string, any>[];
}

/**
 * @description 批量更新实例 (提供多模型实例混合更新接口,不支持关系更新(此接口是保证事务的))
 * @endpoint POST /mix/object/instance/update
 */
export const mixUpdateInstance = (
  data: MixUpdateInstanceRequestBody,
  options?: HttpOptions
): Promise<void> =>
  http.post<void>(
    "api/gateway/cmdb.instance.MixUpdateInstance/mix/object/instance/update",
    data,
    options
  );
