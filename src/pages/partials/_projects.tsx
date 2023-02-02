import styles from 'styles/Home.module.scss'

export const Projects = () => {
  return (
    <div className={`w-full basis-2/3 rounded-xl bg-neutral-500/10 p-6 text-center ${styles.dl}`}>
      <h3 className="mb-8 text-3xl font-bold underline">
        Projects/
        <br className="sm:hidden" />
        Prototypes
      </h3>
      <div className="mb-6  mt-6 flex w-full flex-col sm:flex-row">
        <div className="mr-2 mb-8 basis-1/2">
          <div className="m-auto max-w-sm">
            <dt>DEIT Games (Coming Soon)</dt>
            <p className="mb-4">
              With multiple MVP prototypes in the back catalog, and one Early Access game nearing launch,{' '}
              <strong>DEIT</strong> will be exploring more game dev as <strong>DEIT Games</strong>, delving more into
              bridging DLT and games with future releases.
            </p>
            <p>In the meantime, if you like Super Smash Bros and/or Slime Volleyball, stay tuned ;)</p>
          </div>
        </div>
        <hr className="mb-6 sm:mb-0 sm:hidden" />
        <div className="ml-2  mb-8 basis-1/2">
          <div className="m-auto max-w-sm">
            <dt>shinyblocks.js</dt>
            <p className="mb-4">
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
        </div>
      </div>
      <hr />
      <div className="mb-6  mt-6 flex w-full flex-col sm:flex-row">
        <div className="mr-2 mb-8 basis-1/2">
          <div className="m-auto max-w-sm">
            <dt>updraft-astro-tailwind</dt>
            <p className="mb-4">
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
        </div>
        <hr className="mb-6 sm:mb-0 sm:hidden" />
        <div className="ml-2  mb-8 basis-1/2">
          <div className="m-auto max-w-sm">
            <dt>dfm/diamond.json + dfm-min</dt>
            <p className="mb-4">
              Started simply as the Starter Repo outlined below, dfm and the WIP diamond.json format it&apos;s built on
              aims to be to Diamond driven Solidity development what NPM/package.json is to Node dev.
            </p>
            <p>
              Repo available at{' '}
              <a className="font-bold underline" href="https://github.com/proggR/dfm" target="_blank" rel="noreferrer">
                proggR/dfm
              </a>
              . Sibling project proggR/dfm-min allows for 1 line provisioning of your dev environment from diamond.json.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="mb-6  mt-6 flex w-full flex-col sm:flex-row">
        <div className=" mb-8 basis-1/2">
          <div className="m-auto max-w-sm">
            <dt>diamond-hardhat</dt>
            <p className="mr-2 mb-4">
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
        </div>
        <hr className="mb-6 sm:mb-0 sm:hidden " />
        <div className=" mb-8 ml-2 basis-1/2">
          <div className="m-auto max-w-sm">
            <dt>Diamond Driven Development</dt>
            <p className="mb-4">
              Started alongside dfm, the Diamond Driven Development blog aims to capture information related to ERC2535
              development, including best practices and iterative workflows.
            </p>
            <p>
              Currently only the{' '}
              <a className="font-bold underline" href="https://proggr.hashnode.dev/" target="_blank" rel="noreferrer">
                introduction article
              </a>{' '}
              and an article covering the development of this version of the site are live, with more planned alongside
              work refactoring/improving diamond-hardhat and more Web3 components for here.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="mb-6  mt-6 flex w-full flex-col sm:flex-row">
        <div className=" mb-8 mr-2 basis-1/2">
          <div className="m-auto max-w-sm">
            <dt>CMesh</dt>
            <p className="mb-4">
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
        </div>
        <hr className="mb-6 sm:mb-0 sm:hidden " />
        <div className=" mb-8 ml-2 basis-1/2">
          <div className="m-auto max-w-sm">
            <dt>Fractional.Foundation</dt>
            <p className="mb-4">
              Thought experiment/set of smart contracts begging the question: could a DAO underwrite a new fiat currency
              with nothing more than a handful of ERC20 tokens and some fine tuneable fractions?
            </p>
            <p>
              More information available at{' '}
              <a className="font-bold underline" href="https://fractional.foundation" target="_blank" rel="noreferrer">
                Fractional.Foundation
              </a>
              . Would love feedback on this idea. Tell me why it&apos;s doomed to fail because it started to hurt my
              brain.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="mb-6 mt-6 flex w-full flex-col sm:flex-row">
        <div className=" mb-8 mr-2 basis-1/2">
          <div className="m-auto max-w-sm">
            <dt>Bottlecap/Deluge</dt>
            <p className="mb-4">
              Inspired by BitTorrent&apos;s Peer Wire Protocol and JAK Bank&apos;s Savings Points, Deluge aims to define
              a reusable standard for routing capital from point A to point B, complete with DAuth, a model for bubbling
              tx event data to delegated authorities to automate business processes.
            </p>
            <p>
              Currently in a fairly{' '}
              <a
                className="font-bold underline"
                href="https://github.com/proggR/bottlecap"
                target="_blank"
                rel="noreferrer"
              >
                janky state
              </a>{' '}
              after cramming a DEX into an ERC20 token, once incentives/tokenomics have been reconsidered it will be
              rebuilt with ERC2535 to incorporate the full featureset.
            </p>
          </div>
        </div>
        <hr className="mb-6 sm:mb-0 sm:hidden " />
        <div className=" mb-8 ml-2 basis-1/2">
          <div className="m-auto max-w-sm">
            <dt>Accounts/Contacts</dt>
            <p className="mb-4">
              <strong>DEIT Accounts</strong> is a simple accounting service tailored for crypto transactions that
              calculates your tax liabilities based on your tracked activity, providing you a real time report so
              you&apos;re not caught in the dark.
            </p>
            <p>
              <strong>DEIT Contacts</strong> is a simple, if not still too simple, contact/subscription/newsletter
              campaign manager. It offers few bells & whistles (for now), aiming to service a niche budget minded client
              who has simple needs: managing lists and sending emails.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="mb-6 mt-6 w-full">
        <div className=" mb-8 mr-2">
          <div className="m-auto max-w-sm">
            <dt>More...</dt>
            <p className="mb-4">So, so many more.</p>
            <p>
              Have your own Web3 project you need built?{' '}
              <a className="font-bold underline" href="mailto:proggR@pm.me" target="_blank" rel="noreferrer">
                I like to build
              </a>
              . Couldn't stop if I tried.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
