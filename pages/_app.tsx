import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalProvider } from '../state/global'
import { ToastContainer } from 'react-toastify'
import { Web3ContextProvider } from '../state'
import Layout from '../components/layout'
import Head from 'next/head'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ContextProvider>
      <GlobalProvider>
      <Layout>
      <Head>
        <title>Univac</title>
        <meta name="description" content="Evermoon's NFT Marketplace" />
      </Head>
      <main>
        <div className="relative bg-[#111111] z-[0] ">
          <Component {...pageProps} />
          
          {/* <div className="h-16" />  */}
        </div>
      </main>

    </Layout>
          <ToastContainer
          position="bottom-right" />
      </GlobalProvider>
    </Web3ContextProvider>
  )
}

export default MyApp
