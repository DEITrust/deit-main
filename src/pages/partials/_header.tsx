import styles from 'styles/Home.module.scss'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="flex items-center text-3xl sm:text-4xl">
        <div className="relative">
          <h1 className="brandname">
            <Link href="/" className="font-bold">
              <img src="/deit.webp" alt="Digital Estate Investment Trust" className="h-12" />
            </Link>
          </h1>
        </div>
      </div>
      <div></div>
      <div className="pr-8">
        <Link
          href="/contact"
          className="text-white-700 rounded border border-slate-500 bg-transparent py-2 px-4 font-semibold text-white hover:border-transparent hover:bg-slate-500 hover:text-white"
        >
          Contact
        </Link>
      </div>
    </header>
  )
}

export default Header
