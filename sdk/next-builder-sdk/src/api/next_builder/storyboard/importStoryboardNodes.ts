import { http, HttpOptions } from "@next-core/brick-http";
import { ModelInstalledMicroApp } from "../../../model/micro_app";
import { ModelStoryboardNode } from "../../../model/next_builder";

export interface ImportStoryboardNodesRequestBody {
  /** Project */
  project?: ImportStoryboardNodesRequestBody_project;

  /** 节点列表 */
  nodes: ImportStoryboardNodesRequestBody_nodes_item[];
}

/**
 * @description 批量导入storyboard节点
 * @endpoint POST /api/v1/nextBuilder/importNodes
 */
export const importStoryboardNodes = (
  data: ImportStoryboardNodesRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.next_builder.storyboard.ImportStoryboardNodes */ http.post<void>(
    "api/gateway/next_builder.storyboard.ImportStoryboardNodes/api/v1/nextBuilder/importNodes",
    data,
    options
  );

export interface ImportStoryboardNodesRequestBody_project {
  /** projectId */
  projectId?: string;

  /** Depends All */
  dependsAll?: boolean;

  /** 节点列表 */
  app?: ImportStoryboardNodesRequestBody_project_app;
}

export interface ImportStoryboardNodesRequestBody_nodes_item {
  /** 节点标识 */
  id?: string;

  /** 别名 */
  alias?: string;

  /** 挂载点 */
  mountPoint?: string;

  /** 排序 */
  sort?: number;

  /** 类型 */
  type?:
    | "brick"
    | "provider"
    | "template"
    | "routes"
    | "bricks"
    | "redirect"
    | "custom-template";

  /** 当type为"brick", "provider", "template"时，填充该字段属性 */
  brick?: ModelStoryboardNode["brick"];

  /** 当type为"routes", "bricks", "redirect"时，填充该字段属性 */
  route?: ModelStoryboardNode["route"];

  /** 当type为"custom-template"时，填充该字段属性 */
  template?: ModelStoryboardNode["template"];

  /** 父节点id */
  parentId?: string;
}

export interface ImportStoryboardNodesRequestBody_project_app {
  /** 菜单中显示的图标 */
  menuIcon?: ModelInstalledMicroApp["menuIcon"];

  /** 默认定义 */
  defaultConfig?: Record<string, any>;

  /** Env配置 */
  env?: string;

  /** 是否内置应用 */
  internal?: boolean;

  /** 是否私有 */
  private?: boolean;

  /** Legacy */
  legacy?: string;

  /** 图标背景 */
  iconBackground?: string;
}
