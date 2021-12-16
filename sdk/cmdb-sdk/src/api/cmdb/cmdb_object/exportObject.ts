import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject } from "../../../model/cmdb";

export interface CmdbObjectApi_ExportObjectRequestParams {
  /** 资源模型ID,用分号隔开;为空时查询所有的资源模型 */
  object_ids: string;
}

export interface CmdbObjectApi_ExportObjectResponseBody {
  /** 模型列表 */
  data?: Partial<ModelCmdbObject>[];

  /** 返回码 */
  code?: number;

  /** 错误消息 */
  error?: string;

  /** 返回信息 */
  message?: string;
}

/**
 * @description 模型导出
 * @endpoint get /object_export
 */
export const CmdbObjectApi_exportObject = (
  params: CmdbObjectApi_ExportObjectRequestParams,
  options?: HttpOptions
): Promise<CmdbObjectApi_ExportObjectResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.ExportObject@1.1.0 */ http.get<CmdbObjectApi_ExportObjectResponseBody>(
    "api/gateway/cmdb.cmdb_object.ExportObject/object_export",
    { ...options, params }
  );
