import { http, HttpOptions } from "@next-core/brick-http";
import { ModelSysAnnounce } from "../../../model/sys_setting";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface AnnounceApi_UpdateAnnounceRequestBody {
  /** 标题 */
  title: string;

  /** 类别, 运维日常变更-ordinaryChange 应用/服务变更-appServiceChange 安全事项通知-safetyNotice 产品升级-productUpgrading 产品发布-productRelease 其他-other */
  category:
    | "ordinaryChange"
    | "appServiceChange"
    | "safetyNotice"
    | "productUpgrading"
    | "productRelease"
    | "other";

  /** 公告内容(用一个json字符串存储) */
  data: string;

  /** 公告生效时间 */
  effectTime?: string;

  /** 公告失效时间 */
  expires?: string;

  /** 文件数据 */
  fileInfo?: ModelSysAnnounce["fileInfo"];

  /** 是否已发布 */
  isPublish: boolean;

  /** 开启通知 */
  enableNotify?: boolean;

  /** 通知配置 */
  notifyConf?: ModelSysAnnounce["notifyConf"];

  /** 是否实时弹出提示 */
  isPopup: boolean;
}

export interface AnnounceApi_UpdateAnnounceResponseBody {
  /** 实例id */
  instanceId?: string;
}

/**
 * @description 更新通知公告
 * @endpoint PUT /api/sys_setting/v1/announce/:instanceId
 */
export const AnnounceApi_updateAnnounce = async (
  instanceId: string | number,
  data: AnnounceApi_UpdateAnnounceRequestBody,
  options?: HttpOptions
): Promise<AnnounceApi_UpdateAnnounceResponseBody> =>
  /**! @contract easyops.api.sys_setting.announce.UpdateAnnounce@1.1.0 */ (
    await http.put<ResponseBodyWrapper<AnnounceApi_UpdateAnnounceResponseBody>>(
      `api/gateway/sys_setting.announce.UpdateAnnounce/api/sys_setting/v1/announce/${instanceId}`,
      data,
      options
    )
  ).data;
