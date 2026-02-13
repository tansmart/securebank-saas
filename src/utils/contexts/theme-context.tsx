import { createContext, useContext, useEffect, useState } from 'react'
import { Theme } from '../types'

type ThemeContextProviderProps = {
  children: React.ReactNode
}

type ThemeContextType = {
  theme: Theme
  isLightTheme: boolean
  setTheme: (newTheme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

function getInitialTheme() {
  const theme = localStorage.getItem('theme')
  return theme ? JSON.parse(theme) : 'system'
}

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const isLightTheme =
    theme === 'light' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: light)').matches)

  return (
    <ThemeContext.Provider value={{ theme, isLightTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be within a ThemeContextProvider')
  }

  return context
}
