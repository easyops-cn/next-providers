import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ColumnInstanceApi_ColumnInstanceCountRequestParams {
  /** 列模型ID列表，不传则获取所有列模型实例数量 */
  objectIds?: string;
}

export type ColumnInstanceApi_ColumnInstanceCountResponseBody = Record<
  string,
  any
>;

/**
 * @description 获取列模型实例数量
 * @endpoint GET /column_object_count
 */
export const ColumnInstanceApi_columnInstanceCount = async (
  params: ColumnInstanceApi_ColumnInstanceCountRequestParams,
  options?: HttpOptions
): Promise<ColumnInstanceApi_ColumnInstanceCountResponseBody> =>
  /**! @contract easyops.api.cmdb.column_instance.ColumnInstanceCount@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<ColumnInstanceApi_ColumnInstanceCountResponseBody>
    >(
      "api/gateway/cmdb.column_instance.ColumnInstanceCount/column_object_count",
      { ...options, params }
    )
  ).data;
