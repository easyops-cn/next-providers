import { http, HttpOptions } from "@next-core/brick-http";
import { ModelPermission } from "../../../model/permission";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GeneratePermissionsDefinitionResponseBody {
  /** 权限点列表 */
  permissionList?: Partial<ModelPermission>[];
}

/**
 * @description 由模型定义生成PermissionsDefinition
 * @endpoint GET /api/v1/permissions/generate_permissions_definition/:instanceId
 */
export const generatePermissionsDefinition = async (
  instanceId: string | number,
  options?: HttpOptions
): Promise<GeneratePermissionsDefinitionResponseBody> =>
  (
    await http.get<
      ResponseBodyWrapper<GeneratePermissionsDefinitionResponseBody>
    >(
      `api/gateway/next_builder.permission.GeneratePermissionsDefinition/api/v1/permissions/generate_permissions_definition/${instanceId}`,
      options
    )
  ).data;
