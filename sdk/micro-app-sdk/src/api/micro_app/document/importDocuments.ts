import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstalledMicroAppDocument } from "../../../model/micro_app";

export interface DocumentApi_ImportDocumentsRequestBody {
  /** 文档列表 */
  documents?: Partial<ModelInstalledMicroAppDocument>[];
}

/**
 * @description 导入小产品文档
 * @endpoint POST /api/micro_app/v1/document/import
 */
export const DocumentApi_importDocuments = (
  data: DocumentApi_ImportDocumentsRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.document.ImportDocuments */ http.post<void>(
    "api/gateway/micro_app.document.ImportDocuments/api/micro_app/v1/document/import",
    data,
    options
  );
