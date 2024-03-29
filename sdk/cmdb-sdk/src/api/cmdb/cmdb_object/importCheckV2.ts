import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject, ModelImportResult } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CmdbObjectApi_ImportCheckV2RequestBody {
  /** 模型列表 */
  object_list: Partial<ModelCmdbObject>[];

  /** 忽略对端关系不存在错误 */
  ignore_dst_relation?: boolean;
}

export interface CmdbObjectApi_ImportCheckV2ResponseBody {
  /** 导入结果列表 */
  import_result: Partial<ModelImportResult>[];
}

/**
 * @description 批量导入模型检查v2
 * @endpoint POST /v2/object_import_check
 */
export const CmdbObjectApi_importCheckV2 = async (
  data: CmdbObjectApi_ImportCheckV2RequestBody,
  options?: HttpOptions
): Promise<CmdbObjectApi_ImportCheckV2ResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.ImportCheckV2@1.2.0 */ (
    await http.post<
      ResponseBodyWrapper<CmdbObjectApi_ImportCheckV2ResponseBody>
    >(
      "api/gateway/cmdb.cmdb_object.ImportCheckV2/v2/object_import_check",
      data,
      options
    )
  ).data;
