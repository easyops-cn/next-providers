import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_GetListDisplayViewResponseBody {
  /** 要创建的模型 */
  object_id?: string;

  /** 排序字段 */
  sortFields?: InstanceApi_GetListDisplayViewResponseBody_sortFields_item[];
}

/**
 * @description 获取cmdb实例列表的展示字段规则、排序规则。
 * @endpoint GET /object/:object_id/list/view
 */
export const InstanceApi_getListDisplayView = async (
  object_id: string | number,
  options?: HttpOptions
): Promise<InstanceApi_GetListDisplayViewResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.GetListDisplayView@1.0.1 */ (
    await http.get<
      ResponseBodyWrapper<InstanceApi_GetListDisplayViewResponseBody>
    >(
      `api/gateway/cmdb.instance.GetListDisplayView/object/${object_id}/list/view`,
      options
    )
  ).data;

export interface InstanceApi_GetListDisplayViewResponseBody_sortFields_item {
  /** 要排序的字段 */
  field?: string;

  /** -1为降序，0为默认，1为升序 */
  order?: number;
}
