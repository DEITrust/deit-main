import Link from 'next/link'

export const CTALower = props => {
  return (
    <div className="flex w-full max-w-5xl flex-col md:flex-row">
      <div className="w-full p-4 md:w-1/2">
        <div className="my-0 max-w-lg bg-slate-200 p-6 text-center text-neutral-900">
          <h2 className="mb-2 text-3xl font-bold">Hack the Planet!</h2>
          <p className="my-0 mb-6">
            Changing the world and need a copilot?
            <br />
            Or simply see a project that piques your interest?{' '}
          </p>
          <p>
            {' '}
            <Link
              href="/contact"
              className="rounded border border-slate-500 bg-transparent py-2 px-4 font-semibold text-slate-700 hover:border-transparent hover:bg-slate-500 hover:text-white"
            >
              Connect
            </Link>
          </p>
        </div>
      </div>
      <div className="w-full p-4 md:w-1/2">
        <div className="my-0 max-w-lg bg-slate-200 p-6 text-center text-neutral-900">
          {props.projects && <Other />}
          {!props.projects && <Building />}
        </div>
      </div>
    </div>
  )
}

const Building = () => {
  return (
    <>
      <h2 className="mb-2 text-3xl font-bold">
        Solving, building, <em>built</em>
      </h2>
      <p className="my-0 mb-6">
        DEIT doesn&apos;t sit still. DEIT solves. DEIT builds.
        <br />
        There&apos;s a new DEIT project being built right now.
      </p>
      <p>
        {' '}
        <Link
          href="/projects"
          className="rounded border border-slate-500 bg-transparent py-2 px-4 font-semibold text-slate-700 hover:border-transparent hover:bg-slate-500 hover:text-white"
        >
          DEIT Projects
        </Link>
      </p>
    </>
  )
}

const Other = () => {
  return (
    <>
      <h2 className="mb-2 text-3xl font-bold">Digital. Trust.</h2>
      <p className="my-0 mb-6">
        In an a low trust world, trust is everything.
        <br />
        Trust DEIT to navigate our trustless future.
      </p>
      <p>
        {' '}
        <Link
          href="/"
          className="rounded border border-slate-500 bg-transparent py-2 px-4 font-semibold text-slate-700 hover:border-transparent hover:bg-slate-500 hover:text-white"
        >
          DEIT
        </Link>
      </p>
    </>
  )
}
export default CTALower
