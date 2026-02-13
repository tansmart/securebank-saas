import { IMAGE_PATH } from '../utils/constants'
import { Charts } from '../utils/types'

export const charts: Charts[] = [
  {
    name: 'line',
    label: 'Line',
    imageUrl: `${IMAGE_PATH}chart-line.svg`,
  },
  {
    name: 'bar',
    label: 'Bar',
    imageUrl: `${IMAGE_PATH}chart-bar.svg`,
  },
]
