import Link from 'next/link'

export const Brand = () => {
  return (
    <div className="flex max-w-7xl flex-col sm:flex-row sm:space-x-6">
      <div className="my-8 max-w-lg rounded-xl bg-slate-200 p-6 text-center text-neutral-900">
        <h2 className="mb-2 text-3xl font-bold">
          Digital Estate
          <br /> Investment Trust
        </h2>
        <blockquote>
          Skunkworks Web3/Gamedev R&D factory busy researching, building, and investing in the fourth industrial
          revolution.
        </blockquote>
      </div>
      <div className="my-8 max-w-lg rounded-xl bg-slate-200 p-6 text-center text-neutral-900">
        <p className="my-6 mb-8">
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

export default Brand
