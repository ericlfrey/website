import '@/styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='image' property='og:image' content='http://www.ericlfrey.com/api/og' />
        <meta name="title" property="og:title" content="Eric's Portfolio"></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
