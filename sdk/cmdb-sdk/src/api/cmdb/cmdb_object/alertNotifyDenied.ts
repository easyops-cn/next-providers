import { http, HttpOptions } from "@next-core/brick-http";
import { ModelNotifyDenied } from "../../../model/cmdb";

export interface AlertNotifyDeniedRequestBody {
  /** 当为 true 时，将会忽略生成变更记录 */
  notifyDenied: boolean;

  /** 属性notifyDenied信息 */
  attrList?: Partial<ModelNotifyDenied>[];

  /** 关系notifyDenied信息 */
  relationList?: Partial<ModelNotifyDenied>[];
}

/**
 * @description 模型,属性及关系变更记录配置
 * @endpoint post /object_notify_denied/:object_id
 */
export const alertNotifyDenied = (
  object_id: string | number,
  data: AlertNotifyDeniedRequestBody,
  options?: HttpOptions
): Promise<void> =>
  /**! @contract easyops.api.cmdb.cmdb_object.AlertNotifyDenied */ http.post<void>(
    `api/gateway/cmdb.cmdb_object.AlertNotifyDenied/object_notify_denied/${object_id}`,
    data,
    options
  );
