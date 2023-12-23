import { first, last, sampleSize, sample, chunk, trimEnd } from 'lodash'
import { useNumberFormat } from '@/utils/number'
import * as dayjs from 'dayjs'

declare global {
  interface Array<T> {
    /**
     * 获取数组第一个元素
     */
    first<T>(this: T[]): T

    last<T>(this: T[]): T
    sample<T>(this: T[]): T

    /**
     * 获得 n 个随机元素
     * @param size
     */
    sampleSize<T>(this: T[], size: number): T[]

    /**
     * 将数组（array）拆分成多个 size 长度的区块
     * @param size
     */
    chunk<T>(this: T[], size: number): T[][]
  }

  interface Number {
    // 时间转化
    toDate(this: number, format?: string): string
    // 数字转化
    numberFormat(this: number): string | number
  }
}
Array.prototype.first = function <T>(this: T[]): T {
  return first<T>(this) as T
}
Array.prototype.last = function <T>(this: T[]): T {
  return last<T>(this) as T
}
Array.prototype.sample = function <T>(this: T[]): T {
  return sample<T>(this) as T
}
Array.prototype.sampleSize = function <T>(this: T[], size: number): T[] {
  return sampleSize<T>(this, size) as T[]
}
Array.prototype.chunk = function <T>(this: T[], size: number): T[][] {
  return chunk<T>(this, size) as T[][]
}

Number.prototype.toDate = function (this: number, format: string = 'YYYY-MM-DD') {
  return dayjs(this).format(format)
}

Number.prototype.numberFormat = function (this: number) {
  return useNumberFormat(this)
}
