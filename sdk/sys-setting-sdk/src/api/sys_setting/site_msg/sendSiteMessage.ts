import { http, HttpOptions } from "@next-core/brick-http";

export interface SiteMsgApi_SendSiteMessageRequestBody {
  /** 标题 */
  title: string;

  /** 消息内容 */
  content?: string;

  /** 数据来源(使用system.module的形式组织，比如sys_setting.announcement) */
  source: string;

  /** 额外信息 */
  extInfo?: Record<string, any>;

  /** 收件人列表(user.name或user_group.instanceId，后者以:开头) */
  receivers: string[];
}

/**
 * @description 发送站内信
 * @endpoint POST /api/sys_setting/v1/site_msg
 */
export const SiteMsgApi_sendSiteMessage = (
  data: SiteMsgApi_SendSiteMessageRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.sys_setting.site_msg.SendSiteMessage@1.0.0 */ http.post<void>(
    "api/gateway/logic.sys_setting/api/sys_setting/v1/site_msg",
    data,
    options
  );
