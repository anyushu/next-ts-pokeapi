import 'styles/globals.css'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import { fetcher } from 'lib/pokeapi'
import { defaultSeo } from 'next-seo.config'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig
      value={{
        fetcher: fetcher,
      }}
    >
      <DefaultSeo {...defaultSeo} />
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
