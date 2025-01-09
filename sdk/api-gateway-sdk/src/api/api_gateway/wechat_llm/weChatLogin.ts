import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface WechatLlmApi_WeChatLoginRequestBody {
  /** 后台大模型 robotId */
  robotId: string;
}

export interface WechatLlmApi_WeChatLoginResponseBody {
  /** 生成的登录链接 */
  img: string;

  /** 登录唯一的标识 */
  uuid?: string;
}

/**
 * @description 微信登录，返回登录链接
 * @endpoint POST /api/api_gateway/v1/wechat/login
 */
export const WechatLlmApi_weChatLogin = async (
  data: WechatLlmApi_WeChatLoginRequestBody,
  options?: HttpOptions
): Promise<WechatLlmApi_WeChatLoginResponseBody> =>
  /**! @contract easyops.api.api_gateway.wechat_llm.WeChatLogin@1.0.0 */ (
    await http.post<ResponseBodyWrapper<WechatLlmApi_WeChatLoginResponseBody>>(
      "api/api_gateway/v1/wechat/login",
      data,
      options
    )
  ).data;
