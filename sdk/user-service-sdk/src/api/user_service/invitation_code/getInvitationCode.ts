import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GetInvitationCodeResponseBody {
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
export const getInvitationCode = async (
  options?: HttpOptions
): Promise<GetInvitationCodeResponseBody> =>
  /**! @contract easyops.api.user_service.invitation_code.GetInvitationCode */ (
    await http.get<ResponseBodyWrapper<GetInvitationCodeResponseBody>>(
      "api/gateway/user_service.invitation_code.GetInvitationCode/api/v1/invitation/code",
      options
    )
  ).data;
