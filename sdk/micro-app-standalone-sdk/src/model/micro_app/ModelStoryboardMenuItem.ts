/** Storyboard menu item */
export interface ModelStoryboardMenuItem {
  /** Text */
  text: string;

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

  /** Sort */
  sort: number;

  /** If */
  if: any;

  /** 子节点 */
  children: Partial<ModelStoryboardMenuItem>[];

  /** 父节点 */
  parent: Partial<ModelStoryboardMenuItem>;

  /** target */
  target: string;

  /** Group ID */
  groupId: string;

  /** 外链地址 */
  href: string;
}
