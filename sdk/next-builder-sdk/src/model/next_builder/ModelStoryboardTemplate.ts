import { ModelMicroAppProject } from ".";

/** Storyboard template */
export interface ModelStoryboardTemplate {
  /** proxy */
  proxy: string;

  /** templateId */
  templateId: string;

  /** project */
  project: Partial<ModelMicroAppProject>;
}
