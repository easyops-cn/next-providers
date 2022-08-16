import { ModelFormModels, ModelFormTpl } from ".";

/** 表单模型及模版 */
export type ModelFormModelWithTpl = ModelFormModels & ModelFormModelWithTpl_2;

export interface ModelFormModelWithTpl_2 {
  /** 表单模版列表 */
  templateList: Partial<ModelFormTpl>[];
}
