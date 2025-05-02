import styles from 'styles/Home.module.scss'
import Link from 'next/link'

export const Services = () => {
  return (
    <div className={`mr-4 ml-4 basis-1/2 p-6 text-center md:mx-0 md:w-full ${styles.dl}`}>
      <h3 className="mb-8 text-3xl font-bold">Services</h3>
      <div>
        <div className={`mt-4 w-full rounded-xl bg-neutral-500/10 p-4 text-left ${styles.dl}`}>
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
              <p className="mt-4">Need fullstack/backend/web3 development? Happy to entertain new projects.</p>
            </div>
          </div>
        </div>
        <div className={`mt-4 w-full rounded-xl bg-neutral-500/10 p-4 text-left ${styles.dl}`}>
          <div className="mt-0 mb-4 w-full">
            <div className="m-auto ">
              <dt>Company Training</dt>
              <p className="mt-4 mb-4">
                Technology, security and privacy best practice training. Per-client curriculum available.
              </p>
            </div>
          </div>
        </div>
        <div className={`mt-4 w-full rounded-xl bg-neutral-500/10 p-4 text-left ${styles.dl}`}>
          <div className="mt-0 mb-4 w-full">
            <div className="m-auto ">
              <dt>Fractional CTO</dt>
              <p className="mt-4 mb-4">
                For projects who&apos;s mission aligns well enough, Fractional CTO slots available.
              </p>
            </div>
          </div>
        </div>
        <div className={`mt-4 w-full rounded-xl bg-neutral-500/10 p-4 text-left ${styles.dl}`}>
          <div className="mt-0 mb-4 w-full">
            <div className="m-auto ">
              <dt>Private Tutoring</dt>
              <p className="mt-4 mb-4">
                Need help learning a new technology? Per-student curriculums and tutoring available.
              </p>
            </div>
          </div>
        </div>
        <div className={`mt-4 w-full rounded-xl bg-neutral-500/10 p-4 text-left ${styles.dl}`}>
          <div className="mb-4 w-full">
            <div className="m-auto">
              <dt>Crypto Coaching</dt>
              <p className="mt-4">New to crypto and need help navigating the noise? Available for coaching.</p>
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
            <p className="my-4">
              <Link href="/contact" className="font-bold underline">
                Contact
              </Link>{' '}
              if you want to chat more.
            </p>
            <p>
              Skim DEIT{' '}
              <Link href="/projects" className="font-bold underline">
                projects &amp; skills
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
