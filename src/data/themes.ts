import { IMAGE_PATH } from '../utils/constants'
import { Themes } from '../utils/types'

export const themes: Themes[] = [
  {
    name: 'system',
    label: 'System Preference',
    imageUrl: `${IMAGE_PATH}theme-system-preference.svg`,
  },
  {
    name: 'light',
    label: 'Light',
    imageUrl: `${IMAGE_PATH}theme-light.svg`,
  },
  {
    name: 'dark',
    label: 'Dark',
    imageUrl: `${IMAGE_PATH}theme-dark.svg`,
  },
]
