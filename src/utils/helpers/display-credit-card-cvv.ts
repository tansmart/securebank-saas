export default function displayCreditCardCvv(numbers: string) {
  return numbers.replace(/./g, '*')
}
