import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject } from "../../../model/cmdb";

export interface CmdbObjectApi_ImportV3RequestBody {
  /** 忽略对端关系不存在错误 */
  ignore_dst_relation?: boolean;

  /** 模型列表 */
  object_list: Partial<ModelCmdbObject>[];
}

/**
 * @description 批量导入模型v3
 * @endpoint POST /v3/object_import
 */
export const CmdbObjectApi_importV3 = (
  data: CmdbObjectApi_ImportV3RequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.cmdb_object.ImportV3@1.1.0 */ http.post<void>(
    "api/gateway/cmdb.cmdb_object.ImportV3/v3/object_import",
    data,
    options
  );
