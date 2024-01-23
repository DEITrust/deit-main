import styles from 'styles/Home.module.scss'
import { Header } from './partials/_header'
import { Footer } from './partials/_footer'

import { SlimeBrand } from './partials/_slimeBrand'
import { Slime } from './partials/_slime'

import Head from 'next/head'
// import type { Metadata } from 'next'

const metadata = {
  title: 'Slime Brawly Brawl, by DEIT Games',
  description: 'Fast paced platformer melee game, available only on Steam.',
  keywords:
    'Steam game, indie game, early access, retro, melee, platformer, fighting, brawler, Unity3D, deit, digital estate, investment trust',
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
      <Slime />
      <SlimeBrand />
    </main>
  )
}
