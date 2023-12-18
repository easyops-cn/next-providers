/** 通知公告 */
export interface ModelSysAnnounce {
  /** 实例id */
  instanceId: string;

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

  /** 公告生效时间 */
  effectTime: string;

  /** 公告失效时间 */
  expires: string;

  /** 创建人 */
  creator: string;

  /** 修改者 */
  modifier: string;

  /** 创建时间 */
  ctime: string;

  /** 更新时间 */
  updateTime: string;

  /** 公告内容(用一个json字符串存储) */
  data: string;

  /** 是否已发布 */
  isPublish: boolean;

  /** 开启通知 */
  enableNotify: boolean;

  /** 是否实时弹出提示 */
  isPopup: boolean;

  /** 通知配置 */
  notifyConf: ModelSysAnnounce_notifyConf;

  /** 文件数据 */
  fileInfo: ModelSysAnnounce_fileInfo_item[];
}

export interface ModelSysAnnounce_notifyConf {
  /** 通知人, 用户使用用户名, 用户组使用冒号+instanceId(':5fad60e448859') */
  receivers?: string[];

  /** 通知方式 */
  method?: string[];
}

export interface ModelSysAnnounce_fileInfo_item {
  /** 文件checksum(用于最后的下载) */
  checksum?: string;

  /** 文件名称 */
  name?: string;
}
