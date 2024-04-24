/** 拓扑视图详情 */
export interface ModelTopoCenterView {
  /** 视图名称 */
  name: string;

  /** 描述 */
  description: string;

  /** 是否启用基线 */
  enableBaseline: boolean;

  /** 视图参数定义 */
  args: ModelTopoCenterView_args_item[];

  /** 可访问人员 */
  readAuthorizers: string[];

  /** 可编辑人员 */
  updateAuthorizers: string[];

  /** 可删除人员 */
  deleteAuthorizers: string[];

  /** 标签 */
  tag: string[];

  /** 视图来源 */
  from: string;

  /** 类型 */
  type: string;
}

export interface ModelTopoCenterView_args_item {
  /** 参数ID */
  id?: string;

  /** 作用域 */
  scope?: "gather" | "adjust";
}
