import { IMAGE_PATH } from '../../../utils/constants'
import { useTheme } from '../../../utils/contexts/theme-context'
import BentoCard from '../../bento-card/bento-card'
import styles from './credit-cards-bento-card.module.css'

export default function CreditCardsBentoCard() {
  const { isLightTheme } = useTheme()

  return (
    <BentoCard
      title="Comprehensive Card Management Tools"
      description="Easily Manage and Navigate Through Multiple Cards with Diverse Financial Data"
    >
      <img
        src={`${IMAGE_PATH}credit-cards-landing-page-${
          isLightTheme ? 'light' : 'dark'
        }.png`}
        alt="Credit Cards"
        className={styles.image}
      />
    </BentoCard>
  )
}
