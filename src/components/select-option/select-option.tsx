import ChevronDownIcon from '../../icons/chevron-down-icon'
import styles from './select-option.module.css'

type SelectProps = React.ComponentPropsWithoutRef<'select'> & {
  icon: JSX.Element
  label: string
  optional?: boolean
  children: React.ReactNode
}

export function Select({
  icon: Icon,
  label,
  optional,
  children,
  ...props
}: SelectProps) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={label.split(' ').join('').toLocaleLowerCase()}>
        {label}
        {optional && <span className={styles.optional}>(optional)</span>}
      </label>
      <div className={styles.iconWrapper}>
        <span className={styles.leftIcon}>{Icon}</span>
        <select
          className={styles.select}
          name=""
          id={label.split(' ').join('').toLocaleLowerCase()}
          required={!optional}
          {...props}
        >
          {children}
        </select>
        <span className={styles.rightIcon}>
          <ChevronDownIcon />
        </span>
      </div>
    </div>
  )
}

type OptionProps = React.ComponentPropsWithoutRef<'option'> & {
  label: string
  value: string
}

export function Option({ value, label, ...props }: OptionProps) {
  return (
    <option className={styles.option} value={value} {...props}>
      {label}
    </option>
  )
}
