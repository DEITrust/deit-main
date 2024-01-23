import Link from 'next/link'

export const Contact = () => {
  return (
    <div className="flex max-w-7xl flex-col ">
      <div className=" max-w-lg rounded-xl bg-slate-200 p-6 text-center text-neutral-900">
        <div className="mb-8 flex w-full flex-col items-center justify-end sm:mb-0 sm:max-w-xl sm:flex-row">
          <div className="basis-1/6 text-left">
            <Link href="/" className="font-bold">
              <img src="/deit.webp" alt="Digital Estate Investment Trust" className="h-8" />
            </Link>
          </div>
          <h2 className="mb-2 basis-2/3 text-3xl font-bold">Contact DEIT</h2>
          <div className="basis-1/6 text-right">
            <a href="https://www.linkedin.com/in/brandon-thorn-03662b36/" target="_blank" rel="noreferrer">
              <img
                src="./me.jpeg"
                alt="Brandon Thorn, the guy with too many ideas and not enough time or seed capital...yet"
                className="my-4 w-24 sm:my-0 sm:ml-4 sm:h-12 sm:w-10 sm:py-1"
              />
            </a>
          </div>
        </div>
        <blockquote>
          See anything of interest?
          <br />
          Happy to talk shop and explore new projects and ideas.
        </blockquote>
        <p className="my-4 mb-8">
          Contact by email or on LinkedIn to chat about any consulting, development or Fractional CTO needs.
        </p>
        <p className="mb-4">
          <a
            href="mailto:admin@deit.ca?subject=Inquiry From DEIT Site"
            target="_blank"
            rel="noreferrer"
            className="mr-8 rounded border border-slate-500 bg-transparent py-2 px-4 font-semibold text-slate-700 hover:border-transparent hover:bg-slate-500 hover:text-white"
          >
            admin@deit.ca
          </a>
          <a
            href="https://www.linkedin.com/in/brandon-thorn-03662b36/"
            target="_blank"
            rel="noreferrer"
            className="rounded border border-slate-500 bg-transparent py-2 px-4 font-semibold text-slate-700 hover:border-transparent hover:bg-slate-500 hover:text-white"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  )
}

export default Contact
