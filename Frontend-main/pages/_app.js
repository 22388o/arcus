import '@/styles/globals.css'
import { Connect } from "@stacks/connect-react"
import { store } from '@/store';
import { Provider } from 'react-redux'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Connect>
        {/* <div className="grid grid-cols-1 md:grid-cols-[220px,1fr]"> */}
          {/* <Navbar />
          <Sidebar /> */}
          {/* <div className="md:col-start-2 md:col-end-3"> */}
            <Component {...pageProps} />
          {/* </div> */}
          {/* <Footer /> */}
        {/* </div> */}
      </Connect>
    </Provider>
  );
}