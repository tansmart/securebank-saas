import { Helmet } from 'react-helmet-async'
import AccountSection from '../../sections/account-section/account-section'
import { TITLE_PREFIX } from '../../utils/constants'

export default function AccountPage() {
  return (
    <>
      <Helmet>
        <title>{TITLE_PREFIX} Account</title>
      </Helmet>
      <AccountSection />
    </>
  )
}
