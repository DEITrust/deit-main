import styles from 'styles/Home.module.scss'
import Link from 'next/link'

export const ProjectCTA = () => {
  return (
    <div className="flex w-full flex-col md:flex-row">
      <div className="w-full p-4 md:w-1/2">
        <div className={`w-full rounded-xl bg-neutral-500/10 p-4 text-left ${styles.dl}`}>
          <div className="mb-4 w-full">
            <div className="m-auto">
              <dt>Portfolio, Proficiencies &amp; Perspectives</dt>
              <p className="mt-4">
                &gt;&nbsp;Find a sample of DEIT musings and makings{' '}
                <Link href="/projects" className="font-bold underline">
                  here
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-4 md:w-1/2">
        <div className={`mt-0 w-full rounded-xl bg-neutral-500/10 p-4 text-left md:mt-0 ${styles.dl}`}>
          <div className="mb-4 w-full">
            <div className="m-auto">
              <dt>Contracting, Consultation &amp; Contact</dt>
              <p className="mt-4">
                &gt;&nbsp;Skills, services &amp; contact can be found{' '}
                <Link href="/contracting" className="font-bold underline">
                  here
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCTA
