import styles from 'styles/Home.module.scss'
import { Header } from './partials/_header'
import { Footer } from './partials/_footer'

import { Web3Matrix } from './partials/_web3Matrix'

import Head from 'next/head'
// import type { Metadata } from 'next'

const metadata = {
  title: 'DEIT Web3 Portal',
  description: 'A web3 portal into DEIT. To be expanded into web3 service offerings exclusive to DEIT.',
  keywords:
    'web3, ERC20, broker, Solidity, EVM, Polygon, Mumbai, deit, digital estate, investment trust, WalletConnect',
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
      <Web3Matrix />
    </main>
  )
}
