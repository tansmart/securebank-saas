import { Theme, Themes } from '../../utils/types'
import PreferencesCard from '../preferences-card/preferences-card'
import styles from './theme-card.module.css'

type ThemeCardProps = Themes & {
  newTheme: Theme
  setNewTheme: React.Dispatch<React.SetStateAction<Theme>>
}

export default function ThemeCard({
  name,
  label,
  imageUrl,
  newTheme,
  setNewTheme,
}: ThemeCardProps) {
  return (
    <button className={styles.button} onClick={() => setNewTheme(name)}>
      <PreferencesCard
        imageUrl={imageUrl}
        label={label}
        isActive={name === newTheme}
      />
    </button>
  )
}
