import styles from './switch.module.css'

type SwitchProps = React.ComponentPropsWithoutRef<'input'>

export default function Switch({ ...props }: SwitchProps) {
  return <input className={styles.switch} type="checkbox" {...props} />
}
