import { http, HttpOptions } from '@next-core/brick-http';
import { ModelCmdbObject } from '../../../model/cmdb';

export interface GetObjectAllRequestParams {
  /** 按模型Id,模型id模糊匹配 */
  q?: string;

  /** 模型Id, 使用,分隔 */
  objectIds?: string;

  /** system */
  system?: string;

  /** 分类 */
  category?: string;

  /** 忽略模型字段权限校验 */
  ignoreAttrPermission?: boolean;

  /** system是否为空，为true时会忽略参数system */
  emptySystem?: boolean;

  /** 是否是抽象模型,true/false,为空则不过滤 */
  isAbstract?: string;

  /** 按父模型过滤 */
  parentObjectId?: string;
}

export interface GetObjectAllResponseBody {
  /** 返回码 */
  code: number;

  /** 错误信息 */
  error: string;

  /** 返回消息 */
  message: string;

  /** 模型列表 */
  data: Partial<ModelCmdbObject>[];
}

/**
 * @description 获取所有模型
 * @endpoint GET /object_all
 */
export const getObjectAll = (
  params: GetObjectAllRequestParams,
  options?: HttpOptions
): Promise<GetObjectAllResponseBody> =>
  http.get<GetObjectAllResponseBody>(
    'api/gateway/cmdb.cmdb_object.GetObjectAll/object_all',
    { ...options, params }
  );
