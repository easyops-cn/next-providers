/** CmdbSort */
export interface ModelCmdbSort {
  /** 属性id */
  key: string;

  /** 1表示升序， -1表示降序, 2表示自然升序， -2表示自然降序 */
  order: -1 | 1 | -2 | 2;
}
