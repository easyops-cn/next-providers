import { ModelFormProject, ModelFormModels, ModelFormTpl } from ".";

/** 表单项目详情 */
export type ModelFormProjectInfo = ModelFormProject & ModelFormProjectInfo_2;

export interface ModelFormProjectInfo_2 {
  /** 项目创建人 */
  creator: string;

  /** 创建时间 */
  cTime: string;

  /** 表单模型列表 */
  formModelList: Partial<ModelFormModels>[];

  /** 表单模版列表 */
  formTplList: Partial<ModelFormTpl>[];
}
