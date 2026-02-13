import Chart from '../../components/chart/chart'
import DropdownButton from '../../components/dropdown-button/dropdown-button'
import DropdownElement from '../../components/dropdown-element/dropdown-element'
import { balanceFilters } from '../../data/balance-filters'
import useBalanceFilters from '../../hooks/use-balance-filters'
import ChevronDownIcon from '../../icons/chevron-down-icon'
import { CreditCard } from '../../utils/types'
import Section from '../section/section'
import styles from './balance-overtime-section.module.css'

type BalanceOvertimeSectionProps = {
  creditCard: CreditCard
}

export default function BalanceOvertimeSection({
  creditCard,
}: BalanceOvertimeSectionProps) {
  const { filter, setFilter, getCreditCardFilteredBalance } =
    useBalanceFilters()

  return (
    <Section>
      <div className={styles.body}>
        <div className={styles.header}>
          <h2>Balance overtime</h2>
          <DropdownButton
            variant="secondary"
            size="medium"
            label="Sort by"
            rightIcon={<ChevronDownIcon />}
          >
            {balanceFilters.map((balanceFilter, index) => (
              <DropdownElement
                label={balanceFilter}
                type="radio"
                onClick={() => setFilter(balanceFilter)}
                checked={filter === balanceFilter}
                key={index}
                readOnly
              />
            ))}
          </DropdownButton>
        </div>
        <Chart data={getCreditCardFilteredBalance(creditCard)} height="small" />
      </div>
    </Section>
  )
}
