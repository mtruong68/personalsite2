import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link rel="icon" type="image/x-icon" href="/images/seal.ico" />
        <meta name="description" content="Mary is a developer, artist, and writer. Her site documents the things she makes." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
