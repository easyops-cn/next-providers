import { ModelFormModels, ModelFormModelField } from ".";

/** 表单模型及字段 */
export type ModelFormModelWithField = ModelFormModels &
  ModelFormModelWithField_2;

export interface ModelFormModelWithField_2 {
  /** 表单模型字段 */
  fieldList: Partial<ModelFormModelField>[];
}
