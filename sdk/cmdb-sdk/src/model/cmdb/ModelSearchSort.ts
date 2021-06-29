/** 字段排序设置 */
export interface ModelSearchSort {
  /** 属性id */
  key: string;

  /** 1或-1，2或-2, 1为升序, -1为降序，2为自然排序升序，-2为自然排序降序 */
  order: number;
}
