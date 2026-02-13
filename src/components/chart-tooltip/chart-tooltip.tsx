import { TooltipProps } from 'recharts'
import currencyFormatter from '../../utils/helpers/currency-formatter'
import { shortDateFormatter } from '../../utils/helpers/date-formatters'
import styles from './chart-tooltip.module.css'

export default function ChartTooltip({
  active,
  payload,
  label,
}: TooltipProps<number, string>) {
  if (!active) return

  return (
    <div className={styles.tooltip}>
      <p className={styles.amount}>{currencyFormatter(payload?.[0].value!)}</p>
      <p className={styles.time}>{shortDateFormatter(label as string)}</p>
    </div>
  )
}
