import Link from 'next/link'

export const Brand = () => {
  return (
    <div className="flex w-full max-w-5xl flex-col md:flex-row">
      <div className="w-full p-4 md:w-1/2">
        <div className="my-0 max-w-lg  bg-slate-200 p-6 text-center text-neutral-900">
          <h2 className="mb-2 text-3xl font-bold">
            Digital Estate
            <br /> Investment Trust
          </h2>
          <blockquote>
            Skunkworks Web3/Gamedev R&D factory.
            <br />
            <strong className="underline">Status:</strong> Busy researching, building, and investing in the fourth
            industrial revolution.
          </blockquote>
        </div>
      </div>
      <div className="w-full p-4 md:w-1/2">
        <div className="my-0 max-w-lg  bg-slate-200 p-6 text-center text-neutral-900">
          <h2 className="mb-2 text-3xl font-bold">R&D: The DEIT Specialty</h2>
          <p className="my-2 mb-8">
            Have something you need explored?
            <br />
            Or a project you need developed?{' '}
          </p>
          <p className="mb-1">
            <Link
              href="/contact"
              className="rounded border border-slate-500 bg-transparent py-2 px-4 font-semibold text-slate-700 hover:border-transparent hover:bg-slate-500 hover:text-white"
            >
              Contact DEIT
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Brand
