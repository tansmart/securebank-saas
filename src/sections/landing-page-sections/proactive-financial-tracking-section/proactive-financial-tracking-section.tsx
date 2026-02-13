import FeatureCellList from '../../../components/landing-page-components/feature-cell-list/feature-cell-list'
import { budgetingAndTrackingFeatures } from '../../../data/features'
import LandingPageSection from '../landing-page-section/landing-page-section'

export default function ProactiveFinancialTrackingSection() {
  return (
    <LandingPageSection
      heading="Stay Ahead of Your Finances with Real-Time Insightful Tracking"
      paragraph="Gain comprehensive insights into your financial habits, trends, and patterns for improved financial planning and management"
    >
      <FeatureCellList features={budgetingAndTrackingFeatures} />
    </LandingPageSection>
  )
}
