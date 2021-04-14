import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CreateIndexRequestBody {
  /** 属性Id */
  propertyIds: string[];

  /** 是否唯一 */
  unique: boolean;
}

export interface CreateIndexResponseBody {
  /** 索引名称,唯一标识 */
  indexName?: string;
}

/**
 * @description 创建索引
 * @endpoint POST /object/:objectId/index
 */
export const createIndex = async (
  objectId: string | number,
  data: CreateIndexRequestBody,
  options?: HttpOptions
): Promise<CreateIndexResponseBody> =>
  /**! @contract easyops.api.cmdb.index.CreateIndex */ (
    await http.post<ResponseBodyWrapper<CreateIndexResponseBody>>(
      `api/gateway/cmdb.index.CreateIndex/object/${objectId}/index`,
      data,
      options
    )
  ).data;
