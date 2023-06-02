import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstanceQueryStrategy } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InstanceApi_CreateInstanceQueryStrategyRequestBody {
  /** 策略名称 */
  name: string;

  /** 策略类型(org 或者 user) */
  type?: string;

  /** 策略对应的实例类型(instance 或者 relation) */
  instance_type?: string;

  /** 策略内容(包含查询条件和返回的字段,供前端使用，后台逻辑暂时不做校验) */
  query: Record<string, any>;

  /** 显示字段 */
  fields?: string[];

  /** 访问白名单 */
  readAuthorizers?: string[];

  /** 修改白名单 */
  updateAuthorizers?: string[];

  /** 删除白名单 */
  deleteAuthorizers?: string[];
}

export type InstanceApi_CreateInstanceQueryStrategyResponseBody =
  Partial<ModelInstanceQueryStrategy>;

/**
 * @description 创建实例查询策略
 * @endpoint POST /object/:objectId/query/strategy
 */
export const InstanceApi_createInstanceQueryStrategy = async (
  objectId: string | number,
  data: InstanceApi_CreateInstanceQueryStrategyRequestBody,
  options?: HttpOptions
): Promise<InstanceApi_CreateInstanceQueryStrategyResponseBody> =>
  /**! @contract easyops.api.cmdb.instance.CreateInstanceQueryStrategy@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<InstanceApi_CreateInstanceQueryStrategyResponseBody>
    >(
      `api/gateway/cmdb.instance.CreateInstanceQueryStrategy/object/${objectId}/query/strategy`,
      data,
      options
    )
  ).data;
