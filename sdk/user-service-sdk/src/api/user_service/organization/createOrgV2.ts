import { http, HttpOptions } from "@next-core/brick-http";
import { ModelOrgInfo } from "../../../model/user_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface OrganizationApi_CreateOrgV2RequestBody {
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
}

export type OrganizationApi_CreateOrgV2ResponseBody = Partial<ModelOrgInfo> &
  ModelOrgInfo_partial_2;

/**
 * @description 创建OrgV2, 在mongoDB创建org信息
 * @endpoint POST /api/v2/org
 */
export const OrganizationApi_createOrgV2 = async (
  data: OrganizationApi_CreateOrgV2RequestBody,
  options?: HttpOptions
): Promise<OrganizationApi_CreateOrgV2ResponseBody> =>
  /**! @contract easyops.api.user_service.organization.CreateOrgV2@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<OrganizationApi_CreateOrgV2ResponseBody>
    >(
      "api/gateway/user_service.organization.CreateOrgV2/api/v2/org",
      data,
      options
    )
  ).data;

export interface ModelOrgInfo_partial_2 {
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
