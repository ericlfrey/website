import '@/styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='image' property='og:image' content='http://www.ericlfrey.com/_next/image?url=%2Fimages%2Fasset.jpg&w=640&q=75' />
        <meta name="title" property="og:title" content="Eric's Portfolio"></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
