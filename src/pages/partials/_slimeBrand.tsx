import Link from 'next/link'

export const SlimeBrand = () => {
  return (
    <div className="flex max-w-7xl flex-col sm:flex-row sm:space-x-6">
      <div className="my-8 max-w-lg rounded-xl bg-slate-200 p-6 text-center text-neutral-900">
        <h2 className="mb-2 text-3xl font-bold">DEIT Games</h2>
        <blockquote>
          Skunkworks Web3/Gamedev R&D factory.
          <br />
          More <strong>Slime Brawly Brawl</strong> updates in dev.
          <br />
          More <strong>DEIT Games</strong> releases to come.
        </blockquote>
        <p className="mt-8">
          {' '}
          <a
            href="https://discord.gg/f3kDDdstt8"
            target="_blank"
            rel="noreferrer"
            className="rounded border border-slate-500 bg-transparent py-2 px-4 font-semibold text-slate-700 hover:border-transparent hover:bg-slate-500 hover:text-white"
          >
            Join Discord
          </a>
        </p>
      </div>
      <div className="my-8 max-w-lg rounded-xl bg-slate-200 p-6 text-center text-neutral-900">
        <h2 className="mb-2 text-3xl font-bold">Feedback welcome!</h2>
        <p className="mt-2 mb-8">
          Do you have feedback on <strong>Slime Brawly Brawl?</strong>
          <br />
          Or any development or Fractional CTO needs?
          <br />
          Or simply see a project that piques your interest?{' '}
        </p>
        <p>
          {' '}
          <Link
            href="/contact"
            className="rounded border border-slate-500 bg-transparent py-2 px-4 font-semibold text-slate-700 hover:border-transparent hover:bg-slate-500 hover:text-white"
          >
            Contact DEIT
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SlimeBrand
