import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject, ModelImportResult } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CmdbObjectApi_ObjectConflictCheckRequestBody {
  /** 导入模型列表 */
  import_object_list: Partial<ModelCmdbObject>[];

  /** 对比模型列表 */
  compare_object_list: Partial<ModelCmdbObject>[];
}

export interface CmdbObjectApi_ObjectConflictCheckResponseBody {
  /** 检查结果列表 */
  import_result: Partial<ModelImportResult>[];
}

/**
 * @description 模型冲突检查
 * @endpoint POST /object_conflict_check
 */
export const CmdbObjectApi_objectConflictCheck = async (
  data: CmdbObjectApi_ObjectConflictCheckRequestBody,
  options?: HttpOptions
): Promise<CmdbObjectApi_ObjectConflictCheckResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.ObjectConflictCheck@1.1.0 */ (
    await http.post<
      ResponseBodyWrapper<CmdbObjectApi_ObjectConflictCheckResponseBody>
    >(
      "api/gateway/cmdb.cmdb_object.ObjectConflictCheck/object_conflict_check",
      data,
      options
    )
  ).data;
