import LandingPageSection from '../landing-page-section/landing-page-section'
import { financialControlFeatures } from '../../../data/features'
import FeatureCellList from '../../../components/landing-page-components/feature-cell-list/feature-cell-list'

export default function FinancialControlSection() {
  return (
    <LandingPageSection
      heading="Comprehensive Fraud Protection and Valuable Spending Insights"
      paragraph="Safeguard your finances with robust security measures that protect against fraud while gaining insights into your spending trends"
    >
      <FeatureCellList features={financialControlFeatures} />
    </LandingPageSection>
  )
}
