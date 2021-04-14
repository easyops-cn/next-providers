import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject } from "../../../model/cmdb";

export interface ExportObjectV2RequestBody {
  /** 资源模型ID列表 */
  objectIds: string[];
}

export interface ExportObjectV2ResponseBody {
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
export const exportObjectV2 = (
  data: ExportObjectV2RequestBody,
  options?: HttpOptions
): Promise<ExportObjectV2ResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.ExportObjectV2 */ http.post<ExportObjectV2ResponseBody>(
    "api/gateway/cmdb.cmdb_object.ExportObjectV2/v2/object_export",
    data,
    options
  );
