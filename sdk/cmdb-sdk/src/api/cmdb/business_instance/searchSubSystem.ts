import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface BusinessInstanceApi_SearchSubSystemRequestBody {
  /** 系统模型的id，目前有BUSINESS,APP_SYSTEM@ONEMODEL，默认BUSINESS */
  systemObject?: "BUSINESS" | "APP_SYSTEM@ONEMODEL";

  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;

  /** 查询条件,与[实例搜索接口]的query字段说明一致 */
  query?: Record<string, any>;

  /** 过滤的字段列表, 留空代表返回所有字段(true: 表示指定获取字段, false: 表示指定不获取的字段)(支持关系数据的二级jsonPath格式的指定字段如clusters.name) */
  fields?: Record<string, any>;

  /** 按字段排序, 留空默认按照实例ID降序排序(1表示升序, -1表示降序) */
  sort?: Record<string, any>;

  /** 按照权限过滤(通用实例都有`read`, `update`, `delete`权限控制, 主机实例在通用实例权限基础上有额外的`operate`权限, 应用实例在通用实例权限基础上有额外的`developClusterOperate`, `testClusterOperate`, `prereleaseClusterOperate`, `productionClusterOperate`权限) */
  permission?: string[];

  /** 对于关联的实例数据是否只获取relation_view中指定的属性, 这个字段为true时, 会覆盖fields字段中指定的二级字段设置 */
  only_relation_view?: boolean;

  /** 是否只获取与自己有关的那部分数据, 默认为false */
  only_my_instance?: boolean;
}

export interface BusinessInstanceApi_SearchSubSystemResponseBody {
  /** total */
  total: number;

  /** page */
  page: number;

  /** page_size */
  page_size: number;

  /** 实例列表 */
  list: Record<string, any>[];
}

/**
 * @description 搜索系统的子系统以及，以及递归的获取子系统的子系统 (关于搜索条件的文档说明请参考[实例搜索接口]的说明)
 * @endpoint POST /system/:systemInstanceId/_search_subsystem
 */
export const BusinessInstanceApi_searchSubSystem = async (
  systemInstanceId: string | number,
  data: BusinessInstanceApi_SearchSubSystemRequestBody,
  options?: HttpOptions
): Promise<BusinessInstanceApi_SearchSubSystemResponseBody> =>
  /**! @contract easyops.api.cmdb.business_instance.SearchSubSystem@1.1.0 */ (
    await http.post<
      ResponseBodyWrapper<BusinessInstanceApi_SearchSubSystemResponseBody>
    >(
      `api/gateway/cmdb.business_instance.SearchSubSystem/system/${systemInstanceId}/_search_subsystem`,
      data,
      options
    )
  ).data;
