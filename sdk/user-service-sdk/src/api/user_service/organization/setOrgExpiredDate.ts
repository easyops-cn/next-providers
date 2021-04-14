import { http, HttpOptions } from "@next-core/brick-http";

export interface SetOrgExpiredDateRequestBody {
  /** 过期日期 */
  expired_date: string;
}

/**
 * @description 设置Org过期日期[内部]
 * @endpoint PUT /api/v1/org/:id/_expired_date
 */
export const setOrgExpiredDate = (
  id: string | number,
  data: SetOrgExpiredDateRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.organization.SetOrgExpiredDate */ http.put<void>(
    `api/gateway/user_service.organization.SetOrgExpiredDate/api/v1/org/${id}/_expired_date`,
    data,
    options
  );
