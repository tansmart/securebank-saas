import HolyLoader from 'holy-loader'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './assets/index.css'

posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  capture_pageview: false,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <HolyLoader color="var(--brand-500)" height={2} ignoreSearchParams />
      <App />
    </PostHogProvider>
  </StrictMode>
)
