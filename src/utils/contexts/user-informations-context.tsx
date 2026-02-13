import { createContext, useContext, useEffect, useState } from 'react'
import { UserInformations } from '../types'
import { userInformations as defaultUserInformations } from '../../data/user-informations'

type UserInformationsContextProviderProps = {
  children: React.ReactNode
}

type UserInformationsContextType = {
  userInformations: UserInformations
  updateUserInformations: (newUserInformations: UserInformations) => void
}

export const UserInformationsContext =
  createContext<UserInformationsContextType | null>(null)

function getInitialUserInformations() {
  const userInformations = localStorage.getItem('user-informations')
  return userInformations
    ? JSON.parse(userInformations)
    : defaultUserInformations
}

export default function UserInformationsContextProvider({
  children,
}: UserInformationsContextProviderProps) {
  const [userInformations, setUserInformations] = useState<UserInformations>(
    getInitialUserInformations
  )

  function updateUserInformations(newUserInformations: UserInformations) {
    setUserInformations({ ...newUserInformations })
  }

  useEffect(() => {
    localStorage.setItem('user-informations', JSON.stringify(userInformations))
  }, [userInformations])

  return (
    <UserInformationsContext.Provider
      value={{ userInformations, updateUserInformations }}
    >
      {children}
    </UserInformationsContext.Provider>
  )
}

export const useUserInformations = () => {
  const context = useContext(UserInformationsContext)
  if (!context) {
    throw new Error(
      'useUserInformations must be within a UserInformationsContextProvider'
    )
  }

  return context
}
