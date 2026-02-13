export function getLastFourDigits(numbers: number) {
  return `${numbers.toString().slice(-4)}`
}

export function getEndingLastFourDigits(numbers: number, lowerCase?: boolean) {
  const result = `Ending in ${getLastFourDigits(numbers)}`
  return lowerCase ? result.toLocaleLowerCase() : result
}
