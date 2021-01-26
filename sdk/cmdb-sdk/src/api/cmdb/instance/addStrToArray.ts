import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AddStrToArrayRequestBody {
  /** 属性key(仅支持arr类型属性) */
  attr_id: string;

  /** 与实例搜索query一致,将对search到的所有实例操作 */
  query: Record<string, any>;

  /** append的值 */
  values: string[];
}

export type AddStrToArrayResponseBody = AddStrToArrayResponseBody_item[];

/**
 * @description append数据到实例arr属性内 (append数据到实例arr属性内)
 * @endpoint POST /object/:objectId/instance/add_str_to_array
 */
export const addStrToArray = async (
  objectId: string | number,
  data: AddStrToArrayRequestBody,
  options?: HttpOptions
): Promise<AddStrToArrayResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<AddStrToArrayResponseBody>>(
      `api/gateway/cmdb.instance.AddStrToArray/object/${objectId}/instance/add_str_to_array`,
      data,
      options
    )
  ).data;

export interface AddStrToArrayResponseBody_item {
  /** 实例Id */
  instanceId: string;

  /** 属性值 */
  values: string[];
}
