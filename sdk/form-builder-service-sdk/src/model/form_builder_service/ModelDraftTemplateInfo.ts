import { ModelFormItem } from ".";

/** 表单项 */
export interface ModelDraftTemplateInfo {
  /** 表单草稿Id */
  draftInstanceId: string;

  /** 表单项实例Id */
  itemInstanceId: string;

  /** 草稿根节点实例id */
  rootItemInstanceId: string;

  /** 新老表单项映射 */
  itemMapList: ModelDraftTemplateInfo_itemMapList_item[];
}

export interface ModelDraftTemplateInfo_itemMapList_item {
  /** 旧实例Id */
  oldInstanceId?: string;

  /** 新表单项信息 */
  newItem?: Partial<ModelFormItem>;
}
