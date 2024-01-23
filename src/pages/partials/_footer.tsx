import styles from 'styles/Home.module.scss'
import { ThemeToggleButton } from 'components/Theme'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <ThemeToggleButton />
      </div>

      <div className="mb-8 flex w-full flex-col items-center justify-end sm:mb-0 sm:max-w-xl sm:flex-row">
        <div>
          <Link href="/" className="font-bold">
            <img src="/deit.webp" alt="Digital Estate Investment Trust" className="h-8" />
          </Link>
        </div>
        <div className="">
          <a href="https://www.linkedin.com/in/brandon-thorn-03662b36/" target="_blank" rel="noreferrer">
            <img
              src="./me.jpeg"
              alt="Brandon Thorn, the guy with too many ideas and not enough time or seed capital...yet"
              className="my-4 w-24 sm:my-0 sm:ml-4 sm:h-12 sm:w-10 sm:py-1"
            />
          </a>
        </div>
        <div className="ml-4 mr-8 text-center ">
          A
          <a
            href="https://www.linkedin.com/in/brandon-thorn-03662b36/"
            className="mx-2 font-bold underline"
            target="_blank"
            rel="noreferrer"
          >
            Brandon Thorn
          </a>
          /<br className="sm:hidden" />
          <a href="https://brandonthorn.com" className="mx-2 font-bold underline" target="_blank" rel="noreferrer">
            proggR
          </a>
          project.
        </div>
      </div>
    </footer>
  )
}

export default Footer
