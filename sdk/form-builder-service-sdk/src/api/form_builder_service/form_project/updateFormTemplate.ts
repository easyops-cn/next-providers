import { http, HttpOptions } from "@next-core/brick-http";
import {
  ModelDraftTemplateInfo,
  ModelGlobalSetting,
  ModelGlobalEvent,
} from "../../../model/form_builder_service";
import { ResponseBodyWrapper } from "../../../wrapper";

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

export type FormProjectApi_UpdateFormTemplateResponseBody =
  Partial<ModelDraftTemplateInfo>;

/**
 * @description 更新表单模版
 * @endpoint PUT /api/form_builder_service/v1/form_project/form_template/update/:instanceId
 */
export const FormProjectApi_updateFormTemplate = async (
  instanceId: string | number,
  data: FormProjectApi_UpdateFormTemplateRequestBody,
  options?: HttpOptions
): Promise<FormProjectApi_UpdateFormTemplateResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.UpdateFormTemplate@1.0.0 */ (
    await http.put<
      ResponseBodyWrapper<FormProjectApi_UpdateFormTemplateResponseBody>
    >(
      `api/gateway/form_builder_service.form_project.UpdateFormTemplate/api/form_builder_service/v1/form_project/form_template/update/${instanceId}`,
      data,
      options
    )
  ).data;
