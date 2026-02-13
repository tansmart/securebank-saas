import CreditCardIcon from '../icons/credit-card-icon'
import FileIcon from '../icons/file-icon'
import FileTextIcon from '../icons/file-text-icon'
import SettingsIcon from '../icons/settings-icon'
import WalletIcon from '../icons/wallet-icon'
import AccountPage from '../pages/account-page/account-page'
import CardsPage from '../pages/cards-page/cards-page'
import CustomersPage from '../pages/landing-page-pages/customers-page/customers-page'
import FeaturesPage from '../pages/landing-page-pages/features-page/features-page'
import GuidesPage from '../pages/guides-page/guides-page'
import IntegrationsLandingPage from '../pages/landing-page-pages/integrations-landing-page/integrations-landing-page'
import IntegrationsPage from '../pages/integrations-page/integrations-page'
import MyCardsPage from '../pages/my-cards-page/my-cards-page'
import MyWalletPage from '../pages/my-wallet-page/my-wallet-page'
import PreferencesPage from '../pages/preferences-page/preferences-page'
import RecentTransactionsPage from '../pages/recent-transactions-page/recent-transactions-page'
import SettingsPage from '../pages/settings-page/settings-page'
import { Route } from './types'

export const dashboardRoutes: Route[] = [
  {
    id: 1,
    name: 'My Wallet',
    href: '',
    icon: WalletIcon,
    page: MyWalletPage,
  },
  {
    id: 2,
    name: 'Recent Transactions',
    href: 'recent-transactions',
    icon: FileTextIcon,
    page: RecentTransactionsPage,
  },
  {
    id: 3,
    name: 'My Cards',
    href: 'my-cards',
    icon: CreditCardIcon,
    page: MyCardsPage,
  },
  {
    id: 4,
    name: 'Guides',
    href: 'guides',
    icon: FileIcon,
    page: GuidesPage,
  },
  {
    id: 5,
    name: 'Settings',
    href: 'settings/',
    icon: SettingsIcon,
    page: SettingsPage,
  },
]

export const settingsRoutes: Route[] = [
  {
    id: 1,
    name: 'Account',
    href: '',
    page: AccountPage,
  },
  {
    id: 2,
    name: 'Cards',
    href: 'cards',
    page: CardsPage,
  },
  {
    id: 3,
    name: 'Preferences',
    href: 'preferences',
    page: PreferencesPage,
  },
  {
    id: 4,
    name: 'Integrations',
    href: 'integrations',
    page: IntegrationsPage,
  },
]

export const landingPageNavigationLinks: Route[] = [
  {
    id: 1,
    name: 'Features',
    href: '/features',
    page: FeaturesPage,
  },
  {
    id: 2,
    name: 'Customers',
    href: '/customers',
    page: CustomersPage,
  },
  {
    id: 3,
    name: 'Integrations',
    href: '/integrations',
    page: IntegrationsLandingPage,
  },
]
