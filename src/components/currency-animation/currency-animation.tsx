import CountUp, { CountUpProps } from 'react-countup'
import currencyFormatter from '../../utils/helpers/currency-formatter'

type CurrencyAnimationProps = CountUpProps

export default function CurrencyAnimation({
  ...props
}: CurrencyAnimationProps) {
  return (
    <CountUp
      duration={1}
      decimals={2}
      formattingFn={(number) => currencyFormatter(number)}
      {...props}
    />
  )
}
