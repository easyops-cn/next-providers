import { http, HttpOptions } from "@next-core/brick-http";

export interface ImportInstanceWithJsonRequestBody {
  /** 导入实例的字段 */
  keys: string[];

  /** json文件 */
  attachment: File;
}

export interface ImportInstanceWithJsonResponseBody {
  /** 返回码,此返回码始终为0,具体错误要去data里看 */
  code: number;

  /** 错误信息 */
  error: string;

  /** 返回消息 */
  message: string;

  /** data */
  data: ImportInstanceWithJsonResponseBody_data_item[];
}

/**
 * @description 使用json文件导入实例 (此接口以multipart/form-data方式提交数据)
 * @endpoint POST /import/object/:object_id/instance/json
 */
export const importInstanceWithJson = (
  object_id: string | number,
  data: ImportInstanceWithJsonRequestBody,
  options?: HttpOptions
): Promise<ImportInstanceWithJsonResponseBody> => {
  const _formData = new FormData();
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
  return http.post<ImportInstanceWithJsonResponseBody>(
    `api/gateway/cmdb.instance.ImportInstanceWithJson/import/object/${object_id}/instance/json`,
    _formData,
    options
  );
};

export interface ImportInstanceWithJsonResponseBody_data_item {
  /** 实例Id */
  instanceId?: string;

  /** 状态码 */
  code?: number;

  /** 是否匹配到数据 */
  matched?: boolean;

  /** 是否有效 */
  effected?: boolean;

  /** 错误信息 */
  message?: string;
}
