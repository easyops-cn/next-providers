import { ModelGlobalSetting, ModelGlobalEvent } from ".";

/** 表单模版 */
export interface ModelFormTpl {
  /** 实例id */
  instanceId: string;

  /** 表单id */
  id: string;

  /** 名字 */
  formName: string;

  /** 版本号 1.0.0 */
  version: string;

  /** 描述 */
  formDescription: string;

  /** 是否为主版本 */
  isMain: boolean;

  /** 表单定义 */
  formSchema: string;

  /** context (动态请求) */
  context: string;

  /** 版本列表 */
  versionList: ModelFormTpl_versionList_item[];

  /** 通用配置 */
  globalSetting: Partial<ModelGlobalSetting>;

  /** 公共事件列表 */
  globalEventList: Partial<ModelGlobalEvent>[];
}

export interface ModelFormTpl_versionList_item {
  /** 实例id */
  instanceId?: string;

  /** 版本号 1.0.0 */
  version?: string;
}
