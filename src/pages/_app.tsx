import '@styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@components/Layout'
import { NextIntlProvider } from 'next-intl';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextIntlProvider>
  )
}
