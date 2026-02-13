import Container from '../../../components/container/container'
import CustomersList from '../../../components/customers-list/customers-list'
import HeroText from '../../../components/landing-page-components/hero-text/hero-text'
import { customers } from '../../../data/customers'
import styles from './customers-section.module.css'

export default function CustomersSection() {
  return (
    <section className={styles.section}>
      <Container>
        <HeroText
          title="Join a Community of Satisfied Customers Transforming Their Finances"
          description="Discover how our users are achieving financial success with our intuitive banking solutions"
        />
        <div className={styles.customersListWrapper}>
          <CustomersList customers={customers} />
        </div>
      </Container>
    </section>
  )
}
