import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_AddStrToSetRequestBody {
  /** 属性key(仅支持arr类型属性) */
  attr_id: string;

  /** 与实例搜索query一致,将对search到的所有实例操作 */
  query: Record<string, any>;

  /** append的值 */
  values: string[];
}

export type InstanceApi_AddStrToSetResponseBody =
  InstanceApi_AddStrToSetResponseBody_item[];

/**
 * @description append数据到实例arr属性内(set) (append数据到实例arr属性内,数组中已存在此值的话,不会被append进去)
 * @endpoint POST /object/:objectId/instance/add_str_to_set
 */
export const InstanceApi_addStrToSet = async (
  objectId: string | number,
  data: InstanceApi_AddStrToSetRequestBody,
  options?: HttpOptions
): Promise<InstanceApi_AddStrToSetResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.AddStrToSet@1.0.0 */ (
    await http.post<ResponseBodyWrapper<InstanceApi_AddStrToSetResponseBody>>(
      `api/gateway/cmdb.instance.AddStrToSet/object/${objectId}/instance/add_str_to_set`,
      data,
      options
    )
  ).data;

export interface InstanceApi_AddStrToSetResponseBody_item {
  /** 实例Id */
  instanceId: string;

  /** 属性值 */
  values: string[];
}
