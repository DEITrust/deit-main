import styles from 'styles/Home.module.scss'

export const StacksSkills = () => {
  return (
    <>
      <div className={`mt-6 basis-1/4 rounded-xl bg-neutral-500/10 p-6 text-center sm:mt-0 ${styles.dl}`}>
        <h3 className="mb-4 text-3xl font-bold">
          Languages/
          <br className="sm:hidden" />
          Stacks
        </h3>

        <dt>Web2/Systems</dt>
        <ul className="mt-4 flex flex-wrap items-center space-x-4">
          <li className="ml-4">&mdash; ReactJS/NextJS/AstroJS</li>
          <li>&mdash; GraphQL</li>
          <li>&mdash; Python/Flask</li>
          <li>&mdash; Golang/Gin</li>
          <li>&mdash; NodeJS/Express</li>
          <li>&mdash; C#/Java</li>
          <li>&mdash; Ruby on Rails</li>
          <li>&mdash; PHP/Laravel</li>
          <li>&mdash; Directus</li>
          <li>&mdash; Postgres/MySQL/Redis</li>
          <li>&mdash; Chai/Mocha</li>
          <li>&mdash; Tailwind</li>
          <li>&mdash; Terraform/AWS/Heroku</li>
          <li>&mdash; Docker/Kubernates</li>
        </ul>
        <hr className="my-6" />
        <dt>Web3</dt>
        <ul className="mt-4 flex flex-wrap items-center space-x-4">
          <li className="ml-4">&mdash; Solidity</li>
          <li>&mdash; ERC2535</li>
          <li>&mdash; Hardhat </li>
          <li>&mdash; Ethers.js </li>
          <li>&mdash; Web3.js </li>
          <li>&mdash; Wagmi </li>
          <li>&mdash; Chainlink </li>
          <li>&mdash; Subgraphs </li>
          <li>&mdash; IPFS </li>
          <li>&mdash; Alchemy </li>
          <li>&mdash; Infura </li>
          <li>&mdash; Slither </li>
        </ul>
        <hr className="my-6" />
        <dt>Game Dev/Publishing</dt>
        <ul className="mt-4 flex flex-wrap items-center space-x-4">
          <li className="ml-4">&mdash; C#</li>
          <li>&mdash; Unity3D</li>
          <li>&mdash; Blender </li>
          <li>&mdash; Steamworks </li>
          <li>&mdash; p2p Networking </li>
          <li>&mdash; p2p Voice Chat </li>
        </ul>
      </div>
      <div className={`mt-6 basis-1/4 rounded-xl bg-neutral-500/10 p-6 text-center sm:mt-0 ${styles.dl}`}>
        <h3 className=" mb-4 text-3xl font-bold">
          Insights/
          <br className="sm:hidden" />
          Experience
        </h3>
        <dt>Industry Experience</dt>
        <ul className="mt-4 mb-4 flex flex-wrap items-center space-x-4">
          <li className="ml-4">&mdash; Healthcare</li>
          <li>&mdash; Government</li>
          <li>&mdash; Academia</li>
          <li>&mdash; Music/Media</li>
          <li>&mdash; Startups</li>
        </ul>
        <hr className="my-6" />
        <dt>Research Interests</dt>
        <ul className="mt-4 mb-4 flex flex-wrap items-center space-x-4">
          <li className="ml-4">&mdash;Distributed Tech</li>
          <li>&mdash; Insurance</li>
          <li>&mdash; DAOs</li>
          <li>&mdash; Dev Tooling</li>
          <li>&mdash; Oracles</li>
          <li>&mdash; Healthcare</li>
          <li>&mdash; Game/Virtual World Dev</li>
          <li>&mdash; Education</li>
          <li>&mdash; Open Accreditation</li>
          <li>&mdash; SSI/DID</li>
          <li>&mdash; Theoretical Economics</li>
          <li>&mdash; ARGs</li>
          <li>&mdash; Social-capitalism</li>
        </ul>
        <hr className="my-6" />
        <dt>Fractional CTO/Consulting Services</dt>
        <ul className="mt-4 flex flex-wrap items-center space-x-4">
          <li className="ml-4">&mdash; Architecture</li>
          <li>&mdash; Roadmapping</li>
          <li>&mdash; Development</li>
          <li>&mdash; Project Management</li>
          <li>&mdash; Migration Management</li>
          <li>&mdash; Third Party Integrations</li>
          <li>&mdash; Legacy System Replacements</li>
          <li>&mdash; Social Media/SEO Optimization</li>
        </ul>
      </div>
    </>
  )
}

export default StacksSkills
