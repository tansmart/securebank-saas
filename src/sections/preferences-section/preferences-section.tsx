import { useEffect, useState } from 'react'
import Button from '../../components/button/button'
import ChartList from '../../components/chart-list/chart-list'
import ThemeList from '../../components/theme-list/theme-list'
import { charts } from '../../data/charts'
import { themes } from '../../data/themes'
import Section from '../section/section'
import styles from './preferences-section.module.css'
import { Chart, Theme } from '../../utils/types'
import { useTheme } from '../../utils/contexts/theme-context'
import { useCharts } from '../../utils/contexts/charts-context'
import displayToast from '../../utils/toast'

export default function PreferencesSection() {
  const { theme, setTheme } = useTheme()
  const { chart, setChart } = useCharts()
  const [newTheme, setNewTheme] = useState<Theme>(theme)
  const [newChart, setNewChart] = useState<Chart>(chart)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', newTheme)
  }, [newTheme])

  const isButtonDisabled = theme === newTheme && chart === newChart

  return (
    <Section>
      <h2>Themes</h2>
      <div className={styles.themeListWrapper}>
        <ThemeList
          themes={themes}
          newTheme={newTheme}
          setNewTheme={setNewTheme}
        />
      </div>
      <h2>Charts</h2>
      <div className={styles.chartListWrapper}>
        <ChartList
          charts={charts}
          newChart={newChart}
          setNewChart={setNewChart}
        />
      </div>
      <Button
        variant="primary"
        size="large"
        onClick={() => {
          setTheme(newTheme)
          setChart(newChart)
          displayToast('Preferences Updated Successfully!')
        }}
        disabled={isButtonDisabled}
      >
        Save Changes
      </Button>
    </Section>
  )
}
