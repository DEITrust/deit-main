import styles from 'styles/Home.module.scss'
import { Header } from './partials/_header'
import { Footer } from './partials/_footer'

import { Brand } from './partials/_brand'
import { HomeLinks } from './partials/_homeLinks'

import Head from 'next/head'
import { app } from 'appConfig'

// import type { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'DEIT Web3',
//   description: 'A web3 portal into DEIT, to be expanded into web3 service offerings.',
// }

const metadata = {
  title: app.title,
  description: app.description,
  keywords: app.keywords,
}

export default function Home() {
  return (
    <div className={`${styles.container}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

const Main = () => {
  return (
    <main className={styles.main + ' space-y-6'}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
      </Head>

      <Brand />
      <HomeLinks />
    </main>
  )
}
