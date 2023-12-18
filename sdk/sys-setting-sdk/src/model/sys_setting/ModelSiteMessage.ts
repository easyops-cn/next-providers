/** 优维站内信 */
export interface ModelSiteMessage {
  /** ID(objectId类型) */
  id: string;

  /** 标题 */
  title: string;

  /** 消息内容 */
  content: string;

  /** 发起人 */
  creator: string;

  /** 创建时间 */
  ctime: string;

  /** 接收人 */
  reader: string;

  /** 数据来源(使用system.module的形式组织，比如sys_setting.announcement) */
  source: string;

  /** 是否已读 */
  isRead: boolean;

  /** 已读时间 */
  readTime: string;

  /** 额外信息 */
  extInfo: Record<string, any>;
}
