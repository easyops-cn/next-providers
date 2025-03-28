/** document */
export interface ModelLlmDocument {
  /** page_content */
  pageContent: string;

  /** id */
  id: string;

  /** metadata */
  metadata: Record<string, any>;

  /** pageContent length */
  len: number;

  /** 与输入的相似度 */
  score: number;
}
