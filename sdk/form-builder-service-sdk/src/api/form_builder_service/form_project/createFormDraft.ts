import { http, HttpOptions } from "@next-core/brick-http";
import { ModelFormItem } from "../../../model/form_builder_service";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface FormProjectApi_CreateFormDraftRequestBody {
  /** 表单项id（非实例id） */
  formItemId?: string;
}

export interface FormProjectApi_CreateFormDraftResponseBody {
  /** 表单草稿Id */
  draftInstanceId?: string;

  /** 表单项实例Id */
  itemInstanceId?: string;

  /** 草稿根节点实例id */
  rootItemInstanceId?: string;

  /** 新老表单项映射 */
  itemMapList?: FormProjectApi_CreateFormDraftResponseBody_itemMapList_item[];
}

/**
 * @description 创建表单草稿
 * @endpoint POST /api/form_builder_service/v1/form_project/form_draft/create/:instanceId
 */
export const FormProjectApi_createFormDraft = async (
  instanceId: string | number,
  data: FormProjectApi_CreateFormDraftRequestBody,
  options?: HttpOptions
): Promise<FormProjectApi_CreateFormDraftResponseBody> =>
  /**! @contract easyops.api.form_builder_service.form_project.CreateFormDraft@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<FormProjectApi_CreateFormDraftResponseBody>
    >(
      `api/gateway/form_builder_service.form_project.CreateFormDraft/api/form_builder_service/v1/form_project/form_draft/create/${instanceId}`,
      data,
      options
    )
  ).data;

export interface FormProjectApi_CreateFormDraftResponseBody_itemMapList_item {
  /** 旧实例Id */
  oldInstanceId?: string;

  /** 新表单项信息 */
  newItem?: Partial<ModelFormItem>;
}
