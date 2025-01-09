import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface WechatLlmApi_GetWechatLiveUserResponseBody {
  /** 登录的用户列表 */
  users: WechatLlmApi_GetWechatLiveUserResponseBody_users_item[];
}

/**
 * @description 获取当前登录的用户列表
 * @endpoint GET /api/api_gateway/v1/wechat/get_live_user
 */
export const WechatLlmApi_getWechatLiveUser = async (
  options?: HttpOptions
): Promise<WechatLlmApi_GetWechatLiveUserResponseBody> =>
  /**! @contract easyops.api.api_gateway.wechat_llm.GetWechatLiveUser@1.0.0 */ (
    await http.get<
      ResponseBodyWrapper<WechatLlmApi_GetWechatLiveUserResponseBody>
    >("api/api_gateway/v1/wechat/get_live_user", options)
  ).data;

export interface WechatLlmApi_GetWechatLiveUserResponseBody_users_item {
  /** 登录时的uuid */
  uuid?: string;

  /** 微信的用户名 */
  nick_name?: string;
}
