import { IMAGE_PATH } from '../../../utils/constants'
import styles from './uwu-modal.module.css'

export default function UwuModal() {
  return (
    <article className={styles.modal}>
      <img src={`${IMAGE_PATH}uwu.png`} alt="" className={styles.image} />
      <h3 className={styles.heading}>Are You Serious Right Now Bro</h3>
    </article>
  )
}
