import { getLastFourDigits } from './get-last-four-digits'

export default function displayCreditCardNumbers(numbers: number) {
  const formattedNumbers = numbers
    .toString()
    .replace(/./g, '*')
    .slice(0, -4)
    .replace(/(.{4})/g, '$1&nbsp;&nbsp;').trim()
  return `${formattedNumbers}${getLastFourDigits(numbers)}`
}
