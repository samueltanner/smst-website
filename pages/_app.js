import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/tmm0job.css" />
        <link rel="stylesheet" href="https://use.typekit.net/tmm0job.css" />
        <title>Sam Tanner</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
