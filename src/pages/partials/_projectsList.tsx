import styles from 'styles/Home.module.scss'
import Link from 'next/link'

export const ProjectsList = () => {
  return (
    <div className={`mx-24 rounded-xl bg-neutral-500/10 p-6 text-center ${styles.dl}`}>
      <h3 className="mb-8 text-3xl font-bold">
        Projects/
        <br className="sm:hidden" />
        Prototypes
      </h3>
      <div className="text-left">
        <div className="mr-2 mb-8 w-full">
          <div className="m-auto">
            <dt>&mdash; Slime Brawly Brawl, c/o DEIT Games</dt>
            <div className="pl-8">
              <p className="mt-4">
                Miss the 90s? Miss beating up your friends (in video games) as you sat side by side? Miss a certain
                volleyball flash game comprised of &quot;Slimes&quot;? Then you&apos;re in luck, because{' '}
                <Link href="/slime" className="font-bold underline">
                  Slime Brawly Brawl
                </Link>{' '}
                is finally available, only on{' '}
                <a
                  href="https://store.steampowered.com/app/2721250/Slime_Brawly_Brawl/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold underline"
                >
                  Steam
                </a>
                . Simple, fast melee battle action at your fingertips.
              </p>
            </div>
            <p className="mt-4">
              <strong>Tech:</strong> C#, Unity3D, Blender, Steamworks
            </p>
          </div>
        </div>
        <hr />
        <div className="mr-2 mb-8 w-full">
          <div className="m-auto">
            <dt>&mdash; Commonwealth</dt>
            <div className="pl-8">
              <p className="my-4">
                An{' '}
                <a
                  className="font-bold underline"
                  href="https://wethecommonwealth.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  early project
                </a>{' '}
                aiming to create the foundation for a new era of bottom-up social-capitalism. Democratizing money rooted
                in dignity for people, aspiring to underwrite and build{' '}
                <a
                  className="font-bold underline"
                  href="https://github.com/DEITrust/SI2"
                  target="_blank"
                  rel="noreferrer"
                >
                  SI2 (Social Insurance 2.0)
                </a>
                .
              </p>
              <p>
                The project consists of 3 interrelated parts: a 4 asset class{' '}
                <a
                  className="font-bold underline"
                  href="https://proggr.hashnode.dev/commonwealth-the-capital-model"
                  target="_blank"
                  rel="noreferrer"
                >
                  Capital Model
                </a>{' '}
                underwriting a DAO managed Fiat currency & Reserve; A W3C DID compliant Identity token to be used by
                expanding network services; A federated{' '}
                <a
                  className="font-bold underline"
                  href="https://proggr.hashnode.dev/proof-of-reciprocity-social-capital-derived-governance"
                  target="_blank"
                  rel="noreferrer"
                >
                  DAO-of-DAOs model
                </a>{' '}
                of governance, rooted in identity and DAO defined meritocracy rather than access to capital. Together,
                they enable a foundation for bottom-up social-capitalism to thrive.
              </p>
            </div>
            <p className="mt-4">
              <strong>Tech & Concepts:</strong> Solidity/EVM, Go/Gnoland, ERC20, ERC721, ERC2535, SSI/DID/Identity,
              DAOs, Social-capitalism, Macroeconomics, Central Banking, Derivatives, Insurance
            </p>
          </div>
        </div>
        <hr />
        <div className="ml-2  mb-8 w-full">
          <div className="m-auto">
            <dt>&mdash; shinyblocks.js</dt>
            <div className="pl-8">
              <p className="my-4">
                Developed primarily for Diamond driven development, shinyblocks.js simplifies contract development in
                Hardhat even when it&apos;s not an ERC2535 contract. I think it&apos;s... shiny :)
              </p>
              <p>
                Repo available at{' '}
                <a
                  className="font-bold underline"
                  href="https://github.com/DEITrust/shinyblocks"
                  target="_blank"
                  rel="noreferrer"
                >
                  DEITrust/shinyblocks
                </a>{' '}
                and as part of{' '}
                <a
                  className="font-bold underline"
                  href="https://github.com/DEITrust/deit-contracts"
                  target="_blank"
                  rel="noreferrer"
                >
                  DEITrust/deit-contracts
                </a>
                .<br />
                Set to be integrated into a refactor of{' '}
                <a
                  className="font-bold underline"
                  href="https://github.com/proggR/diamond-hardhat"
                  target="_blank"
                  rel="noreferrer"
                >
                  proggR/diamond-hardhat
                </a>
              </p>
            </div>
            <p className="mt-4">
              <strong>Tech:</strong> ERC2535, Typescript, Hardhat, Ethers.js
            </p>
          </div>
        </div>

        <hr />

        <div className="mr-2 mb-8 w-full">
          <div className="m-auto">
            <dt>&mdash; updraft-astro-tailwind</dt>
            <div className="pl-8">
              <p className="my-4">
                WIP dive into AstroJS, building out a collection of re-usable base components to make webapp/dApp dev
                easier. Includes core simple base components + a growing list of more complex &quot;Prefab&quot;
                components.
              </p>
              <p>
                Repo available at{' '}
                <a
                  className="font-bold underline"
                  href="https://github.com/proggR/updraft-astro-tailwind"
                  target="_blank"
                  rel="noreferrer"
                >
                  proggR/updraft-astro-tailwind
                </a>
                . Once web2 components more polished, web3 components will be added.
              </p>
            </div>
            <p className="mt-4">
              <strong>Tech:</strong> AstroJS, TailwindCSS
            </p>
          </div>
        </div>
        <hr />
        <div className="ml-2  mb-8 w-full">
          <div className="m-auto">
            <dt>&mdash; dfm/diamond.json + dfm-min</dt>
            <div className="pl-8">
              <p className="my-4">
                Started simply as the Starter Repo outlined below, dfm and the WIP diamond.json format it&apos;s built
                on aims to be to Diamond driven Solidity development what NPM/package.json is to Node dev.
              </p>
              <p>
                Repo available at{' '}
                <a
                  className="font-bold underline"
                  href="https://github.com/proggR/dfm"
                  target="_blank"
                  rel="noreferrer"
                >
                  proggR/dfm
                </a>
                . Sibling project{' '}
                <a
                  className="font-bold underline"
                  href="https://github.com/proggR/dfm-min"
                  target="_blank"
                  rel="noreferrer"
                >
                  proggR/dfm-min
                </a>{' '}
                allows for 1 line provisioning of a Hardhat dev environment from diamond.json.
              </p>
            </div>
            <p className="mt-4">
              <strong>Tech:</strong> ERC2535, Javascript, Hardhat
            </p>
          </div>
        </div>
        <hr />

        <div className=" mb-8 w-full">
          <div className="m-auto">
            <dt>&mdash; diamond-hardhat</dt>
            <div className="pl-8">
              <p className="my-4">
                Forked from the mudgen Diamond-3 implementation to expand on the Hardhat integrations. Includes Mock
                implementations of ERC20, ERC721 and ERC1155 leveraging DiamondStorage, tasks covering the external
                functions for each Facet, and a WIP per-Facet test structure to simplify Diamond
                building/testing/deployment.
              </p>
              <p>
                Repo available at{' '}
                <a
                  className="font-bold underline"
                  href="https://github.com/proggR/diamond-hardhat"
                  target="_blank"
                  rel="noreferrer"
                >
                  proggR/diamond-hardhat
                </a>
                . To be audited & remade with shinyblocks soon.
              </p>
            </div>
            <p className="mt-4">
              <strong>Tech:</strong> ERC2535, Solidity, EVM, Javascript, Hardhat, Ethers.js
            </p>
          </div>
        </div>
        <hr />
        <div className=" mb-8 ml-2 w-full">
          <div className="m-auto">
            <dt>&mdash; Diamond Driven Development</dt>
            <div className="pl-8">
              <p className="my-4">
                Started alongside dfm, the Diamond Driven Development blog aims to capture information related to
                ERC2535 development, including best practices and iterative workflows.
              </p>
              <p>
                Currently only the{' '}
                <a className="font-bold underline" href="https://proggr.hashnode.dev/" target="_blank" rel="noreferrer">
                  introduction article
                </a>{' '}
                and an article covering the development of this version of the site are live, with more planned
                alongside work refactoring/improving diamond-hardhat and more Web3 components for here.
              </p>
            </div>
            <p className="mt-4">
              <strong>Tech & Purpose:</strong> ERC2535, Solidity, EVM, Hardhat, Slither, Dev Blog
            </p>
          </div>
        </div>

        <hr />
        <div className=" mb-8 mr-2 w-full">
          <div className="m-auto">
            <dt>&mdash; CMesh</dt>
            <div className="pl-8">
              <p className="my-4">
                Leveraging the most interesting available decentralized options into a modular network, CMesh was really
                just an excuse to play with Golang ♥. Prototype for a SSI/DID protected modular intranet featuring iam,
                router, registrar, event stream, blockchain, binary state, and assemblyscript hooks. Very much in a toy
                state, but would like to revisit.
              </p>
              <p>
                Repo available at{' '}
                <a
                  className="font-bold underline"
                  href="https://github.com/proggR/cmesh"
                  target="_blank"
                  rel="noreferrer"
                >
                  proggR/cmesh
                </a>
                .
              </p>
            </div>
            <p className="mt-4">
              <strong>Tech & Concepts:</strong> Go, Modular Design, IRMA, Identity, IAM Based Service Request Routing,
              Blockchain, Distributed Event Streams
            </p>
          </div>
        </div>
        <hr />
        <div className=" mb-8 ml-2 w-full">
          <div className="m-auto">
            <dt>&mdash; Fractional.Foundation</dt>
            <div className="pl-8">
              <p className="my-4">
                Thought experiment/set of smart contracts begging the question: could a DAO underwrite a new fiat
                currency with nothing more than a handful of ERC20 tokens and some fine tuneable fractions?
              </p>
              <p>
                More information available at{' '}
                <a
                  className="font-bold underline"
                  href="https://fractional.foundation"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fractional.Foundation
                </a>
                . The idea went onto become the <em>Capital Model</em> piece of the above mentioned Commonwealth
                project.
              </p>
            </div>
            <p className="mt-4">
              <strong>Tech & Concepts:</strong> Solidity, EVM, ERC20, Macroeconomics, Derivatives
            </p>
          </div>
        </div>
        <hr />

        <div className=" mb-8 mr-2 w-full">
          <div className="m-auto">
            <dt>&mdash; Bottlecap/Deluge</dt>
            <div className="pl-8">
              <p className="my-4">
                Inspired by BitTorrent&apos;s Peer Wire Protocol and JAK Bank&apos;s Savings Points, Deluge aims to
                define a reusable standard for routing capital from point A to point B, complete with DAuth, a model for
                bubbling tx event data to delegated authorities to automate business processes.
              </p>
              <p>
                A{' '}
                <a
                  className="font-bold underline"
                  href="https://github.com/proggR/bottlecap"
                  target="_blank"
                  rel="noreferrer"
                >
                  very rough/early prototype
                </a>{' '}
                was hacked together over a quick 2 day session, and in current form is mostly a buggy DEX crammed into
                an ERC20 token. Intend to revisit incentives, define the protocol, and revisit with ERC2535 to include
                the full featureset.
              </p>
            </div>
            <p className="mt-4">
              <strong>Tech & Concepts:</strong> Solidity, EVM, Token Exchange, p2p Capital Flows, Protocols
            </p>
          </div>
        </div>
        <hr />
        <div className=" mb-8 ml-2 w-full">
          <div className="m-auto">
            <dt>&mdash; Accounts/Contacts/Bullpen</dt>
            <div className="pl-8">
              <p className="my-4">
                <strong>DEIT Accounts</strong> is a simple accounting service tailored for crypto transactions that
                calculates your tax liabilities based on your tracked activity, providing you a real time report so
                you&apos;re not caught in the dark.
              </p>
              <p className="mb-4">
                <strong>DEIT Contacts</strong> is a simple, if not still too simple, contact/subscription/newsletter
                campaign manager. It offers few bells & whistles (for now), aiming to service a niche budget minded
                client who has simple needs: managing lists and sending emails.
              </p>
              <p>
                Together they&apos;re part of a larger suite tailored to small/early crypto funds that was called{' '}
                <strong>DEIT Bullpen</strong>.
              </p>
            </div>
            <p className="mt-4">
              <strong>Tech:</strong> ReactJS, Python, Flask, AWS SES
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="mb-6 mt-6 w-full">
        <div className=" mb-8 mr-2">
          <div className="m-auto">
            <dt>More...</dt>
            <p className="mb-4">So, so many more.</p>
            <p>
              Have your own project you need built?{' '}
              <Link href="/contracting" className="font-bold underline">
                I like to build
              </Link>
              . Couldn&apos;t stop if I tried.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsList
