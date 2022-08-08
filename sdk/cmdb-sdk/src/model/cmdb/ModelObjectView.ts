import { ModelIcon } from "../common";

/** 模型视图设置 */
export interface ModelObjectView {
  /** 是否可见 */
  visible: boolean;

  /** 展示隐藏的属性 */
  showHideAttrs: boolean;

  /** 设置隐藏属性，e.g.: ['appId', '_updatable'] */
  hide_columns: string[];

  /** 定义如何展示关系，e.g.: { business: ['name'], tester: ['name'] }, 当relation_view为空时，会返回一个空数组 */
  relation_view: any;

  /** 展示时的属性顺序 */
  attr_order: string[];

  /** 模型属性列表，用来组成显示实例别名 */
  show_key: string[];

  /** 属性/关系可见用户(组)，e.g:{business: {'authorizers':[user]}} */
  attr_authorizers: Record<string, any>;

  /** 属性、关系分类顺序 */
  attr_category_order: string[];

  /** 关系分组顺序 */
  relation_group_order: string[];

  /** 关系分组里关系的顺序 */
  relation_order: string[];

  /** icon */
  icon: Partial<ModelIcon>;

  /** 图片链接 */
  image: string;
}
