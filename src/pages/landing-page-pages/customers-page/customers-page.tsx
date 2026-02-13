import { Helmet } from 'react-helmet-async'
import { TITLE_PREFIX } from '../../../utils/constants'
import CustomersSection from '../../../sections/landing-page-sections/customers-section/customers-section'

export default function CustomersPage() {
  return (
    <>
      <Helmet>
        <title>{TITLE_PREFIX} Customers</title>
      </Helmet>
      <CustomersSection />
    </>
  )
}
