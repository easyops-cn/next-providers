import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_UpdateListDisplayViewResponseBody {
  /** 要创建的模型 */
  object_id?: string;

  /** 排序字段 */
  sortFields?: InstanceApi_UpdateListDisplayViewResponseBody_sortFields_item[];
}

/**
 * @description 更新cmdb实例列表的展示字段规则、排序规则。
 * @endpoint POST /object/:object_id/list/view
 */
export const InstanceApi_updateListDisplayView = async (
  object_id: string | number,
  options?: HttpOptions
): Promise<InstanceApi_UpdateListDisplayViewResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.UpdateListDisplayView@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstanceApi_UpdateListDisplayViewResponseBody>
    >(
      `api/gateway/cmdb.instance.UpdateListDisplayView/object/${object_id}/list/view`,
      undefined,
      options
    )
  ).data;

export interface InstanceApi_UpdateListDisplayViewResponseBody_sortFields_item {
  /** 要排序的字段 */
  field?: string;

  /** 只能为降序desc、升序asc */
  order?: number;
}
