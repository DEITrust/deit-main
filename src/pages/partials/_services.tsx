import styles from 'styles/Home.module.scss'
import Link from 'next/link'

export const Services = () => {
  return (
    <div className={`w-full basis-1/2 rounded-xl bg-neutral-500/10 p-6 text-center ${styles.dl}`}>
      <h3 className="mb-8 text-3xl font-bold">Services</h3>
      <div>
        <div className={`w-full rounded-xl bg-neutral-500/10 p-4 text-left ${styles.dl}`}>
          <div className="mb-4 w-full">
            <div className="m-auto">
              <dt>Consulting</dt>
              <p className="mt-4">
                Have a project or business in need of insights from a veteran technologist? Happy to discuss.
              </p>
            </div>
          </div>
        </div>
        <div className={`mt-4 w-full rounded-xl bg-neutral-500/10 p-4 text-left ${styles.dl}`}>
          <div className="mt-0 mb-4 w-full">
            <div className="m-auto ">
              <dt>Development</dt>
              <p className="mt-4">
                Need web3/backend/fullstack development work done? Happy to entertain projects, even if its building
                with something not listed here.
              </p>
            </div>
          </div>
        </div>
        <div className={`mt-4 w-full rounded-xl bg-neutral-500/10 p-4 text-left ${styles.dl}`}>
          <div className="mt-0 mb-4 w-full">
            <div className="m-auto ">
              <dt>Fractional CTO</dt>
              <p className="mt-4 mb-4">
                For projects who&apos;s mission aligns well enough, more embedded long term architecture, strategy
                development & consulting is available.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-8" />
      <div className="mb-6 mt-6 w-full">
        <div className=" mb-8 mr-2">
          <div className="m-auto max-w-sm">
            <dt>Something else in mind?</dt>
            <p className="my-4">Happy to entertain RFPs.</p>
            <p>
              <Link href="/contact" className="font-bold underline">
                Contact
              </Link>{' '}
              if you want to chat more.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
