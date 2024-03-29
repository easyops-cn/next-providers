import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject, ModelImportResult } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CmdbObjectApi_ImportV2RequestBody {
  /** 忽略对端关系不存在错误 */
  ignore_dst_relation?: boolean;

  /** 模型列表 */
  object_list: Partial<ModelCmdbObject>[];
}

export interface CmdbObjectApi_ImportV2ResponseBody {
  /** 导入结果列表 */
  import_result: Partial<ModelImportResult>[];
}

/**
 * @description 批量导入模型v2
 * @endpoint POST /v2/object_import
 */
export const CmdbObjectApi_importV2 = async (
  data: CmdbObjectApi_ImportV2RequestBody,
  options?: HttpOptions
): Promise<CmdbObjectApi_ImportV2ResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.ImportV2@1.1.0 */ (
    await http.post<ResponseBodyWrapper<CmdbObjectApi_ImportV2ResponseBody>>(
      "api/gateway/cmdb.cmdb_object.ImportV2/v2/object_import",
      data,
      options
    )
  ).data;
