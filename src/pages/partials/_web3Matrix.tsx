import styles from 'styles/Home.module.scss'
import { useState, useEffect } from 'react'
import { useNetwork, useSwitchNetwork, useAccount, useBalance, useDisconnect } from 'wagmi'
import ConnectWallet from 'components/Connect/ConnectWallet'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useConnectModal, useAccountModal, useChainModal } from '@rainbow-me/rainbowkit'

import { Music } from './_music'
import { PooledDEIT } from './_pooledDEIT'
import { PooledETH } from './_pooledETH'
import { DeitSupply } from './_deitSupply'
import { DonationForm } from './_donationForm'
import { TransferForm } from './_transferForm'
import { DEITBroker } from './_deitBroker'
import { AndThen } from './_andThen'
import { SlimeBrawlTeaser } from './_teaser'
import { SignMsg } from './_signMsg'

import { deitABI } from '../api/deit.abi'
import { brokerABI } from '../api/broker.abi'

export const Web3Matrix = () => {
  const DEIT20 = deitABI()
  const BROKER = brokerABI()
  // Hardhat default addresses
  // const BROKER_ADDRESS = '0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e'
  // const TOKEN_ADDRESS = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
  const DONATION_ADDRESS = '0x097EA5454C48e423c4b34ccA1e3946B67CdA3785'
  const BROKER_ADDRESS = '0x77a821C1FaA8779062bA8238Aa54dD384FED7849'
  const TOKEN_ADDRESS = '0x317c621A736ebdE5cc14a70989c7dE9E21D783D4'
  const { address, isConnected, connector } = useAccount()
  const { chain, chains } = useNetwork()
  const { isLoading: isNetworkLoading, pendingChainId, switchNetwork } = useSwitchNetwork()
  const {
    data: balance,
    isLoading: isBalanceLoading,
    refetch: refetchETH,
  } = useBalance({
    address: address,
  })

  const {
    data: tokenBalance,
    isLoading: isTokenBalanceLoading,
    refetch: refetchToken,
  } = useBalance({
    address: address,
    token: TOKEN_ADDRESS,
  })

  const handleRefresh = () => {
    refetchETH()
    refetchToken()
  }

  const handleMetaRefresh = () => {
    setMetaLoads(metaLoads + 1)
  }

  const { openConnectModal } = useConnectModal()
  const { openAccountModal } = useAccountModal()
  const { openChainModal } = useChainModal()
  const { disconnect } = useDisconnect()
  const web3Classess = isConnected ? 'max-w-7xl' : 'max-w-xl rounded-xl'

  const [placeholderImg, setPlaceholderImg] = useState('./1.gif')

  const [donation, setDonation] = useState(false)
  const donationImgClasses = donation ? 'scale-110 hover:scale-95 ' : 'hover:scale-110 '
  const [metaLoads, setMetaLoads] = useState(0)
  useEffect(() => {
    const placeholderImages = ['./1.gif', './2.gif', './3.gif', './4.gif', './5.gif', './6.gif', './7.gif', './8.gif']
    const swapImage = () => {
      setPlaceholderImg(placeholderImages[Math.floor(Math.random() * placeholderImages.length)])
      const imageSwap = setTimeout(swapImage, 5000)
    }

    const imageSwap = setTimeout(swapImage, 5000)
  }, [])

  const handleDonationToggle = () => {
    setDonation(!donation)
  }
  const connectedStyle = {
    background: "url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/bbefa799786133.5efa9bf3d1b49.gif')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <div className={`${web3Classess} w-full bg-neutral-500/10 p-2 pt-6 text-center sm:p-6`}>
      <h3 className="mb-2 text-2xl font-bold sm:text-3xl">
        <span className="underline">Enter Web3</span>{' '}
        <span className="rounded-2xl bg-neutral-50 p-2 align-text-top text-sm font-thin text-neutral-900 no-underline">
          alpha
        </span>
      </h3>
      <div className="w-full">
        <div>
          <h4 className="mb-8 text-center text-lg font-medium">
            Connect wallet to see current <strong>DEIT</strong> Web3 R&D projects.
          </h4>
          <div className="flex w-full flex-col items-center justify-center sm:flex-row">
            {openConnectModal && (
              <button
                onClick={openConnectModal}
                type="button"
                className="m-1 rounded-3xl bg-cyan-400 py-2 px-4 font-bold text-white transition-all duration-150 hover:scale-110 hover:bg-cyan-300"
              >
                <span className="underline">Connect Wallet</span>
                <br />
                Enter The Matrix
              </button>
            )}

            {openAccountModal && (
              <button
                onClick={openAccountModal}
                type="button"
                className="m-1 bg-slate-600 p-4  text-white transition-all duration-150 hover:scale-105 hover:bg-green-400"
              >
                Account
              </button>
            )}

            {openChainModal && (
              <button
                onClick={openChainModal}
                type="button"
                className="m-1 bg-slate-600 p-4 text-white transition-all duration-150 hover:scale-105 hover:bg-green-400"
              >
                Select Chain
              </button>
            )}

            {disconnect && !openConnectModal && (
              <button
                onClick={() => {
                  disconnect()
                }}
                type="button"
                className="m-1  bg-red-500  p-4 text-white transition-all duration-150 hover:scale-105 hover:bg-red-400"
              >
                Exit Web3
              </button>
            )}
          </div>
        </div>
      </div>
      {isConnected && (
        <div className="mt-8 flex w-full flex-col sm:flex-row">
          <div className={`flex basis-1/3 flex-col p-2 sm:p-8 sm:pt-0 ${styles.dl}`}>
            <div className="mt-0 mb-4 bg-slate-200 p-8 text-neutral-900 sm:mb-8">
              <dl>
                <h4 className="pt-2 text-lg font-bold text-neutral-900 underline">Connector</h4>
                <dd className="my-2">
                  {connector?.name}
                  {!address && (
                    <ConnectButton.Custom>
                      {({ openConnectModal }) => (
                        <span onClick={openConnectModal} className="cursor-pointer hover:underline">
                          Not connected, connect wallet
                        </span>
                      )}
                    </ConnectButton.Custom>
                  )}
                </dd>
                <h4 className="pt-2 text-lg font-bold text-neutral-900 underline">Connected Network</h4>
                <dd className="my-2">{chain ? `${chain?.id}: ${chain?.name}` : 'n/a'}</dd>
                <h4 className="pt-2 text-lg font-bold text-neutral-900 underline">Switch Network</h4>
                <dd className="mt-2 flex flex-wrap justify-center">
                  {isConnected &&
                    chains.map(x => (
                      <button
                        disabled={!switchNetwork || x.id === chain?.id}
                        key={x.id}
                        onClick={() => switchNetwork?.(x.id)}
                        className={
                          (x.id === chain?.id
                            ? 'cursor-not-allowed  bg-green-500 hover:scale-90'
                            : 'bg-slate-600 hover:scale-105 hover:bg-green-400') +
                          ' m-1 w-full p-4 text-white transition-all duration-150'
                        }
                      >
                        {x.name}
                        {isNetworkLoading && pendingChainId === x.id && ' (switching)'}
                      </button>
                    ))}
                  <ConnectWallet show="disconnected" />
                </dd>
              </dl>
            </div>
            <div className=" mb-4 w-full bg-slate-200  p-4 text-neutral-900 sm:mb-8 sm:p-8">
              <dl className={styles.dl}>
                <h4 className="pt-2 text-lg font-bold text-neutral-900 underline">Account</h4>
                <dd className="break-all">{address ? `${address}` : 'n/a'}</dd>
                <h4 className="pt-2 text-lg font-bold text-neutral-900 underline">
                  {chain?.id == 1 ? 'ETH' : 'MATIC'} Balance
                </h4>
                <dd className="break-all">
                  {isBalanceLoading ? 'loading' : balance ? `${balance?.formatted} ${balance?.symbol}` : 'n/a'}
                </dd>
                {(chain?.id == 80001 || chain?.id == 31337) && (
                  <>
                    <h4 className="pt-2 text-lg font-bold text-neutral-900 underline">DEIT Balance</h4>
                    <dd className="break-all text-sm">
                      {isTokenBalanceLoading
                        ? 'loading'
                        : tokenBalance
                        ? `${tokenBalance?.formatted} ${tokenBalance?.symbol}`
                        : 'n/a'}
                    </dd>
                    {/* <h4 className="pt-2 text-lg font-bold text-neutral-900 underline">Sign Message</h4>
                <dd className="mt-4 break-all text-neutral-400">{address ? <SignMsg /> : 'n/a'} </dd> */}
                    <button
                      onClick={handleRefresh}
                      className=" mt-2 w-full bg-slate-600 p-4 text-neutral-200 transition-all duration-150 hover:scale-105 hover:bg-green-400"
                    >
                      Refresh
                    </button>
                  </>
                )}

                {chain?.id != 80001 && chain?.id != 31337 && (
                  <div className="mt-8 bg-neutral-700 p-4 font-bold text-neutral-50">Polygon Mumbai Only</div>
                )}
              </dl>
            </div>
            <div className=" mb-4 bg-slate-900/40 px-4  pb-4 sm:mb-8">
              <dt>DEIT Token</dt>
              <p className="mb-2">
                A simple ERC20 token developed with ERC2535. Initially entirely useless and made for a blog post for{' '}
                <a href="#" target="_blank" rel="noreferrer" className="underline">
                  Diamond Driven Development
                </a>
                , but may be extended as additional contracts/services are released.
              </p>
              <p>
                Read more{' '}
                <a href="#" target="_blank" rel="noreferrer" className="underline">
                  here
                </a>
                .
              </p>
              <div className="mt-4 flex flex-col text-left">
                <div>
                  <span className="rounded-2xl bg-neutral-50 p-2 align-text-top text-xs font-thin text-neutral-900 no-underline sm:text-sm">
                    alpha
                  </span>
                  &nbsp;&gt; <span className="sm:text-normal text-xs">Polygon Mumbai Launch</span>
                </div>
                <div className="mt-8">
                  <span className="rounded-2xl bg-neutral-50 p-2 align-text-top text-xs font-thin text-neutral-900 no-underline sm:text-sm">
                    beta
                  </span>
                  &nbsp;&gt; <span className="sm:text-normal text-xs">Polygon Mainnet Launch</span>
                </div>
              </div>
            </div>
            {/* <SlimeBrawlTeaser /> */}
          </div>
          <div className="basis-2/3">
            <div className={` mb-4 flex flex-col bg-slate-200 p-4 text-neutral-900 sm:mb-8 sm:flex-row ${styles.dl}`}>
              <div className="basis-1/2 p-6">
                <DEITBroker
                  BROKER={BROKER}
                  BROKER_ADDRESS={BROKER_ADDRESS}
                  TOKEN_ADDRESS={TOKEN_ADDRESS}
                  ethBalance={balance}
                  chain={chain}
                />
              </div>
              <hr className="mx-8 sm:mx-0 sm:hidden" />
              <div className="basis-1/2 p-6">
                <TransferForm chain={chain} DEIT20={DEIT20} TOKEN_ADDRESS={TOKEN_ADDRESS} tokenBalance={tokenBalance} />
              </div>
            </div>
            <div className=" mb-4 flex flex-col sm:flex-row">
              <div className="mt-2 basis-1/2 bg-slate-200 p-4 text-neutral-900 sm:mt-0 sm:mr-8 sm:p-8">
                {(chain?.id == 80001 || chain?.id == 31337) && (
                  <div className={`break-all ${styles.dl}`}>
                    <h4 className="pt-2 text-lg font-bold text-neutral-900 underline">Official MATIC Contracts</h4>
                    <ul className="">
                      <li>
                        <strong>DEIT Token Mumbai Contract:</strong>{' '}
                        <a className="text-sm underline" href={`https://goerli.etherscan.io/address/${TOKEN_ADDRESS}`}>
                          {TOKEN_ADDRESS}
                        </a>
                      </li>
                      <li>
                        <strong>DEIT Broker Mumbai Contract:</strong>{' '}
                        <a className="text-sm underline" href={`https://goerli.etherscan.io/address/${BROKER_ADDRESS}`}>
                          {BROKER_ADDRESS}
                        </a>
                      </li>
                    </ul>
                    <h4 className="pt-1 text-lg font-bold text-neutral-900 underline">Meta Stats</h4>
                    <div className="flex flex-col">
                      <div>
                        <ul>
                          <li>
                            <strong>Max:</strong>&nbsp;
                            <span className="text-xs">100 billion</span>
                          </li>
                          <li>
                            <strong>Total:</strong>&nbsp;
                            <DeitSupply meta={metaLoads} DEIT20={DEIT20} TOKEN_ADDRESS={TOKEN_ADDRESS} />
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <strong>Pooled MATIC:</strong>&nbsp;
                            <PooledETH meta={metaLoads} BROKER_ADDRESS={BROKER_ADDRESS} />
                          </li>
                          <li>
                            <strong>Pooled DEIT:</strong>{' '}
                            <PooledDEIT
                              meta={metaLoads}
                              BROKER_ADDRESS={BROKER_ADDRESS}
                              TOKEN_ADDRESS={TOKEN_ADDRESS}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <button
                      onClick={handleMetaRefresh}
                      className=" mt-2 w-full bg-slate-600 p-4 text-neutral-200 transition-all duration-150 hover:scale-105 hover:bg-green-400"
                    >
                      Refresh
                    </button>
                  </div>
                )}

                {chain?.id != 80001 && chain?.id != 31337 && (
                  <div className="mt-32 bg-neutral-700 p-4 font-bold text-neutral-50">Polygon Mumbai Only</div>
                )}
              </div>
              <div className="basis-1/2 bg-slate-200  p-4 text-neutral-900 sm:p-4">
                <div className="m-auto text-left">
                  <img
                    src={placeholderImg}
                    onClick={handleDonationToggle}
                    className={`${donationImgClasses} w-full cursor-pointer transition-all`}
                    alt="rabbit_hole"
                  />
                </div>
              </div>
            </div>

            <div className={`${styles.dl} mt-4 flex flex-col sm:mt-8 sm:flex-row sm:space-x-8`}>
              <div className="mb-4 basis-1/2 bg-slate-900/40  px-4 pb-4  sm:mb-8">
                <dt>DEIT Pool (coming soon)</dt>
                <p>A simple multi-token pool prototype developed with ERC2535 and ERC1155.</p>
                <p className="mt-4">
                  <span className="rounded-2xl bg-neutral-50 p-2 align-text-top text-sm font-thin text-neutral-900 no-underline">
                    beta.v2
                  </span>
                </p>
                <dt className="mt-4">DEIT Vault (coming soon)</dt>
                <p>
                  Extending DEIT Pool, DEIT Vault enables condition based locking mechanisms leveraging ERC721 keys. It
                  will start simply with a block count lock condition and a claim based rewards model, and build toward
                  the end goal of rolling an efficient distribution/airdropping mechanism to distribute rewards as
                  they&apos;re accrued.
                </p>
                <p className="mt-4">
                  <span className="rounded-2xl bg-neutral-50 p-2 align-text-top text-sm font-thin text-neutral-900 no-underline">
                    beta.v3
                  </span>
                </p>
              </div>
              <div className=" basis-1/2">
                {donation && <DonationForm DONATION_ADDRESS={DONATION_ADDRESS} chain={chain} />}
                {!donation && <AndThen />}
                {/* <Music /> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
