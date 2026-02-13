import styles from './dropdown-element.module.css'

type DropdownElementBaseProps = {
  type: 'text' | 'checkbox' | 'radio' | 'date' | 'button'
  label: string
  name?: string
}

type DropdownInputElementProps = DropdownElementBaseProps &
  React.ComponentPropsWithoutRef<'input'>

type DropdownButtonElementProps = DropdownElementBaseProps &
  React.ComponentPropsWithoutRef<'button'>

export default function DropdownInputElement({
  type,
  label,
  name,
  ...props
}: DropdownInputElementProps) {
  return (
    <div className={`${styles.element} ${type === 'date' ? styles.date : ''}`}>
      <input
        className={type === 'date' ? '' : styles.input}
        type={type}
        id={label.split(' ').join('').toLocaleLowerCase()}
        name={name && name.split(' ').join('').toLocaleLowerCase()}
        {...props}
      />
      <label
        className={styles.label}
        htmlFor={label.split(' ').join('').toLocaleLowerCase()}
      >
        {label}
      </label>
    </div>
  )
}

export function DropdownButtonElement({
  label,
  ...props
}: DropdownButtonElementProps) {
  return (
    <div className={styles.element}>
      <button {...props}>{label}</button>
    </div>
  )
}
