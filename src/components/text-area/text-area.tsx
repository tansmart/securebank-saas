import styles from './text-area.module.css'

type TextAreaProps = React.ComponentPropsWithoutRef<'textarea'> & {
  label: string
  optional?: boolean
}

export default function TextArea({ label, optional, ...props }: TextAreaProps) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={label.split(' ').join('').toLocaleLowerCase()}>
        {label}
        <span className={styles.optional}>{optional ? '(optional)' : ''}</span>
      </label>
      <textarea
        id={label.split(' ').join('').toLocaleLowerCase()}
        className={styles.textarea}
        required={!optional}
        {...props}
      ></textarea>
    </div>
  )
}
