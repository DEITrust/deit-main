import styles from 'styles/Home.module.scss'

export const Foundation = () => {
  return (
    <div className={`w-full max-w-7xl rounded-xl bg-neutral-500/10 p-6 text-center ${styles.dl}`}>
      <h3 className="mb-2 text-3xl font-bold underline">Foundational Inspirations</h3>
      <div className="flex w-full flex-col space-y-8 sm:flex-row sm:space-x-8">
        <div className="mt-8 flex w-full items-center justify-center rounded-xl bg-slate-200 p-8 text-neutral-900 sm:basis-1/3">
          <div>
            <p className="mb-4 text-sm">
              And if this society embodied in its institutions is threatened by too rapid change, then the answer that
              many serious and concerned people give is to reinforce the rules of the societary game, strengthen the
              institutions, tighten up the criminal, social, and moral laws, and weather the storm. That is the
              conservative attitude. It is not mine. It is not going to work much longer.
            </p>
            <p>
              <strong>&mdash; Stafford Beer</strong> / Designing Freedom
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center rounded-xl bg-slate-200 p-8 text-neutral-900 sm:basis-1/3">
          <div>
            <p className="mb-4 text-sm">
              Humanity has passed through a long history of one-sidedness and of a social condition that has always
              contained the potential of destruction, despite its creative achievements in technology. The great project
              of our time must be to open the other eye: to see all-sidedly and wholly, to heal and transcend the
              cleavage between humanity and nature that came with early wisdom.
            </p>
            <p>
              <strong>&mdash; Murray Bookchin</strong> / Communalism
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center rounded-xl bg-slate-200 p-8 text-neutral-900 sm:basis-1/3">
          <div>
            <p className="mb-4 text-sm sm:mb-8">
              With the computer and stuff, the difference between a rich guy and a poor guy, to me, is nothing. Because
              I don&apos;t like big houses, I don&apos;t drive a car, so you know, I just live in a small apartment and
              I have my computer, which is really cool.
            </p>
            <p>
              <strong>&mdash; Norm MacDonald</strong> / RIP <strong>♥</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
