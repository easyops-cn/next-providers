import { http, HttpOptions } from "@next-core/brick-http";

export interface VerificationCodeApi_SendVerificationCodeRequestBody {
  /** 用户名(多个用逗号,分割) */
  user: string;

  /** 发送类型（多个用逗号,分割; eg: email, phone） */
  type: string;

  /** 服务名称（eg: tool_service） */
  service: string;

  /** 使用场景 （eg: tool_execute） */
  scene?: string;

  /** 资源id （eg: 9ff366020435ce53d73e69128c611bdd） */
  resourceIds?: string[];

  /** 验证码模板 （eg: 工具验证码为 %s（10分钟内有效）。此验证码用于【easyops】申请执行工具【安装agent】，请确认工具可被执行后，将验证码转告给该用户。） */
  template: string;

  /** 验证码有效期（秒） */
  expiredTime?: number;
}

/**
 * @description 发送验证码
 * @endpoint POST /api/user_service/v1/verification/codes
 */
export const VerificationCodeApi_sendVerificationCode = (
  data: VerificationCodeApi_SendVerificationCodeRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.user_service.verification_code.SendVerificationCode@1.0.0 */ http.post<void>(
    "api/gateway/logic.user_service/api/user_service/v1/verification/codes",
    data,
    options
  );
