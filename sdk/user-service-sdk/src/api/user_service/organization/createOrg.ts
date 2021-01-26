import { http, HttpOptions } from "@next-core/brick-http";
import { ModelOrgInfo } from "../../../model/user_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CreateOrgRequestBody {
  /** org */
  id?: number;

  /** 名称 */
  name?: string;

  /** 备注 */
  memo?: string;

  /** 模型命名空间 */
  namespaces?: string[];

  /** 过期日期(天数) */
  expired_days?: number;

  /** 版本类型 */
  edition: string;
}

export type CreateOrgResponseBody = Partial<ModelOrgInfo> &
  ModelOrgInfo_partial;

/**
 * @description 创建Org[内部]
 * @endpoint POST /api/v1/org
 */
export const createOrg = async (
  data: CreateOrgRequestBody,
  options?: HttpOptions
): Promise<CreateOrgResponseBody> =>
  (
    await http.post<ResponseBodyWrapper<CreateOrgResponseBody>>(
      "api/gateway/user_service.organization.CreateOrg/api/v1/org",
      data,
      options
    )
  ).data;

export interface ModelOrgInfo_partial {
  /** org */
  id: number;

  /** 过期时间戳, -1为永不过期 */
  expires: number;

  /** 创建日期 */
  createAt: string;

  /** 是否可用 */
  valid: boolean;

  /** 更新时间戳 */
  ts: number;
}
