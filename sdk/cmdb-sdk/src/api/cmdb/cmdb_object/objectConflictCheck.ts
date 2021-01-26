import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject, ModelImportResult } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ObjectConflictCheckRequestBody {
  /** 导入模型列表 */
  import_object_list: Partial<ModelCmdbObject>[];

  /** 对比模型列表 */
  compare_object_list: Partial<ModelCmdbObject>[];
}

export interface ObjectConflictCheckResponseBody {
  /** 检查结果列表 */
  import_result: Partial<ModelImportResult>[];
}

/**
 * @description 模型冲突检查
 * @endpoint POST /object_conflict_check
 */
export const objectConflictCheck = async (
  data: ObjectConflictCheckRequestBody,
  options?: HttpOptions
): Promise<ObjectConflictCheckResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<ObjectConflictCheckResponseBody>>(
      "api/gateway/cmdb.cmdb_object.ObjectConflictCheck/object_conflict_check",
      data,
      options
    )
  ).data;
