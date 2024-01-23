import styles from 'styles/Home.module.scss'
import Link from 'next/link'

export const HomeLinks = () => {
  return (
    <div className={`w-full max-w-7xl rounded-xl bg-neutral-500/10 p-6 text-center ${styles.dl}`}>
      <h3 className="mb-2 text-3xl font-bold">Projects & Services</h3>
      <div className="flex w-full flex-col space-y-8 sm:flex-row sm:space-x-8">
        <div className="mt-8 flex w-full items-center justify-center rounded-xl bg-slate-200 p-8 text-neutral-900 sm:basis-1/3">
          <div>
            <h4 className="mb-2 text-xl font-bold">Projects</h4>
            <p className="mb-8 text-sm">
              Spanning games/virtual worlds to distributed tech and novel socio-economic models, DEIT has been fortunate
              to work on a wide array of interesting and bleeding edge projects.
            </p>
            <p>
              <Link
                href="/projects"
                className="rounded border border-slate-500 bg-transparent py-2 px-4 font-semibold text-slate-700 hover:border-transparent hover:bg-slate-500 hover:text-white"
              >
                See Projects
              </Link>
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center rounded-xl bg-slate-200 p-8 text-neutral-900 sm:basis-1/3">
          <div>
            <h4 className="mb-2 text-xl font-bold">Consulting</h4>
            <p className="mb-8 text-sm">
              With over 13 years combining fullstack/web3 development, devops, and Fractional CTO experience, DEIT is
              happy to entertain clients in need of a technologist or developer.
            </p>
            <p>
              <Link
                href="/contracting"
                className="rounded border border-slate-500 bg-transparent py-2 px-4 font-semibold text-slate-700 hover:border-transparent hover:bg-slate-500 hover:text-white"
              >
                See Services
              </Link>
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center rounded-xl bg-slate-200 p-8 text-neutral-900 sm:basis-1/3">
          <div>
            <h4 className="mb-2 text-xl font-bold">Web3</h4>
            <p className="mb-8 text-sm">
              Having followed DLT for the past decade, developing smart contracts off and on for half that time, a
              growing number of web3 projects is what created DEIT, with more to come.
            </p>
            <p>
              <Link
                href="/web3"
                className="rounded border border-slate-500 bg-transparent py-2 px-4 font-semibold text-slate-700 hover:border-transparent hover:bg-slate-500 hover:text-white"
              >
                Enter Web3
              </Link>
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center rounded-xl bg-slate-200 p-8 text-neutral-900 sm:basis-1/3">
          <div>
            <h4 className="mb-2 text-xl font-bold">DEIT Games</h4>
            <p className="mb-8 text-sm">
              DEIT has produced a growing catalog of game/virtual world prototypes intended for release. The first of
              which is Slime Brawly Brawl, available now only on{' '}
              <a
                className="font-bold underline"
                href="https://store.steampowered.com/app/2721250/Slime_Brawly_Brawl/"
                rel="noreferrer"
                target="_blank"
              >
                Steam
              </a>
              .
            </p>
            <p>
              <Link
                href="/slime"
                className="rounded border border-slate-500 bg-transparent py-2 px-4 font-semibold text-slate-700 hover:border-transparent hover:bg-slate-500 hover:text-white"
              >
                Slime Brawly Brawl
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeLinks
