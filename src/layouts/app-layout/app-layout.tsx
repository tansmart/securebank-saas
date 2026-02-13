import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Container from '../../components/container/container'
import PostHogPageviewTracker from '../../components/post-hog-pageview-tracker/post-hog-pageview-tracker'
import Sidebar from '../../components/sidebar/sidebar'
import styles from './app-layout.module.css'

export default function AppLayout() {
  return (
    <div id="app-layout" className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <Container>
          <PostHogPageviewTracker />
          <Outlet />
        </Container>
      </main>
      <ToastContainer />
    </div>
  )
}
