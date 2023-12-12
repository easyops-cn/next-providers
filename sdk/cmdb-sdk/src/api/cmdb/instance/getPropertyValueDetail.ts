import { http, HttpOptions } from "@next-core/brick-http";
import { ModelPropertyValueDetail } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_GetPropertyValueDetailResponseBody {
  /** 属性值列表 */
  list: Partial<ModelPropertyValueDetail>[];
}

/**
 * @description 获取属性值列表
 * @endpoint GET /object/:object_id/field/:field
 */
export const InstanceApi_getPropertyValueDetail = async (
  object_id: string | number,
  field: string | number,
  options?: HttpOptions
): Promise<InstanceApi_GetPropertyValueDetailResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.GetPropertyValueDetail@1.1.0 */ (
    await http.get<
      ResponseBodyWrapper<InstanceApi_GetPropertyValueDetailResponseBody>
    >(
      `api/gateway/cmdb.instance.GetPropertyValueDetail/object/${object_id}/field/${field}`,
      options
    )
  ).data;
