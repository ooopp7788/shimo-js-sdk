import { BaseEditor } from './BaseEditor'

export interface EventMap {
  error: {
    /** 错误信息 */
    data?: any
    /** 错误码 */
    code: number
  }
}

export interface Editor extends BaseEditor<EventMap> {
  /**
   * 显示历史侧边栏
   * @since co-1.4
   */
  showHistory: (options?: {}) => Promise<void>
  /**
   * 隐藏历史侧边栏
   * @since co-1.4
   */
  hideHistory: (options?: {}) => Promise<void>
  /**
   * 显示版本侧边栏
   * @since co-1.4
   */
  showRevision: (options?: {}) => Promise<void>
  /**
   * 隐藏版本侧边栏
   * @since co-1.4
   */
  hideRevision: (options?: {}) => Promise<void>
}
