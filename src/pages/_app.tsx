import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import axios from 'axios'

function App ({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{
      fetcher: async (url: string) => {
        const { data } = await axios.get(url)
        return data
      }
    }}>
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default App
