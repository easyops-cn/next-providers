import { http, HttpOptions } from "@next-core/brick-http";
import { ModelOrgInfo } from "../../../model/user_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface OrganizationApi_CreateOrgRequestBody {
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

export type OrganizationApi_CreateOrgResponseBody = Partial<ModelOrgInfo> &
  ModelOrgInfo_partial;

/**
 * @description 创建Org[内部]
 * @endpoint POST /api/v1/org
 */
export const OrganizationApi_createOrg = async (
  data: OrganizationApi_CreateOrgRequestBody,
  options?: HttpOptions
): Promise<OrganizationApi_CreateOrgResponseBody> =>
  /**! @contract easyops.api.user_service.organization.CreateOrg@1.0.0 */ (
    await http.post<ResponseBodyWrapper<OrganizationApi_CreateOrgResponseBody>>(
      "api/gateway/logic.user_service/api/v1/org",
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
