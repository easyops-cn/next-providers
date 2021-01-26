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
}
