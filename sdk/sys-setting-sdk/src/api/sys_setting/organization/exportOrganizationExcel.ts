import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 导出组织架构信息Excel（部门、员工）
 * @endpoint GET /api/sys_setting/v1/file/organization/excel_export/:object
 */
export const OrganizationApi_exportOrganizationExcel = (
  object: string | number,
  options?: HttpOptions
): Promise<Blob> =>
  /**! @contract easyops.api.sys_setting.organization.ExportOrganizationExcel@1.0.0 */ http.get<Blob>(
    `api/gateway/logic.sys_setting/api/sys_setting/v1/file/organization/excel_export/${object}`,
    { ...options, responseType: "blob" }
  );
