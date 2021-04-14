import { http, HttpOptions } from "@next-core/brick-http";
import { ModelMicroAppDocument } from "../../../model/next_builder";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface SaveDocumentRequestBody {
  /** 文档Id，全局唯一 */
  documentId?: string;

  /** 作者 */
  author?: string;

  /** 文档标题 */
  name: string;

  /** 文档内容 */
  content?: string;

  /** 关联小产品 id */
  relatedMicroAppId: string;

  /** 关联路由别名数组 */
  relatedRouteAliases?: string[];

  /** 文档顺序 */
  sort?: number;

  /** 文档状态 */
  status?: "editing" | "released";

  /** 上级文档 */
  parent?: SaveDocumentRequestBody_parent;
}

/** 保存后的文档，不返回parent和children */
export type SaveDocumentResponseBody = Partial<ModelMicroAppDocument>;

/**
 * @description 保存文档(已存在文档则更新,根据documentId来判断是否是旧文档)
 * @endpoint PUT /api/v1/document/save
 */
export const saveDocument = async (
  data: SaveDocumentRequestBody,
  options?: HttpOptions
): Promise<SaveDocumentResponseBody> =>
  /**! @contract easyops.api.next_builder.document.SaveDocument */ (
    await http.put<ResponseBodyWrapper<SaveDocumentResponseBody>>(
      "api/gateway/next_builder.document.SaveDocument/api/v1/document/save",
      data,
      options
    )
  ).data;

export interface SaveDocumentRequestBody_parent {
  /** 实例Id */
  instanceId?: string;
}
