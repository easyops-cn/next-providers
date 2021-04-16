import { http, HttpOptions } from "@next-core/brick-http";
import { ModelObjectImport } from "../../../model/cmdb";

/** 模型列表 */
export type CmdbObjectApi_ImportCheckRequestBody = Partial<ModelObjectImport>[];

export interface CmdbObjectApi_ImportCheckResponseBody {
  /** 返回码 */
  code?: number;

  /** 错误信息 */
  error?: string;

  /** 返回消息 */
  message?: string;

  /** '{ "APP": { "duplicated_relations": [ {"relation_id": "APP_cluster_CLUSTER", "left_id": "clusters", "right_id": "app"} ], "cannot_created_relations": [ {"relation_id": "APP_cluster_CLUSTER", "left_id": "clusters", "right_id": "app"} ], "cannot_created_references": [ {"id":"cpu","name":"CPU信息","value":{"type":"FK","external":[{"org_attr":"name","name":"名称"}],"rule":{"obj":"HOST_CPU","mode":"inner"}}} ], "id_is_duplicated": true, "name_is_duplicated": true } }' */
  data?: Record<string, any>;
}

/**
 * @description import objects check (批量导入模型前校验请求的数据是否合法)
 * @endpoint POST /object_import_check
 */
export const CmdbObjectApi_importCheck = (
  data: CmdbObjectApi_ImportCheckRequestBody,
  options?: HttpOptions
): Promise<CmdbObjectApi_ImportCheckResponseBody> =>
  /**! @contract easyops.api.cmdb.cmdb_object.ImportCheck */ http.post<CmdbObjectApi_ImportCheckResponseBody>(
    "api/gateway/cmdb.cmdb_object.ImportCheck/object_import_check",
    data,
    options
  );
