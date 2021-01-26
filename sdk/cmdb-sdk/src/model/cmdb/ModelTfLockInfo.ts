/** terrafrom锁信息 */
export interface ModelTfLockInfo {
  /** 锁Id,随机生成 */
  ID: string;

  /** Terraform operation, provided by the caller. */
  Operation: string;

  /** Extra information to store with the lock, provided by the caller. */
  Info: string;

  /** user@hostname when available */
  Who: string;

  /** Terraform version */
  Version: string;

  /** Time that the lock was taken. */
  Created: string;

  /** Path to the state file when applicable. Set by the Lock implementation. */
  Path: string;
}
