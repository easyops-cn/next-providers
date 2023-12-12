import { http, HttpOptions } from "@next-core/brick-http";
import { ModelCmdbObject } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CmdbObjectApi_ParseExcelRequestBody {
  /** excel文件 */
  attachment: File;
}

export interface CmdbObjectApi_ParseExcelResponseBody {
  /** 模型列表 */
  object_list?: Partial<ModelCmdbObject>[];
}

/**
 * @description parse excel (导入excel文件解析模型)
 * @endpoint POST /object_excel/parse
 */
export const CmdbObjectApi_parseExcel = async (
  data: CmdbObjectApi_ParseExcelRequestBody,
  options?: HttpOptions
): Promise<CmdbObjectApi_ParseExcelResponseBody> => {
  /**! @contract easyops.api.cmdb.cmdb_object.ParseExcel@1.1.0 */ const _formData =
    new FormData();
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      const k = `${key}[]`;
      value.forEach((v) => {
        _formData.append(k, v);
      });
    } else {
      _formData.append(key, value);
    }
  }
  return (
    await http.post<ResponseBodyWrapper<CmdbObjectApi_ParseExcelResponseBody>>(
      "api/gateway/cmdb.cmdb_object.ParseExcel/object_excel/parse",
      _formData,
      options
    )
  ).data;
};
