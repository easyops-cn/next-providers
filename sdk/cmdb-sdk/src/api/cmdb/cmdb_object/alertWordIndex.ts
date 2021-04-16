import { http, HttpOptions } from "@next-core/brick-http";
import { ModelWordIndexDenied } from "../../../model/cmdb";

export interface CmdbObjectApi_AlertWordIndexRequestBody {
  /** 当为 true 时，不纳入全文搜索 */
  wordIndexDenied: boolean;

  /** 属性wordIndexDenied信息 */
  attrList: Partial<ModelWordIndexDenied>[];
}

/**
 * @description 模型及属性全文索引配置
 * @endpoint post /object_word_index/:object_id
 */
export const CmdbObjectApi_alertWordIndex = (
  object_id: string | number,
  data: CmdbObjectApi_AlertWordIndexRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.cmdb_object.AlertWordIndex */ http.post<void>(
    `api/gateway/cmdb.cmdb_object.AlertWordIndex/object_word_index/${object_id}`,
    data,
    options
  );
