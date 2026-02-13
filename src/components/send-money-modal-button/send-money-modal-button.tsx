import ModalButton from '../modal-button/modal-button'
import SendMoneyModal from '../send-money-modal/send-money-modal'
import { ButtonProps } from '../button/button'
import useModal from '../../hooks/use-modal'

type SendMoneyModalButtonProps = ButtonProps

export default function SendMoneyModalButton({
  children,
  ...props
}: SendMoneyModalButtonProps) {
  const { isOpened, openModal, closeModal } = useModal()

  return (
    <ModalButton
      label={children}
      isOpened={isOpened}
      openModal={openModal}
      closeModal={closeModal}
      {...props}
    >
      <SendMoneyModal closeModal={closeModal} />
    </ModalButton>
  )
}
