import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject } from "../../../model/cmdb";

export interface CmdbObjectApi_ExportObjectV2RequestBody {
  /** 资源模型ID列表 */
  objectIds: string[];
}

export interface CmdbObjectApi_ExportObjectV2ResponseBody {
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
 * @description 模型导出V2
 * @endpoint post /v2/object_export
 */
export const CmdbObjectApi_exportObjectV2 = (
  data: CmdbObjectApi_ExportObjectV2RequestBody,
  options?: HttpOptions
): Promise<CmdbObjectApi_ExportObjectV2ResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.ExportObjectV2@1.1.0 */ http.post<CmdbObjectApi_ExportObjectV2ResponseBody>(
    "api/gateway/cmdb.cmdb_object.ExportObjectV2/v2/object_export",
    data,
    options
  );
