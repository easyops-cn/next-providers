import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelGlobalSetting,
  ModelGlobalEvent,
} from "../../../model/form_builder_service";

export interface FormProjectApi_UpdateFormTemplateRequestBody {
  /** 表单id */
  id?: string;

  /** 名字 */
  formName?: string;

  /** 描述 */
  formDescription?: string;

  /** 是否为主版本 */
  isMain?: boolean;

  /** 表单定义 */
  formSchema?: string;

  /** context (动态请求) */
  context?: string;

  /** 所属项目实例Id */
  projectInstanceId: string;

  /** 通用配置 */
  globalSetting?: Partial<ModelGlobalSetting>;

  /** 公共事件列表 */
  globalEventList?: Partial<ModelGlobalEvent>[];
}

/**
 * @description 更新表单模版
 * @endpoint PUT /api/form_builder_service/v1/form_project/form_template/update/:instanceId
 */
export const FormProjectApi_updateFormTemplate = (
  instanceId: string | number,
  data: FormProjectApi_UpdateFormTemplateRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.form_builder_service.form_project.UpdateFormTemplate@1.0.0 */ http.put<void>(
    `api/gateway/form_builder_service.form_project.UpdateFormTemplate/api/form_builder_service/v1/form_project/form_template/update/${instanceId}`,
    data,
    options
  );
