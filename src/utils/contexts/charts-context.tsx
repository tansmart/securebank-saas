import { createContext, useContext, useEffect, useState } from 'react'
import { Chart } from '../types'

type ChartsContextProviderProps = {
  children: React.ReactNode
}

type ChartsContextType = {
  chart: Chart
  setChart: (newChart: Chart) => void
}

export const ChartsContext = createContext<ChartsContextType | null>(null)

function getInitialChart() {
  const chart = localStorage.getItem('chart')
  return chart ? JSON.parse(chart) : 'line'
}

export default function ChartsContextProvider({
  children,
}: ChartsContextProviderProps) {
  const [chart, setChart] = useState<Chart>(getInitialChart)

  useEffect(() => {
    localStorage.setItem('chart', JSON.stringify(chart))
  }, [chart])

  return (
    <ChartsContext.Provider value={{ chart, setChart }}>
      {children}
    </ChartsContext.Provider>
  )
}

export const useCharts = () => {
  const context = useContext(ChartsContext)
  if (!context) {
    throw new Error('useCharts must be within a ChartsContextProvider')
  }

  return context
}
