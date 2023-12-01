import styles from 'styles/Home.module.scss'

export const Slime = () => {
  return (
    <div className={`w-full basis-2/3 rounded-xl bg-neutral-500/10 p-6 text-center ${styles.dl}`}>
      <h3 className="mb-8 text-3xl font-bold underline">Slime Brawly Brawl</h3>
      <div className="mb-8  mt-8 flex w-full flex-col sm:flex-row">
        <div className="mr-8 mb-8 w-full">
          <div className="m-auto max-w-sm">
            <img src="/fullcover.png" alt="Slime Brawly Brawl fullcover" />
            <p className="mt-4 w-full">
              An early prototype, Slime Brawly Brawl exists to scratch an itch. An itch for a simple, fast paced
              platformer melee game like 90s kids might have played and loved growing up.{' '}
            </p>
            <h4 className="mt-8 text-3xl font-bold underline">v0 Teaser Trailer</h4>
            <p className="w-full">
              <video autoPlay loop style={{ width: '500px', height: '300px' }} controls={true}>
                <source src="/slimeVlaunch.mp4" />
              </video>
            </p>

            <p className="w-full">Get it very soon, only on Steam</p>
          </div>
        </div>
        <hr className="mb-6 sm:mb-0 sm:hidden" />
      </div>
    </div>
  )
}

export default Slime
