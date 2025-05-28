/** standalone menu item */
export interface ModelStandaloneMenuItem {
  /** Text */
  text: string;

  /** 同步自uuid */
  menuItemId: string;

  /** To */
  to: string;

  /** Icon */
  icon: Record<string, any>;

  /** Exact */
  exact: boolean;

  /** Key */
  key: string;

  /** ActiveIncludes */
  activeIncludes: string[];

  /** ActiveExcludes */
  activeExcludes: string[];

  /** ActiveMatchSearch */
  activeMatchSearch: boolean;

  /** Type */
  type: string;

  /** DefaultExpanded */
  defaultExpanded: boolean;

  /** 排序字段 */
  sort: number;

  /** If */
  if: any;

  /** target */
  target: string;

  /** Group ID */
  groupId: string;

  /** 外链地址 */
  href: string;

  /** 子项布局 */
  childLayout: string;

  /** InstanceId */
  instanceId: string;

  /** 是否隐藏 */
  hidden: boolean;

  /** 是否为自定义 */
  isCustom: boolean;
}
