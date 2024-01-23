import styles from 'styles/Home.module.scss'
import { Header } from './partials/_header'
import { Footer } from './partials/_footer'

import { Contact } from './partials/_contact'

import Head from 'next/head'
// import type { Metadata } from 'next'

const metadata = {
  title: 'Contact DEIT',
  description: 'Contact DEIT to discuss a project.',
  keywords:
    'consulting, development, fractional cto, VC, venture capital, fundraising, investing, web3, gamedev, Canadian, deit, digital estate, investment trust',
}

export default function Home() {
  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

const Main = () => {
  return (
    <main className={styles.main + ' space-y-6'}>
      <Contact />
    </main>
  )
}
