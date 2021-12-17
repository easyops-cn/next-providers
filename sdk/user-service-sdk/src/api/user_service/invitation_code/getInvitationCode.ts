import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InvitationCodeApi_GetInvitationCodeResponseBody {
  /** 邀请码 */
  code: string;

  /** org */
  org: number;

  /** 过期时间 */
  expires: string;

  /** 是否可用 */
  state: "invalid" | "valid";
}

/**
 * @description 邀请码获取[内部]
 * @endpoint GET /api/v1/invitation/code
 */
export const InvitationCodeApi_getInvitationCode = async (
  options?: HttpOptions
): Promise<InvitationCodeApi_GetInvitationCodeResponseBody> =>
  /**! @contract easyops.api.user_service.invitation_code.GetInvitationCode@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<InvitationCodeApi_GetInvitationCodeResponseBody>
    >(
      "api/gateway/user_service.invitation_code.GetInvitationCode/api/v1/invitation/code",
      options
    )
  ).data;
