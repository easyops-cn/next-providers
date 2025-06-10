import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface InvitationCodeApi_ResetInvitationCodeResponseBody {
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
 * @description 重置邀请码[内部]
 * @endpoint PUT /api/v1/invitation/code/_reset
 */
export const InvitationCodeApi_resetInvitationCode = async (
  options?: HttpOptions
): Promise<InvitationCodeApi_ResetInvitationCodeResponseBody> =>
  /**! @contract easyops.api.user_service.invitation_code.ResetInvitationCode@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<InvitationCodeApi_ResetInvitationCodeResponseBody>
    >(
      "api/gateway/logic.user_service/api/v1/invitation/code/_reset",
      undefined,
      options
    )
  ).data;
