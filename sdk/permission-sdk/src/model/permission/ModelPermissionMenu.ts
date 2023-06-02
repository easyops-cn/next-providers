/** 菜单权限 */
export interface ModelPermissionMenu {
  /** 菜单id */
  id: string;

  /** 菜单唯一标识 */
  menu_id: string;

  /** 权限角色 */
  roles: string[];
}
