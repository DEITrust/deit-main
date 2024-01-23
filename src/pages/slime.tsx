import styles from 'styles/Home.module.scss'
import { Header } from './partials/_header'
import { Footer } from './partials/_footer'

import { SlimeBrand } from './partials/_slimeBrand'
import { Slime } from './partials/_slime'

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
      <Slime />
      <SlimeBrand />
    </main>
  )
}
