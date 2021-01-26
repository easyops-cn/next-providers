import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstanceQueryStrategy } from "../../../model/cmdb";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CreateInstanceQueryStrategyRequestBody {
  /** 策略名称 */
  name?: string;

  /** 策略类型(org 或者 user) */
  type?: string;

  /** 策略对应的实例类型(instance 或者 relation) */
  instance_type?: string;

  /** 策略内容(包含查询条件和返回的字段,供前端使用，后台逻辑暂时不做校验) */
  query: Record<string, any>;
}

export type CreateInstanceQueryStrategyResponseBody = Partial<ModelInstanceQueryStrategy>;

/**
 * @description 创建实例查询策略
 * @endpoint POST /object/:objectId/query/strategy
 */
export const createInstanceQueryStrategy = async (
  objectId: string | number,
  data: CreateInstanceQueryStrategyRequestBody,
  options?: HttpOptions
): Promise<CreateInstanceQueryStrategyResponseBody> =>
  (
    await http.post<
      ResponseBodyWrapper<CreateInstanceQueryStrategyResponseBody>
    >(
      `api/gateway/cmdb.instance.CreateInstanceQueryStrategy/object/${objectId}/query/strategy`,
      data,
      options
    )
  ).data;
