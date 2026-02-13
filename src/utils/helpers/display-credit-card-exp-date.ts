export default function displayCreditCardExpDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: '2-digit',
    month: '2-digit',
  })
}
