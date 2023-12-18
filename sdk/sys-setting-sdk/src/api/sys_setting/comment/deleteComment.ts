import { http, HttpOptions } from "@next-core/brick-http";

/**
 * @description 删除评论
 * @endpoint DELETE /api/sys_setting/v1/comment/:instanceId
 */
export const CommentApi_deleteComment = (
  instanceId: string | number,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.sys_setting.comment.DeleteComment@1.0.1 */ http.delete<void>(
    `api/gateway/sys_setting.comment.DeleteComment/api/sys_setting/v1/comment/${instanceId}`,
    options
  );
