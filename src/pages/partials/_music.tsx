export const Music = () => {
  return (
    <div className="mt-8 flex flex-row bg-slate-900/40 px-4 pb-4 sm:mb-8">
      <a className="flex flex-row" href="https://www.youtube.com/watch?v=JCvOjBb1yHg" target="_blank" rel="noreferrer">
        <img className="mt-4 h-16" src="./zakzakazakzak.png" />
        <div className="ml-4 mt-4 flex flex-col pt-2">
          <div>
            <em>Zak-Zaka-Zak-Zak</em>
          </div>
          <div className="ml-0 pl-0">
            <strong>Purple Motion</strong>
          </div>
        </div>
      </a>
      <div className="m-auto w-16 pl-4 pt-2 text-center text-xs">&lt; tunes </div>
    </div>
  )
}
