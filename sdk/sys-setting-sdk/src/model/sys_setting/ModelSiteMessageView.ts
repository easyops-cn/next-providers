/** 优维站内信展示字段 */
export interface ModelSiteMessageView {
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

  /** 消息分类（基于上述来源作的信息展示） */
  msgType: string;

  /** 跳转链接 */
  url: string;
}
