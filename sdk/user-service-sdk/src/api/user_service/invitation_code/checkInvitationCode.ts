import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InvitationCodeApi_CheckInvitationCodeResponseBody {
  /** 邀请码 */
  code: string;

  /** org */
  org: number;
}

/**
 * @description 邀请码检查[内部] (已过期或不存在会返回失败)
 * @endpoint GET /api/v1/invitation/code/:code/check
 */
export const InvitationCodeApi_checkInvitationCode = async (
  code: string | number,
  options?: HttpOptions
): Promise<InvitationCodeApi_CheckInvitationCodeResponseBody> =>
  /**! @contract easyops.api.user_service.invitation_code.CheckInvitationCode */ (
    await http.get<
      ResponseBodyWrapper<InvitationCodeApi_CheckInvitationCodeResponseBody>
    >(
      `api/gateway/user_service.invitation_code.CheckInvitationCode/api/v1/invitation/code/${code}/check`,
      options
    )
  ).data;
