/* eslint-disable react/no-unescaped-entities */
import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Eric's Portfolio</title>
        <meta name="description" content="Eric's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='image' property='og:image' content='https://www.ericlfrey.com/_next/image?url=%2Fimages%2Fasset.jpg&w=640&q=75' />
        <meta name="title" property="og:title" content="Eric's Portfolio"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='main-container'>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div></>
  )
}
