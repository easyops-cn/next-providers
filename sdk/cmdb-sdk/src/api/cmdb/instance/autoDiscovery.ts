import { http, HttpOptions } from "@next-core/brick-http";

/** 请求体 */
export type AutoDiscoveryRequestBody = AutoDiscoveryRequestBody_item[];

export interface AutoDiscoveryResponseBody {
  /** 返回码 */
  code: number;

  /** 错误信息 */
  error: string;

  /** 返回消息 */
  message: string;

  /** data */
  data: AutoDiscoveryResponseBody_data_item[];
}

/**
 * @description 实例自动发现的接口
 * @endpoint POST /object/:objectId/instance/_import-json
 */
export const autoDiscovery = (
  objectId: string | number,
  data: AutoDiscoveryRequestBody,
  options?: HttpOptions
): Promise<AutoDiscoveryResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.AutoDiscovery */ http.post<AutoDiscoveryResponseBody>(
    `api/gateway/cmdb.instance.AutoDiscovery/object/${objectId}/instance/_import-json`,
    data,
    options
  );

export interface AutoDiscoveryRequestBody_item {
  /** 筛选器 */
  filter?: Record<string, any>;

  /** 更新数据 */
  update?: Record<string, any>;

  /** 存在即更新 */
  upsert?: boolean;
}

export interface AutoDiscoveryResponseBody_data_item {
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
