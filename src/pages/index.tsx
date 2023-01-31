import styles from 'styles/Home.module.scss'
import { Header } from './partials/_header'
import { Brand } from './partials/_brand'
import { Web3Matrix } from './partials/_web3Matrix'
import { StacksProjects } from './partials/_stacksProjects'
import { Foundation } from './partials/_foundation'
import { Footer } from './partials/_footer'

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
      <Brand />
      <Web3Matrix />
      <StacksProjects />
      <Foundation />
    </main>
  )
}
