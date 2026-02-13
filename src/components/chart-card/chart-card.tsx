import { Chart, Charts } from '../../utils/types'
import PreferencesCard from '../preferences-card/preferences-card'
import styles from './chart-card.module.css'

type ChartCardProps = Charts & {
  newChart: Chart
  setNewChart: React.Dispatch<React.SetStateAction<Chart>>
}

export default function ChartCard({
  name,
  label,
  imageUrl,
  newChart,
  setNewChart,
}: ChartCardProps) {
  return (
    <button className={styles.button} onClick={() => setNewChart(name)}>
      <PreferencesCard
        imageUrl={imageUrl}
        label={label}
        isActive={name === newChart}
      />
    </button>
  )
}
