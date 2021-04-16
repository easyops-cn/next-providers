import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface IndexApi_CreateIndexRequestBody {
  /** 属性Id */
  propertyIds: string[];

  /** 是否唯一 */
  unique: boolean;
}

export interface IndexApi_CreateIndexResponseBody {
  /** 索引名称,唯一标识 */
  indexName?: string;
}

/**
 * @description 创建索引
 * @endpoint POST /object/:objectId/index
 */
export const IndexApi_createIndex = async (
  objectId: string | number,
  data: IndexApi_CreateIndexRequestBody,
  options?: HttpOptions
): Promise<IndexApi_CreateIndexResponseBody> =>
  /**! @contract easyops.api.cmdb.index.CreateIndex */ (
    await http.post<ResponseBodyWrapper<IndexApi_CreateIndexResponseBody>>(
      `api/gateway/cmdb.index.CreateIndex/object/${objectId}/index`,
      data,
      options
    )
  ).data;
