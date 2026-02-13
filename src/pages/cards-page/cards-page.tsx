import { Helmet } from 'react-helmet-async'
import CardsSection from '../../sections/cards-section/cards-section'
import { TITLE_PREFIX } from '../../utils/constants'
import { useCreditCards } from '../../utils/contexts/credit-cards-context'

export default function CardsPage() {
  const { getSortedCreditCards } = useCreditCards()

  return (
    <>
      <Helmet>
        <title>{TITLE_PREFIX} Cards</title>
      </Helmet>
      <CardsSection creditCards={getSortedCreditCards()} />
    </>
  )
}
