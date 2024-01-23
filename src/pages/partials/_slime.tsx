import styles from 'styles/Home.module.scss'

export const Slime = () => {
  return (
    <div className={`w-full rounded-xl bg-neutral-500/10 p-6 text-center `}>
      <h3 className="mb-8 text-3xl font-bold">Slime Brawly Brawl</h3>

      <div className="flex w-full flex-col sm:flex-row sm:space-x-6">
        <div className="my-8 basis-1/3 rounded-xl bg-slate-200 p-6 text-center text-neutral-900">
          <div className="m-auto max-w-sm">
            <img src="/fullcover.png" alt="Slime Brawly Brawl fullcover" />
            <p className="mt-4 w-full">
              An early prototype, Slime Brawly Brawl exists to scratch an itch. An itch for a simple, fast paced
              platformer melee game like 90s kids might have played and loved growing up.{' '}
            </p>
          </div>
        </div>

        <div className="flex basis-1/3 flex-col sm:flex-row sm:space-x-6">
          <div className="my-8 w-full rounded-xl bg-slate-200 p-6 text-center text-neutral-900">
            <h4 className="mt-4 text-3xl font-bold underline">v0 Teaser Trailer</h4>
            <p className="mt-4 w-full">
              <video autoPlay loop controls={true}>
                <source src="/slimeVlaunch.mp4" />
              </video>
            </p>
            <div className="m-auto max-w-sm"></div>
            <p className="mt-8 w-full">
              Get it now, only on{' '}
              <a
                href="https://store.steampowered.com/app/2721250/Slime_Brawly_Brawl/"
                target="_blank"
                rel="noreferrer"
                className="font-bold underline"
              >
                Steam
              </a>
            </p>
          </div>
        </div>

        <div className="flex basis-1/3 flex-col sm:flex-row sm:space-x-6">
          <div className="my-8 w-full rounded-xl bg-slate-200 p-6 text-center text-neutral-900">
            <h4 className="mt-4 text-3xl font-bold underline">Release Milestones</h4>
            <p className="w-full"></p>
            <div className="m-auto max-w-sm"></div>
            <ul className="mt-4 text-left">
              <li>
                <strong>v0.0.0 (you are here)</strong>: Basic prototype of the core game loop
              </li>
              <li>
                <strong>v0.0.1 (in dev)</strong>: New slime models, UI polish, Steam integrations
              </li>
              <li>
                <strong>v0.0.2</strong>: New actions, thinking grapple and ranged maybe?
              </li>
              <li>
                <strong>v0.0.3</strong>: Local multiplayer vs mode... the real reason I started it
              </li>
              <li>
                <strong>v0.0.4</strong>: Local 2v2 co-op mode, basically 2 player endless run
              </li>
              <li>
                <strong>v0.0.5</strong>: Local 1v3 and 2v2 vs, basically 4 player local multiplayer
              </li>
              <li>
                <strong>v0.0.6 through v0.9.0</strong>: Communities choice! Help shape it ahead of the dream...
              </li>
              <li>
                <strong>v1.0.0</strong>: Online pvp, 2v2 and 3v3 modes... a challenge, but it would be fun to reach
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slime
