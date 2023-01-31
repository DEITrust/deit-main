import styles from 'styles/Home.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div></div>
      <div className="flex items-center text-5xl sm:text-6xl">
        <div className="relative">
          <h1>
            <strong>&mdash; DEIT. &mdash;</strong>
          </h1>
          <span className="p-1/2 absolute right-0 top-0 rounded-2xl bg-cyan-400 px-1.5 text-xs font-thin text-neutral-900 sm:right-4">
            Est. 2020
          </span>
        </div>
      </div>

      <div className="flex items-center"></div>
    </header>
  )
}

export default Header
