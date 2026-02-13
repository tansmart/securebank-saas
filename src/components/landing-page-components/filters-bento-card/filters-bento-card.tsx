import { purposes } from '../../../data/purposes'
import { types } from '../../../data/types'
import useHandleCheckbox from '../../../hooks/use-handle-checkbox'
import useTransactionFilters from '../../../hooks/use-transaction-filters'
import ArrowsDownUpIcon from '../../../icons/arrows-down-up-icon'
import CreditCardIcon from '../../../icons/credit-card-icon'
import EraserIcon from '../../../icons/eraser-icon'
import GiftIcon from '../../../icons/gift-icon'
import XIcon from '../../../icons/x-icon'
import { useCreditCards } from '../../../utils/contexts/credit-cards-context'
import { useTransactions } from '../../../utils/contexts/transactions-context'
import { getEndingLastFourDigits } from '../../../utils/helpers/get-last-four-digits'
import { CreditCardId } from '../../../utils/types'
import BentoCard from '../../bento-card/bento-card'
import Button from '../../button/button'
import DropdownButton from '../../dropdown-button/dropdown-button'
import DropdownInputElement from '../../dropdown-element/dropdown-element'
import styles from './filters-bento-card.module.css'

export default function FiltersBentoCard() {
  const {
    filteredTransactions,
    purpose: filteredPurposes,
    getCreditCardIds,
    type: filteredTypes,
    setFilter,
    removeFilter,
    clearFilters,
  } = useTransactionFilters()
  const { handleCheckbox } = useHandleCheckbox()
  const { creditCards } = useCreditCards()
  const { transactions } = useTransactions()

  return (
    <BentoCard
      title="Structured Organization Solutions Set"
      description="Easily customize and filter historical transactions based on your specific preferences"
    >
      <div className={styles.filters}>
        <div className={styles.filtersGroup}>
          <h3 className={styles.heading}>Filters</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <DropdownButton
                variant="tertiary"
                size="medium"
                label="Purpose"
                rightIcon={<GiftIcon />}
              >
                {purposes.slice(0, 2).map(({ purpose, id }) => (
                  <DropdownInputElement
                    label={purpose}
                    key={id}
                    type="checkbox"
                    name={purpose}
                    readOnly
                    checked={handleCheckbox(purpose)}
                    onClick={() => setFilter('purpose', purpose)}
                  />
                ))}
              </DropdownButton>
            </li>
            <li className={styles.item}>
              <DropdownButton
                variant="tertiary"
                size="medium"
                label="Credit Card"
                rightIcon={<CreditCardIcon />}
              >
                {creditCards.slice(0, 2).map(({ id, name, numbers }) => (
                  <DropdownInputElement
                    label={getEndingLastFourDigits(numbers)}
                    key={id}
                    type="checkbox"
                    name={`${name} ${getEndingLastFourDigits(numbers, true)}`}
                    readOnly
                    checked={handleCheckbox(id.toString() as CreditCardId)}
                    onClick={() =>
                      setFilter('credit-card', id.toString() as CreditCardId)
                    }
                  />
                ))}
              </DropdownButton>
            </li>
            <li className={styles.item}>
              <DropdownButton
                variant="tertiary"
                size="medium"
                label="Type"
                rightIcon={<ArrowsDownUpIcon />}
              >
                {types.map(({ type, id }) => (
                  <DropdownInputElement
                    label={type}
                    key={id}
                    type="checkbox"
                    name={type}
                    readOnly
                    checked={handleCheckbox(type)}
                    onClick={() => setFilter('type', type)}
                  />
                ))}
              </DropdownButton>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.heading}>
            Showing {filteredTransactions.length} of {transactions.length}{' '}
            results
          </h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Button
                variant="tertiary"
                size="small"
                leftIcon={<EraserIcon />}
                disabled={
                  [...filteredPurposes, ...getCreditCardIds(), ...filteredTypes]
                    .length === 0
                }
                onClick={() => clearFilters()}
              >
                Clear Filters
              </Button>
            </li>
            {filteredPurposes.map((filteredPurpose, index) => (
              <li key={index} className={styles.item}>
                <Button variant="tertiary" size="small" leftIcon={<GiftIcon />}>
                  {filteredPurpose}
                  <span
                    onClick={() => removeFilter('purpose', filteredPurpose)}
                  >
                    <XIcon />
                  </span>
                </Button>
              </li>
            ))}
            {creditCards.map(
              ({ id, name, numbers }) =>
                getCreditCardIds().includes(id) && (
                  <li key={id} className={styles.item}>
                    <Button
                      variant="tertiary"
                      size="small"
                      leftIcon={<CreditCardIcon />}
                    >
                      {`${name} ${getEndingLastFourDigits(numbers, true)}`}
                      <span
                        onClick={() =>
                          removeFilter(
                            'credit-card',
                            id.toString() as CreditCardId
                          )
                        }
                      >
                        <XIcon />
                      </span>
                    </Button>
                  </li>
                )
            )}
            {filteredTypes.map((filteredType, index) => (
              <li key={index} className={styles.item}>
                <Button
                  variant="tertiary"
                  size="small"
                  leftIcon={<ArrowsDownUpIcon />}
                >
                  {filteredType}
                  <span onClick={() => removeFilter('type', filteredType)}>
                    <XIcon />
                  </span>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BentoCard>
  )
}
