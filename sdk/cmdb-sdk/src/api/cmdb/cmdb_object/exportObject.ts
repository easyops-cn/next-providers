import { http, HttpOptions } from '@next-core/brick-http';
import { ModelCmdbObject } from '../../../model/cmdb';

export interface ExportObjectRequestParams {
  /** 资源模型ID,用分号隔开;为空时查询所有的资源模型 */
  object_ids: string;
}

export interface ExportObjectResponseBody {
  /** 模型列表 */
  data?: Partial<ModelCmdbObject>[];

  /** 返回码 */
  code?: number;

  /** 错误消息 */
  error?: string;

  /** 返回信息 */
  message?: string;
}

/**
 * @description 模型导出
 * @endpoint get /object_export
 */
export const exportObject = (
  params: ExportObjectRequestParams,
  options?: HttpOptions
): Promise<ExportObjectResponseBody> =>
  http.get<ExportObjectResponseBody>(
    'api/gateway/cmdb.cmdb_object.ExportObject/object_export',
    { ...options, params }
  );
