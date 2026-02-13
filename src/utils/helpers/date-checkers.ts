import { shortDateFormatter } from './date-formatters'

export function dateChecker(firstDate: Date, secondDate: Date) {
  return (
    shortDateFormatter(firstDate.toString()) ===
    shortDateFormatter(secondDate.toString())
  )
}
