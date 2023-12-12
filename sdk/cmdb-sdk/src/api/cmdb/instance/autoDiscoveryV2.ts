import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_AutoDiscoveryV2RequestBody {
  /** 更新时是否忽略只读字段 */
  ignoreReadonlyFields?: boolean;

  /** 禁止导入时通过关系嵌套创建实例 */
  disableNestedCreateInstance?: boolean;

  /** 导入详情 */
  importData: InstanceApi_AutoDiscoveryV2RequestBody_importData_item[];
}

export interface InstanceApi_AutoDiscoveryV2ResponseBody {
  /** 导入详情 */
  importDetails?: InstanceApi_AutoDiscoveryV2ResponseBody_importDetails_item[];
}

/**
 * @description 自动发现的接口V2版本，主要将body参数改成非数组
 * @endpoint POST /v2/object/:objectId/instance/_import-json
 */
export const InstanceApi_autoDiscoveryV2 = async (
  objectId: string | number,
  data: InstanceApi_AutoDiscoveryV2RequestBody,
  options?: HttpOptions
): Promise<InstanceApi_AutoDiscoveryV2ResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.AutoDiscoveryV2@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstanceApi_AutoDiscoveryV2ResponseBody>
    >(
      `api/gateway/cmdb.instance.AutoDiscoveryV2/v2/object/${objectId}/instance/_import-json`,
      data,
      options
    )
  ).data;

export interface InstanceApi_AutoDiscoveryV2RequestBody_importData_item {
  /** 筛选器 */
  filter?: Record<string, any>;

  /** 更新数据 */
  update?: Record<string, any>;

  /** 存在即更新 */
  upsert?: boolean;
}

export interface InstanceApi_AutoDiscoveryV2ResponseBody_importDetails_item {
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
