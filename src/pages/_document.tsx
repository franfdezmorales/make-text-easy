import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Imagine that you can modify a text with a few simple instructions, now you can achieve it."
          />
          <meta property="og:site_name" content="maketexteasy.com" />
          <meta
            property="og:description"
            content="Imagine that you can modify a text with a few simple instructions, now you can achieve it."
          />
          <meta property="og:title" content="Make Text Easy" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Make Text Easy" />
          <meta
            name="twitter:description"
            content="Imagine that you can modify a text with a few simple instructions, now you can achieve it."
          />
          <meta
            property="og:image"
            content="https://maketexteasy.com/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://maketexteasy.com/og-image.png"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
