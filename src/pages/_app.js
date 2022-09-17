import 'reset-css';
import '../styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
return (
<>
   <Head>
      <link rel="shortcut" href="../../public/favicon.ico" />
      <meta charSet="utf-8" />
      <title>仙台NEXT水族館</title>
      <meta name="description" content="仙台NEXT水族館は他では見られない希少な生物がたくさんいます。
      ダイナミックなイルカショーや小さいお子さん連れのご家族も楽しめるアトラクションもあります。
      ぜひ一度お越しください。" />
      <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="ホームページ 仙台NEXT水族館" />
      <meta name="google" content="nositelinkssearchbox" />
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )

}

export default MyApp
