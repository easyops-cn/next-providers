import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetDetailRequestParams {
  /** 指定返回的fields（支持普通属性和关系，关系支持点分法获得多级字段），多个的话用逗号分隔（name,owner.instanceId,owner.name），* 代表所有普通属性。注意：建议都指定fields，按需拉取字段，不然有可能返回数据量太大而导致接口慢系统不稳定 */
  fields?: string;

  /** 是否返回实例的默认显示名称 */
  get_show_key?: boolean;
}

export type GetDetailResponseBody = Record<string, any>;

/**
 * @description 获取实例详情
 * @endpoint GET /object/:objectId/instance/:instanceId
 */
export const getDetail = async (
  objectId: string | number,
  instanceId: string | number,
  params: GetDetailRequestParams,
  options?: HttpOptions
): Promise<GetDetailResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<GetDetailResponseBody>>(
      `api/gateway/cmdb.instance.GetDetail/object/${objectId}/instance/${instanceId}`,
      { ...options, params }
    )
  ).data;
