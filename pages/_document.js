import Document, { Head, Html, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="h-full" style={{ scrollBehavior: 'smooth' }}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/tmm0job.css" />
          <link rel="stylesheet" href="https://use.typekit.net/tmm0job.css" />
        </Head>
        <body className="flex h-screen flex-col">
          <div id="portal-root"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
