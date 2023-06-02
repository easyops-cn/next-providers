import { ModelStoryboardMenuItem } from ".";

/** Storyboard menu */
export interface ModelStoryboardMenu {
  /** Menu Id */
  menuId: string;

  /** Title */
  title: string;

  /** Icon */
  icon: Record<string, any>;

  /** TitleDataSource */
  titleDataSource: ModelStoryboardMenu_titleDataSource;

  /** DefaultCollapsed */
  defaultCollapsed: boolean;

  /** Link */
  link: string;

  /** 类型 */
  type: string;

  /** Dynamic Items */
  dynamicItems: boolean;

  /** Items Resolve */
  itemsResolve: any;

  /** 菜单项 */
  items: Partial<ModelStoryboardMenuItem>[];

  /** Inject menu group ID */
  injectMenuGroupId: string;

  /** Default Collapsed Breakpoint */
  defaultCollapsedBreakpoint: number;

  /** i18n data */
  i18n: Record<string, any>;

  /** 注入菜单的app信息 */
  overrideApp: Record<string, any>;
}

export interface ModelStoryboardMenu_titleDataSource {
  /** ObjectId */
  objectId?: string;

  /** InstanceId */
  instanceId?: string;

  /** AttributeId */
  attributeId?: string;
}
