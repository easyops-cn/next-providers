/** 权限点 */
export interface ModelPermission {
  /** 权限点id */
  id: string;

  /** 系统名 */
  system: string;

  /** 需要鉴权的动作, 全局唯一 */
  action: string;

  /** 权限备注 */
  remark: string;

  /** remark英文翻译 */
  remark_translation: string;

  /** 权限角色 */
  roles: string[];

  /** 是否禁用, 默认为false */
  disable: boolean;

  /** 单个资源结构参考PermissionResource. 如果依赖多个资源，资源间判定逻辑条件用%and或者%or来扩住。 比如： { "%or":[ { "system":"flow", "condition":{ "executeAuthorizers":"%user" }, "name":"flow" }, { "system":"tool", "condition":{ "executeAuthorizers":"%user" }, "name":"tool" } ] } 表示这个权限点依赖流程的执行授权白名单和工具的执行授权白名单才能鉴权成功。 */
  resource: any;
}
