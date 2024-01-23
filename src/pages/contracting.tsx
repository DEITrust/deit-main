import styles from 'styles/Home.module.scss'
import { Header } from './partials/_header'
import { Footer } from './partials/_footer'

import { CTA } from './partials/_cta'
import { StacksSkills } from './partials/_stacksSkills'
import { Services } from './partials/_services'
import { Foundation } from './partials/_foundation'

import Head from 'next/head'
// import type { Metadata } from 'next'

const metadata = {
  title: 'DEIT Consulting',
  description: 'Consulting, development and Fractional CTO services for web3 projects, small teams, and small/medium sized businesses.',
  keywords: 'consulting, development, fractional cto, web3, backend, fullstack, technologist, nextjs, reactjs, solidity, go, python, gnoland, erc2535, aws, terraform, Canadian',
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
      <div className="flex max-w-7xl flex-col sm:flex-row sm:space-x-6">
        <Services />
        <StacksSkills />
      </div>
      <CTA />
      <Foundation />
    </main>
  )
}
