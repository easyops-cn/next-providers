/** 角色 */
export interface ModelRole {
  /** 角色id */
  id: string;

  /** 角色所在org */
  org: number;

  /** 角色名称 */
  role: string;

  /** 角色下用户列表 */
  user: string[];

  /** 角色下权限id列表 */
  permission: string[];

  /** 角色下用户组列表 */
  user_group: string[];
}
