import { createContext, useContext, useEffect, useState } from 'react'
import { integrations as integrationData } from '../../data/integrations'
import { Integration } from '../types'

type IntegrationsContextProviderProps = {
  children: React.ReactNode
}

type IntegrationsContextType = {
  getSortedIntegrations: () => Integration[]
  updateActiveIntegration: (id: number) => void
}

export const IntegrationsContext =
  createContext<IntegrationsContextType | null>(null)

function getInitialIntegrations(): Integration[] {
  const integrations = localStorage.getItem('integrations')
  return integrations ? JSON.parse(integrations) : integrationData
}

export default function IntegrationsContextProvider({
  children,
}: IntegrationsContextProviderProps) {
  const [integrations, setIntegrations] = useState(getInitialIntegrations)

  useEffect(() => {
    localStorage.setItem('integrations', JSON.stringify(integrations))
  }, [integrations])

  function getSortedIntegrations() {
    return integrations.sort((a, b) => a.id - b.id)
  }

  function getIntegrationById(id: number) {
    return integrations.find((integration) => integration.id === id)!
  }

  function updateActiveIntegration(id: number) {
    setIntegrations((prevIntegrations) => {
      const matchingIntegration = getIntegrationById(id)

      return [
        ...prevIntegrations.filter(
          (prevIntegration) => prevIntegration.id !== matchingIntegration.id
        ),
        {
          ...matchingIntegration,
          isActive: !matchingIntegration.isActive,
        },
      ]
    })
  }

  return (
    <IntegrationsContext.Provider
      value={{ getSortedIntegrations, updateActiveIntegration }}
    >
      {children}
    </IntegrationsContext.Provider>
  )
}

export const useIntegrations = () => {
  const context = useContext(IntegrationsContext)
  if (!context) {
    throw new Error(
      'useIntegrations must be within a IntegrationsContextProvider'
    )
  }

  return context
}
