import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface ResetInvitationCodeResponseBody {
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
export const resetInvitationCode = async (
  options?: HttpOptions
): Promise<ResetInvitationCodeResponseBody> =>
  /**! @contract easyops.api.user_service.invitation_code.ResetInvitationCode */ (
    await http.put<ResponseBodyWrapper<ResetInvitationCodeResponseBody>>(
      "api/gateway/user_service.invitation_code.ResetInvitationCode/api/v1/invitation/code/_reset",
      undefined,
      options
    )
  ).data;
