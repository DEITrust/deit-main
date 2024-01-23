import styles from 'styles/Home.module.scss'
import { Header } from './partials/_header'
import { Footer } from './partials/_footer'

import { CTA } from './partials/_cta'
import { StacksSkills } from './partials/_stacksSkills'
import { Services } from './partials/_services'
import { Foundation } from './partials/_foundation'

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
      <div className="flex max-w-7xl flex-col sm:flex-row sm:space-x-6">
        <Services />
        <StacksSkills />
      </div>
      <CTA />
      <Foundation />
    </main>
  )
}
