import { Area, AreaChart, ResponsiveContainer } from 'recharts'
import WandIcon from '../../../icons/wand-icon'
import BentoCard from '../../bento-card/bento-card'
import Button from '../../button/button'
import { useState } from 'react'
import styles from './line-chart-bento-card.module.css'

type ChartData = {
  number: number
}

export default function LineChartBentoCard() {
  const [chartData, setChartData] = useState<ChartData[]>([
    { number: 1583 },
    { number: 3176 },
    { number: 6225 },
    { number: 4050 },
    { number: 8872 },
  ])

  return (
    <BentoCard
      title="Informative Visual Data Analytics Solutions"
      description="Easily analyze the evolution of your balance through personalized graphical charts"
    >
      <div className={styles.content}>
        <header className={styles.header}>
          <Button
            variant="tertiary"
            size="small"
            leftIcon={<WandIcon />}
            onClick={() => {
              setChartData(
                Array.from({ length: 5 }, () => ({
                  number: Math.floor(Math.random() * 1000),
                }))
              )
            }}
          >
            Magic
          </Button>
        </header>
        <div>
          <ResponsiveContainer width={'100%'} height={160}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient
                  id="primaryGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="var(--chart-gradient-start-color)"
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--chart-gradient-end-color)"
                  />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="number"
                stroke="var(--brand-500)"
                strokeWidth={4}
                fillOpacity={1}
                fill="url(#primaryGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </BentoCard>
  )
}
