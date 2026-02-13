import LandingPageSection from '../landing-page-section/landing-page-section'
import FeatureCellList from '../../../components/landing-page-components/feature-cell-list/feature-cell-list'
import { financialFeatures } from '../../../data/features'

export default function FinancialManagementSolutions() {
  return (
    <LandingPageSection
      heading="Streamlining Your Financial Management Process Effortlessly"
      paragraph="Simplify the management of your finances and effortlessly gain valuable insights to make informed decisions with ease"
    >
      <FeatureCellList features={financialFeatures} />
    </LandingPageSection>
  )
}
