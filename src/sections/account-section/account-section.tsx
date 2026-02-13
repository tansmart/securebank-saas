import { useState } from 'react'
import Button from '../../components/button/button'
import Input from '../../components/input/input'
import MailIcon from '../../icons/mail-icon'
import PhoneIcon from '../../icons/phone-icon'
import UserIcon from '../../icons/user-icon'
import Section from '../section/section'
import styles from './account-section.module.css'
import { useUserInformations } from '../../utils/contexts/user-informations-context'
import {
  onlyLettersMask,
  phoneMask,
  phoneMaskCleaner,
} from '../../utils/helpers/input-masks'
import { UserInformations } from '../../utils/types'
import displayToast from '../../utils/toast'

export default function AccountSection() {
  const { userInformations, updateUserInformations } = useUserInformations()

  const initialFormFields = {
    phoneNumber: phoneMask(userInformations.phoneNumber.toString()),
  }

  const initialUserInformations: UserInformations = {
    firstName: userInformations.firstName,
    lastName: userInformations.lastName,
    imageUrl: userInformations.imageUrl,
    emailAddress: userInformations.emailAddress,
    phoneNumber: userInformations.phoneNumber,
  }

  const [formFields, setFormFields] = useState(initialFormFields)
  const [newUserInformations, setNewUserInformations] = useState(
    initialUserInformations
  )

  const isButtonDisabled =
    (newUserInformations.firstName === userInformations.firstName &&
      newUserInformations.lastName === userInformations.lastName &&
      newUserInformations.imageUrl === userInformations.imageUrl &&
      newUserInformations.emailAddress === userInformations.emailAddress &&
      newUserInformations.phoneNumber === userInformations.phoneNumber) ||
    newUserInformations.phoneNumber.toString().length < 10

  return (
    <Section>
      <form
        onSubmit={(e) => {
          e.preventDefault()

          updateUserInformations(newUserInformations)
          displayToast('User Information Updated Successfully!')
        }}
      >
        <div className={styles.head}>
          <div className={styles.profilePicture}>
            <h2>Profile Picture</h2>
            <div className={styles.profilePictureContent}>
              <div className={styles.profilePictureWrapper}>
                <label htmlFor="file-input" className={styles.fileInputLabel}>
                  Upload
                </label>
                <input
                  type="file"
                  id="file-input"
                  accept="image/jpeg, image/png"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    const reader = new FileReader()

                    if (!file) return

                    reader.onload = () => {
                      reader.result &&
                        setNewUserInformations({
                          ...newUserInformations,
                          imageUrl: reader.result.toString(),
                        })
                    }

                    reader.readAsDataURL(file)
                  }}
                  className={styles.fileInput}
                />
                <img
                  src={newUserInformations.imageUrl}
                  alt=""
                  className={styles.profilePictureImage}
                />
              </div>
            </div>
          </div>
          <div>
            <h2>User Information</h2>
            <div className={styles.inputs}>
              <div className={styles.inputGroup}>
                <Input
                  type="text"
                  label="First Name"
                  leftIcon={<UserIcon />}
                  value={newUserInformations.firstName}
                  minLength={0}
                  onChange={(e) => {
                    setNewUserInformations({
                      ...newUserInformations,
                      firstName: onlyLettersMask(e.target.value),
                    })
                  }}
                  className={styles.input}
                />
                <Input
                  type="text"
                  label="Last Name"
                  leftIcon={<UserIcon />}
                  value={newUserInformations.lastName}
                  minLength={0}
                  onChange={(e) => {
                    setNewUserInformations({
                      ...newUserInformations,
                      lastName: onlyLettersMask(e.target.value),
                    })
                  }}
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <Input
                  type="email"
                  label="Email Address"
                  leftIcon={<MailIcon />}
                  minLength={13}
                  value={newUserInformations.emailAddress}
                  onChange={(e) => {
                    setNewUserInformations({
                      ...newUserInformations,
                      emailAddress: e.target.value,
                    })
                  }}
                  className={styles.input}
                />
                <Input
                  type="tel"
                  label="Phone Number"
                  leftIcon={<PhoneIcon />}
                  minLength={0}
                  value={formFields.phoneNumber}
                  onChange={(e) => {
                    setFormFields({
                      ...formFields,
                      phoneNumber: phoneMask(e.target.value),
                    })
                    setNewUserInformations({
                      ...newUserInformations,
                      phoneNumber: phoneMaskCleaner(e.target.value),
                    })
                  }}
                  className={styles.input}
                />
              </div>
            </div>
          </div>
        </div>
        <Button
          variant="primary"
          size="large"
          type="submit"
          disabled={isButtonDisabled}
        >
          Save Changes
        </Button>
      </form>
    </Section>
  )
}
