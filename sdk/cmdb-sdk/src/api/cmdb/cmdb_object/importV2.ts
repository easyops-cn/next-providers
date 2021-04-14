import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject, ModelImportResult } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ImportV2RequestBody {
  /** 忽略对端关系不存在错误 */
  ignore_dst_relation?: boolean;

  /** 模型列表 */
  object_list: Partial<ModelCmdbObject>[];
}

export interface ImportV2ResponseBody {
  /** 导入结果列表 */
  import_result: Partial<ModelImportResult>[];
}

/**
 * @description 批量导入模型v2
 * @endpoint POST /v2/object_import
 */
export const importV2 = async (
  data: ImportV2RequestBody,
  options?: HttpOptions
): Promise<ImportV2ResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.ImportV2 */ (
    await http.post<ResponseBodyWrapper<ImportV2ResponseBody>>(
      "api/gateway/cmdb.cmdb_object.ImportV2/v2/object_import",
      data,
      options
    )
  ).data;
