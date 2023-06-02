import { ModelMicroAppProject } from ".";

/** Storyboard路由 */
export interface ModelStoryboardRoute {
  /** 路径 */
  path: string;

  /** Exact */
  exact: boolean;

  /** Public */
  public: boolean;

  /** 菜单定义 */
  menu: string;

  /** Hybrid */
  hybrid: boolean;

  /** Providers */
  providers: string;

  /** DefineResolves */
  defineResolves: string;

  /** Redirect */
  redirect: string;

  /** Segues */
  segues: string;

  /** Context */
  context: any;

  /** PermissionsPreCheck */
  permissionsPreCheck: string;

  /** project */
  project: Partial<ModelMicroAppProject>;

  /** 关联文档id */
  documentId: string;
}
