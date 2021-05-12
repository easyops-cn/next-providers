import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface WechatApi_WeChatGetCodeUriResponseBody {
  /** 生成的链接 */
  url: string;
}

/**
 * @description 企业微信登录；根据配置文件构造扫码登录链接
 * @endpoint GET /api/api_gateway/v1/wechatwork/login/getcodeuri
 */
export const WechatApi_weChatGetCodeUri = async (
  options?: HttpOptions
): Promise<WechatApi_WeChatGetCodeUriResponseBody> =>
  /**! @contract easyops.api.api_gateway.wechat.WeChatGetCodeUri */ (
    await http.get<ResponseBodyWrapper<WechatApi_WeChatGetCodeUriResponseBody>>(
      "api/api_gateway/v1/wechatwork/login/getcodeuri",
      options
    )
  ).data;
