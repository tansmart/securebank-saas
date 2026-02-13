import { IMAGE_PATH } from '../../../utils/constants'
import { useTheme } from '../../../utils/contexts/theme-context'
import BentoCard from '../../bento-card/bento-card'

export default function KeyboardShortcutsBentoCard() {
  const { isLightTheme } = useTheme()
  return (
    <BentoCard
      title="Swift and Rapid Navigation Choices"
      description="Optimize performance with intuitive keyboard shortcuts to expedite routine tasks"
    >
      <img
        src={`${IMAGE_PATH}keyboard-${isLightTheme ? 'light' : 'dark'}.svg`}
        alt="Keyboard"
      />
    </BentoCard>
  )
}
