/** FlowBuilder项目 */
export interface ModelFlowBuilderProject {
  /** name */
  name: string;

  /** projectId */
  projectId: string;

  /** type */
  type: "git" | "svn" | "storyboard" | "flow";

  /** description */
  description: string;

  /** icon */
  icon: string;

  /** flowProjectId */
  flowProjectId: string;

  /** instanceId */
  instanceId: string;

  /** settings */
  settings: Record<string, any>;
}
