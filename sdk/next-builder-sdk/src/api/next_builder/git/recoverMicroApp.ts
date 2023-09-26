import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GitApi_RecoverMicroAppRequestBody {
  /** 可选:branch/commitId/tag */
  ref: string;

  /** 当前项目所在分支 */
  curBranch?: string;
}

export interface GitApi_RecoverMicroAppResponseBody {
  /** 新的小产品instanceId */
  newAppInstanceId?: string;

  /** 新的小产品projectId */
  newAppProjectId?: string;
}

/**
 * @description 从Gitea恢复微应用数据
 * @endpoint POST /api/v1/next-builder/recover/:appId
 */
export const GitApi_recoverMicroApp = async (
  appId: string | number,
  data: GitApi_RecoverMicroAppRequestBody,
  options?: HttpOptions
): Promise<GitApi_RecoverMicroAppResponseBody> =>
  /**! @contract easyops.api.next_builder.git.RecoverMicroApp@1.0.0 */ (
    await http.post<ResponseBodyWrapper<GitApi_RecoverMicroAppResponseBody>>(
      `api/gateway/next_builder.git.RecoverMicroApp/api/v1/next-builder/recover/${appId}`,
      data,
      options
    )
  ).data;
