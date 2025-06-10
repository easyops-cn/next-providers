import { http, HttpOptions } from "@next-core/brick-http";

export interface VerificationCodeApi_CheckVerificationCodeRequestBody {
  /** 用户名 */
  user: string;

  /** 发送类型（eg: email, phone） */
  type?: string;

  /** 服务名称（eg: tool_service） */
  service: string;

  /** 使用场景 （eg: tool_execute） */
  scene?: string;

  /** 资源id （eg: 9ff366020435ce53d73e69128c611bdd） */
  resourceIds?: string[];

  /** 验证码 */
  code: string;
}

/**
 * @description 校验验证码
 * @endpoint POST /api/user_service/v1/verification/codes/check
 */
export const VerificationCodeApi_checkVerificationCode = (
  data: VerificationCodeApi_CheckVerificationCodeRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.verification_code.CheckVerificationCode@1.0.0 */ http.post<void>(
    "api/gateway/logic.user_service/api/user_service/v1/verification/codes/check",
    data,
    options
  );
