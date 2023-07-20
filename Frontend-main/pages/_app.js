import '@/styles/globals.css'
import { Connect } from "@stacks/connect-react"

export default function App({ Component, pageProps }) {
  return (
    <Connect>
      <Component {...pageProps} />
    </Connect>
  )
}
