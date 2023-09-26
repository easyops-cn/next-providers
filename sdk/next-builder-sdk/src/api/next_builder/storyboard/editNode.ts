import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface StoryboardApi_EditNodeRequestBody {
  /** objectId */
  objectId: string;

  /** 实例上一次修改时间 */
  mtime?: string;

  /** instance_id */
  instanceId?: string;

  /** node instance */
  instance: Record<string, any>;
}

export interface StoryboardApi_EditNodeResponseBody {
  /** 更新成功的实例信息 */
  instanceInfo?: Record<string, any>;
}

/**
 * @description Edit Node
 * @endpoint PUT /api/v1/next-builder/:projectInstanceId/nodes
 */
export const StoryboardApi_editNode = async (
  projectInstanceId: string | number,
  data: StoryboardApi_EditNodeRequestBody,
  options?: HttpOptions
): Promise<StoryboardApi_EditNodeResponseBody> =>
  /**! @contract easyops.api.next_builder.storyboard.EditNode@1.0.0 */ (
    await http.put<ResponseBodyWrapper<StoryboardApi_EditNodeResponseBody>>(
      `api/gateway/next_builder.storyboard.EditNode/api/v1/next-builder/${projectInstanceId}/nodes`,
      data,
      options
    )
  ).data;
