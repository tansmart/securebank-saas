import Button from '../../../components/button/button'
import { creditCards } from '../../../data/credit-cards'
import { sortings } from '../../../data/sortings'
import useTransactionFilters from '../../../hooks/use-transaction-filters'
import useTransactionSorts from '../../../hooks/use-transaction-sorts'
import ArrowsDownUpIcon from '../../../icons/arrows-down-up-icon'
import CalendarIcon from '../../../icons/calendar-icon'
import CreditCardIcon from '../../../icons/credit-card-icon'
import EraserIcon from '../../../icons/eraser-icon'
import GiftIcon from '../../../icons/gift-icon'
import SelectorIcon from '../../../icons/selector-icon'
import XIcon from '../../../icons/x-icon'
import { shortDateFormatter } from '../../../utils/helpers/date-formatters'
import { getEndingLastFourDigits } from '../../../utils/helpers/get-last-four-digits'
import { CreditCardId } from '../../../utils/types'
import styles from './applied-filters.module.css'

export default function AppliedFilters() {
  const {
    dateFrom,
    dateTo,
    purpose: filteredPurposes,
    creditCard,
    type: filteredTypes,
    getCreditCardIds,
    removeDate,
    removeFilter,
    clearFilters,
  } = useTransactionFilters()

  const { sort, removeSort } = useTransactionSorts()

  return (
    <div className={styles.appliedFilters}>
      <Button
        variant="tertiary"
        size="small"
        leftIcon={<EraserIcon />}
        disabled={
          [...filteredPurposes, ...creditCard, ...filteredTypes].length === 0 &&
          !dateFrom &&
          !dateTo &&
          !sort
        }
        onClick={() => clearFilters()}
      >
        Clear Filters
      </Button>
      {dateFrom && (
        <Button variant="tertiary" size="small" leftIcon={<CalendarIcon />}>
          {shortDateFormatter(dateFrom)}
          <button
            className={styles.removeFilter}
            onClick={() => removeDate('date-from', dateFrom)}
          >
            <XIcon />
          </button>
        </Button>
      )}
      {dateTo && (
        <Button variant="tertiary" size="small" leftIcon={<CalendarIcon />}>
          {shortDateFormatter(dateTo)}
          <button
            className={styles.removeFilter}
            onClick={() => removeDate('date-to', dateTo)}
          >
            <XIcon />
          </button>
        </Button>
      )}
      <>
        {filteredPurposes.map((filteredPurpose, index) => (
          <Button
            key={index}
            variant="tertiary"
            size="small"
            leftIcon={<GiftIcon />}
          >
            {filteredPurpose}
            <button
              className={styles.removeFilter}
              onClick={() => removeFilter('purpose', filteredPurpose)}
            >
              <XIcon />
            </button>
          </Button>
        ))}
      </>
      <>
        {creditCards.map(
          ({ id, name, numbers }) =>
            getCreditCardIds().includes(id) && (
              <Button
                key={id}
                variant="tertiary"
                size="small"
                leftIcon={<CreditCardIcon />}
              >
                {`${name} ${getEndingLastFourDigits(numbers, true)}`}
                <button
                  className={styles.removeFilter}
                  onClick={() =>
                    removeFilter('credit-card', id.toString() as CreditCardId)
                  }
                >
                  <XIcon />
                </button>
              </Button>
            )
        )}
      </>
      <>
        {filteredTypes.map((filteredType, index) => (
          <Button
            key={index}
            variant="tertiary"
            size="small"
            leftIcon={<ArrowsDownUpIcon />}
          >
            {filteredType}
            <button
              className={styles.removeFilter}
              onClick={() => removeFilter('type', filteredType)}
            >
              <XIcon />
            </button>
          </Button>
        ))}
      </>
      {sortings.map(
        (sorting, index) =>
          sort === sorting.sort && (
            <Button
              key={index}
              variant="tertiary"
              size="small"
              leftIcon={<SelectorIcon />}
            >
              {sorting.label}
              <button
                className={styles.removeFilter}
                onClick={() => removeSort(sort)}
              >
                <XIcon />
              </button>
            </Button>
          )
      )}
    </div>
  )
}
