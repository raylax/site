/* Server Side Utils */

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
import { twMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from 'clsx'

dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never

export const formatDate = (date: ArgumentTypes<typeof dayjs>[0]) => {
  return dayjs(date).format('YYYY年M月D日')
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
