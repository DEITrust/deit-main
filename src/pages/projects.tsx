import styles from 'styles/Home.module.scss'
import { Header } from './partials/_header'
import { Footer } from './partials/_footer'

import { ProjectsList } from './partials/_projectsList'
import { Foundation } from './partials/_foundation'

import Head from 'next/head'
// import type { Metadata } from 'next'

const metadata = {
  title: 'DEIT Projects',
  description: 'Projects and prototypes explored and developed by DEIT.',
  keywords:
    'web3, backend, fullstack, nextjs, reactjs, solidity, go, python, gnoland, erc20, erc721, erc2535, aws, terraform, Canadian',
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
      <ProjectsList />
      <Foundation />
    </main>
  )
}
