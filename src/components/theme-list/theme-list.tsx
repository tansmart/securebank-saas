import { Theme, Themes } from '../../utils/types'
import ThemeCard from '../theme-card/theme-card'
import styles from './theme-list.module.css'

export type ThemeListProps = {
  themes: Themes[]
  newTheme: Theme
  setNewTheme: React.Dispatch<React.SetStateAction<Theme>>
}

export default function ThemeList({
  themes,
  newTheme,
  setNewTheme,
}: ThemeListProps) {
  return (
    <ul className={styles.list}>
      {themes.map(({ label, imageUrl, name }, index) => (
        <li key={index}>
          <ThemeCard
            name={name}
            label={label}
            imageUrl={imageUrl}
            newTheme={newTheme}
            setNewTheme={setNewTheme}
          />
        </li>
      ))}
    </ul>
  )
}
