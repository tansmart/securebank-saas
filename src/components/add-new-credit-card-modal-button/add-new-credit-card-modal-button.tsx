import AddNewCreditCardModal from '../add-new-credit-card-modal/add-new-credit-card-modal'
import { ButtonProps } from '../button/button'
import ModalButton from '../modal-button/modal-button'
import useModal from '../../hooks/use-modal'

type AddNewCreditCardModalButtonProps = ButtonProps

export default function AddNewCreditCardModalButton({
  children,
  ...props
}: AddNewCreditCardModalButtonProps) {
  const { isOpened, openModal, closeModal } = useModal()

  return (
    <ModalButton
      label={children}
      isOpened={isOpened}
      openModal={openModal}
      closeModal={closeModal}
      {...props}
    >
      <AddNewCreditCardModal closeModal={closeModal} />
    </ModalButton>
  )
}
