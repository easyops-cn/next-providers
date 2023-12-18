/** 组织部门树 */
export interface ModelDepartmentTreeView {
  /** 部门ID */
  departmentId: string;

  /** 部门ID路径， ”/“分隔 */
  departmentIdPath: string;

  /** 部门名称 */
  name: string;

  /** 部门名称路径，“/”分隔 */
  namePath: string;

  /** 上级部门ID */
  parentDepartmentId: string;

  /** 是否存在子部门 */
  hasChild: boolean;

  /** 子部门信息 */
  childDepartment: Partial<ModelDepartmentTreeView>[];
}
