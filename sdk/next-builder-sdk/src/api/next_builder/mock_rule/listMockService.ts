import { http, HttpOptions } from "@next-core/brick-http";
import { ResponseBodyWrapper } from "../../../wrapper";

export interface MockRuleApi_ListMockServiceRequestBody {
  /** queryCondition */
  queryCondition?: Record<string, any>;

  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;
}

/** mock服务列表 */
export interface MockRuleApi_ListMockServiceResponseBody {
  /** mockDataList */
  mockDataList?: MockRuleApi_ListMockServiceResponseBody_mockDataList_item[];

  /** 页码 */
  page?: number;

  /** 页大小 */
  page_size?: number;

  /** 实例总数 */
  total?: number;
}

/**
 * @description mock服务列表
 * @endpoint POST /api/v1/mock_service/list
 */
export const MockRuleApi_listMockService = async (
  data: MockRuleApi_ListMockServiceRequestBody,
  options?: HttpOptions
): Promise<MockRuleApi_ListMockServiceResponseBody> =>
  /**! @contract easyops.api.next_builder.mock_rule.ListMockService@1.0.0 */ (
    await http.post<
      ResponseBodyWrapper<MockRuleApi_ListMockServiceResponseBody>
    >(
      "api/gateway/next_builder.mock_rule.ListMockService/api/v1/mock_service/list",
      data,
      options
    )
  ).data;

export interface MockRuleApi_ListMockServiceResponseBody_mockDataList_item {
  /** 契约命名空间 */
  contractNamespace?: string;

  /** 契约名称 */
  contarctName?: string;

  /** 描述信息 */
  description?: string;

  /** mock规则数量 */
  mockRuleNumber?: number;
}
