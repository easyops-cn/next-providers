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
}
