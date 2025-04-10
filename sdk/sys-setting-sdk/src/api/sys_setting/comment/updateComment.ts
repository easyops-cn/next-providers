import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface CommentApi_UpdateCommentRequestBody {
  /** 来源的模型id */
  sourceObjId: string;

  /** 来源的实例id */
  sourceInstId: string;

  /** 评论的内容 */
  content: string;
}

export interface CommentApi_UpdateCommentResponseBody {
  /** ID */
  instanceId?: string;
}

/**
 * @description 更新评论
 * @endpoint PUT /api/sys_setting/v1/comment/:instanceId
 */
export const CommentApi_updateComment = async (
  instanceId: string | number,
  data: CommentApi_UpdateCommentRequestBody,
  options?: HttpOptions
): Promise<CommentApi_UpdateCommentResponseBody> =>
  /**! @contract easyops.api.sys_setting.comment.UpdateComment@1.0.1 */ (
    await http.put<ResponseBodyWrapper<CommentApi_UpdateCommentResponseBody>>(
      `api/gateway/logic.sys_setting/api/sys_setting/v1/comment/${instanceId}`,
      data,
      options
    )
  ).data;
