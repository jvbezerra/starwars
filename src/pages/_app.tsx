import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { SWRConfig } from 'swr'
import axios from 'axios'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App ({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{
      fetcher: async (...urls: string[]) => {
        const fetch = (url: string) => axios.get(url).then(({ data }) => data)
        if (urls.length > 1) return Promise.all(urls.map(fetch))
        return fetch(urls[0])
      }
    }}>
      <ThemeProvider theme={darkTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  )
}

export default App
