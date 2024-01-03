import { http, HttpOptions } from "@next-core/brick-http";

export interface WorkflowApi_ImportUserGroupsRequestBody {
  /** 用户组 */
  userGroups?: WorkflowApi_ImportUserGroupsRequestBody_userGroups_item[];
}

/**
 * @description 导入用户组
 * @endpoint POST /api/v1/micro_app/import_user_groups
 */
export const WorkflowApi_importUserGroups = (
  data: WorkflowApi_ImportUserGroupsRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.micro_app.workflow.ImportUserGroups@1.0.0 */ http.post<void>(
    "api/gateway/micro_app.workflow.ImportUserGroups/api/v1/micro_app/import_user_groups",
    data,
    options
  );

export interface WorkflowApi_ImportUserGroupsRequestBody_userGroups_item {
  /** 组名称 */
  name?: string;

  /** 组描述 */
  description?: string;
}
