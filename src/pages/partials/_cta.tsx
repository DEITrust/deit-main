import Link from 'next/link'

export const CTA = props => {
  return (
    <div className="flex w-full max-w-5xl flex-col md:flex-row">
      <div className="w-full p-4 md:w-1/2">
        <div className="my-0 max-w-lg bg-slate-200 p-6 text-center text-neutral-900">
          <h2 className="mb-2 text-3xl font-bold">Big Tech for small teams</h2>
          <blockquote>
            That&apos;s the DEIT niche. SMEs and early projects who need insights into and integrations with nextgen
            technologies. Let DEIT handle digital strategy &amp; development so you can focus on what you do best.
          </blockquote>
        </div>
      </div>
      <div className="w-full p-4 md:w-1/2">
        <div className="my-0 max-w-lg bg-slate-200 p-6 text-center text-neutral-900">
          <h2 className="mb-2 text-3xl font-bold">Personalized Service</h2>
          <p className="my-2 mb-6">
            Do you have development or Fractional CTO needs?
            <br />
            Need fresh eyes or guidance from a digital expert?{' '}
          </p>
          <p>
            {' '}
            <Link
              href={props.contracting ? '/contact' : '/contracting'}
              className="rounded border border-slate-500 bg-transparent py-2 px-4 font-semibold text-slate-700 hover:border-transparent hover:bg-slate-500 hover:text-white"
            >
              Book Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CTA
