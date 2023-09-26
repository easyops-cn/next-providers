import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface GitApi_CommitAppDataRequestBody {
  /** branch will commit */
  branch?: string;

  /** src branch */
  srcBranch?: string;

  /** 提交信息 */
  commitMessage: string;
}

export interface GitApi_CommitAppDataResponseBody {
  /** commitId */
  commitId?: string;
}

/**
 * @description Commit App Data
 * @endpoint POST /api/v1/next-builder/commits/:projectId
 */
export const GitApi_commitAppData = async (
  projectId: string | number,
  data: GitApi_CommitAppDataRequestBody,
  options?: HttpOptions
): Promise<GitApi_CommitAppDataResponseBody> =>
  /**! @contract easyops.api.next_builder.git.CommitAppData@1.0.0 */ (
    await http.post<ResponseBodyWrapper<GitApi_CommitAppDataResponseBody>>(
      `api/gateway/next_builder.git.CommitAppData/api/v1/next-builder/commits/${projectId}`,
      data,
      options
    )
  ).data;
