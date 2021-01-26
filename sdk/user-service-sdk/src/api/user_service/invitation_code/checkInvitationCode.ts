import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CheckInvitationCodeResponseBody {
  /** 邀请码 */
  code: string;

  /** org */
  org: number;
}

/**
 * @description 邀请码检查[内部] (已过期或不存在会返回失败)
 * @endpoint GET /api/v1/invitation/code/:code/check
 */
export const checkInvitationCode = async (
  code: string | number,
  options?: HttpOptions
): Promise<CheckInvitationCodeResponseBody> =>
  (
    await http.get<ResponseBodyWrapper<CheckInvitationCodeResponseBody>>(
      `api/gateway/user_service.invitation_code.CheckInvitationCode/api/v1/invitation/code/${code}/check`,
      options
    )
  ).data;
