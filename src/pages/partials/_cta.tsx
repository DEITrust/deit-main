import Link from 'next/link'

export const CTA = () => {
  return (
    <div className="flex max-w-7xl flex-col sm:flex-row sm:space-x-6">
      <div className="my-8 max-w-lg rounded-xl bg-slate-200 p-6 text-center text-neutral-900">
        <h2 className="mb-2 text-3xl font-bold">Big Tech for small teams</h2>
        <blockquote>
          That&apos;s the DEIT niche. Small/medium sized businesses and early projects who need insights and
          integrations with nextgen technologies in an ever evolving world.
        </blockquote>
      </div>
      <div className="my-8 max-w-lg rounded-xl bg-slate-200 p-6 text-center text-neutral-900">
        <p className="my-4 mb-6">
          Do you have development or Fractional CTO needs?
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

export default CTA
