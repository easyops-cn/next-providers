import { ModelIcon } from "../common";

/** 表单项目 */
export interface ModelFormProject {
  /** 实例id */
  instanceId: string;

  /** 项目名 */
  projectName: string;

  /** 描述 */
  projectDescription: string;

  /** 图标 */
  icon: Partial<ModelIcon>;
}
