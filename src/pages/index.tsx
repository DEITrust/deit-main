import styles from 'styles/Home.module.scss'
import { ThemeToggleButton, ThemeToggleList } from 'components/Theme'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import {
  useNetwork,
  useSwitchNetwork,
  useAccount,
  useBalance,
  useDisconnect,
  usePrepareContractWrite,
  useContractWrite,
  useContractRead,
} from 'wagmi'
import ConnectWallet from 'components/Connect/ConnectWallet'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useConnectModal, useAccountModal, useChainModal } from '@rainbow-me/rainbowkit'
import { useSignMessage } from 'wagmi'

import { deitABI } from './api/deit.abi'
import { brokerABI } from './api/broker.abi'

export default function Home() {
  return (
    <div className={`${styles.container}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

const Header = () => {
  return (
    <header className={styles.header}>
      <div></div>
      <div className="flex items-center text-5xl sm:text-6xl">
        <div className="relative">
          <h1>
            <strong>&mdash; DEIT. &mdash;</strong>
          </h1>
          <span className="p-1/2 absolute right-0 top-0 rounded-2xl bg-cyan-400 px-1.5 text-xs font-thin text-neutral-900 sm:right-4">
            Est. 2020
          </span>
        </div>
      </div>

      <div className="flex items-center">{/* <ThemeToggleList /> */}</div>
    </header>
  )
}

const Main = () => {
  return (
    <main className={styles.main + ' space-y-6'}>
      <Brand />
      <Web3Matrix />
      <StacksProjects />
      <Foundation />
    </main>
  )
}

const Brand = () => {
  return (
    <div className="my-8 max-w-lg rounded-xl bg-slate-200 p-6 text-center text-neutral-900">
      <h2 className="mb-2 text-3xl font-bold underline">
        Digital Estate
        <br /> Investment Trust
      </h2>
      <blockquote>
        Skunkworks Web3 R&D factory busy researching, investing in, and building the fourth industrial revolution.
      </blockquote>
    </div>
  )
}

const DEITBroker = props => {
  // const price = 100000
  const base = ethers.utils.parseEther('1.0')

  const {
    data: price,
    isError,
    isLoading,
  } = useContractRead({
    address: props.BROKER_ADDRESS,
    abi: props.BROKER,
    functionName: 'price',
    onSuccess(data) {
      const price = ethers.BigNumber.from(String(data))
      const deit = ethers.BigNumber.from(base).div(price)
      const options = { value: ethers.utils.parseEther('1.0') }
      setBuyParams({
        ETH: ethers.BigNumber.from(String(1.0)),
        DEIT: deit,
        amount: price,
        options: options,
      })
    },
  })

  const [buyParams, setBuyParams] = useState({
    ETH: ethers.BigNumber.from(1.0),
    DEIT: ethers.BigNumber.from(100000),
    amount: ethers.BigNumber.from(price).mul(base),
    options: { value: base },
  })

  const handleETHChange = event => {
    if (!price || !event.target.value) return
    const ethVal = ethers.FixedNumber.from(event.target.value) //String()

    const deitPrint = ethVal
      ? ethers.BigNumber.from(ethers.utils.parseEther(String(ethVal))).div(ethers.BigNumber.from(String(price)))
      : ethers.BigNumber.from(String(0))
    const amount = ethers.utils.parseEther(String(deitPrint))
    const ethParse = ethVal ? String(ethVal) : String(0)
    const options = { value: ethers.utils.parseEther(ethParse) }
    setBuyParams({
      ETH: ethers.BigNumber.from(String(ethVal)),
      DEIT: deitPrint,
      amount: amount,
      options: options,
    })
  }
  const handleDEITChange = event => {
    if (!price || !event.target.value) return
    const deitInput = String(event.target.value)
    const amount = deitInput ? ethers.utils.parseEther(deitInput) : 0
    const ethPrint = ethers.utils.formatUnits(
      ethers.BigNumber.from(amount)
        .mul(ethers.BigNumber.from(String(price)))
        .div(base),
      18
    )
    const options = { value: ethers.utils.parseEther(ethPrint) }
    setBuyParams({
      ETH: ethers.BigNumber.from(ethPrint),
      DEIT: ethers.BigNumber.from(deitInput),
      amount: ethers.BigNumber.from(amount),
      options: options,
    })
  }

  const { config, refetch, error } = usePrepareContractWrite({
    address: props.BROKER_ADDRESS,
    abi: props.BROKER,
    functionName: 'buy',
    args: [buyParams.amount],
    overrides: buyParams.options,
  })

  const { write: buyDEIT } = useContractWrite(config)

  const handleBuy = event => {
    event.preventDefault()
    console.log(buyParams)
    if (props.ethBalance >= buyParams.amount) {
      refetch()
      buyDEIT()
    }
  }

  return (
    <div className="text-left font-bold">
      <h4 className="pt-2 text-lg font-bold text-neutral-900 underline">DEIT Broker Contract</h4>
      {props.chain && props.chain?.id == 31337 && (
        <>
          <div className="flex flex-col">
            <label htmlFor="ETH" className="mt-4">
              ETH
            </label>
            <input
              id="ETH"
              type="text"
              onChange={handleETHChange}
              placeholder={String(buyParams.ETH)}
              value={String(buyParams.ETH)}
              name="ETH"
              className="mt-4 bg-neutral-50 p-4"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="DEIT" className="mt-4">
              DEIT
            </label>
            <input
              id="DEIT"
              type="text"
              onChange={handleDEITChange}
              placeholder={String(price)}
              name="DEIT"
              value={String(buyParams.DEIT)}
              className="mt-4 bg-neutral-50 p-4"
            />
          </div>

          <button
            onClick={handleBuy}
            className="mt-4 w-full  bg-green-500 p-4 text-neutral-200 transition-all duration-150 hover:scale-105 hover:bg-green-400"
          >
            Buy DEIT
          </button>
          {error && false && <div>An error occurred preparing the transaction: {error.message}</div>}
        </>
      )}

      {!props.chain ||
        (props.chain?.id != 31337 && (
          <div className="mt-8 bg-neutral-700 p-4 font-bold text-neutral-50">Ethereum Goerli Only</div>
        ))}
    </div>
  )
}

const TransferForm = props => {
  const [transferParams, setTransferParams] = useState({
    to: '',
    amount: 0,
  })

  const { config, refetch, error } = usePrepareContractWrite({
    address: props.TOKEN_ADDRESS,
    abi: props.DEIT20,
    functionName: 'transfer',
    args: [transferParams.to, transferParams.amount],
  })

  const { write } = useContractWrite(config)

  // const write = true

  const handleTransferChange = event => {
    setTransferParams({
      ...transferParams,
      [event.target.name]:
        event.target.name == 'amount' ? ethers.utils.parseEther(event.target.value) : event.target.value,
    })
    refetch()
  }

  const handleTransfer = event => {
    event.preventDefault()
    console.log(transferParams)
    if (props.tokenBalance >= transferParams.amount) {
      write?.()
    }
  }

  return (
    <div className=" text-left font-bold">
      <h4 className="pt-2 text-lg font-bold text-neutral-900 underline">DEIT Token Contract</h4>
      {props.chain && props.chain?.id == 31337 && (
        <div className="flex flex-col">
          <label htmlFor="to" className="mt-4">
            Transfer To
          </label>
          <input
            id="to"
            type="text"
            placeholder="0x00000"
            onChange={handleTransferChange}
            name="to"
            className="mt-4 bg-neutral-50 p-4"
          />
          <label htmlFor="amount" className="mt-4">
            Transfer Amount (in DEIT)
          </label>
          <input
            id="amount"
            type="text"
            placeholder="0"
            onChange={handleTransferChange}
            name="amount"
            className="mt-4 bg-neutral-50 p-4"
          />
          <button
            className=" mt-4 w-full bg-slate-600 p-4 text-neutral-200 transition-all duration-150 hover:scale-105 hover:bg-green-400"
            disabled={!write}
            onClick={handleTransfer}
          >
            Send DEIT
          </button>
          {error && false && <div>An error occurred preparing the transaction: {error.message}</div>}
        </div>
      )}

      {!props.chain ||
        (props.chain?.id != 31337 && (
          <div className="mt-8 bg-neutral-700 p-4 font-bold text-neutral-50">Ethereum Goerli Only</div>
        ))}
    </div>
  )
}

const PooledDEIT = props => {
  const { data: tokenBalance, isLoading: isTokenBalanceLoading } = useBalance({
    address: props.BROKER_ADDRESS,
    token: props.TOKEN_ADDRESS,
  })
  return (
    <>
      {isTokenBalanceLoading ? 'loading' : tokenBalance ? `${tokenBalance?.formatted} ${tokenBalance?.symbol}` : 'n/a'}
    </>
  )
}

const PooledETH = props => {
  const { data: balance, isLoading: isBalanceLoading } = useBalance({
    address: props.BROKER_ADDRESS,
  })
  return <>{isBalanceLoading ? 'loading' : balance ? `${balance?.formatted} ${balance?.symbol}` : 'n/a'}</>
}

const DeitSupply = props => {
  const { data, isError, isLoading } = useContractRead({
    address: props.TOKEN_ADDRESS,
    abi: props.DEIT20,
    functionName: 'totalSupply',
    onSuccess(data) {
      console.log(data)
    },
  })

  return <>{isLoading ? 'loading' : String(ethers.utils.formatUnits(String(data), 18))} </>
}

const Web3Matrix = () => {
  const DEIT20 = deitABI()
  const BROKER = brokerABI()
  const BROKER_ADDRESS = '0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e'
  const TOKEN_ADDRESS = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
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

  const { openConnectModal } = useConnectModal()
  const { openAccountModal } = useAccountModal()
  const { openChainModal } = useChainModal()
  const { disconnect } = useDisconnect()
  const web3Classess = isConnected ? 'max-w-7xl' : 'max-w-xl rounded-xl'
  const otherClassess = isConnected ? 'hidden' : 'block'

  const [placeholderImg, setPlaceholderImg] = useState('./1.gif')

  const [donation, setDonation] = useState(false)
  const donationImgClasses = donation ? 'scale-110 hover:scale-95 ' : 'hover:scale-110 '

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
                <h4 className="pt-2 text-lg font-bold text-neutral-900 underline">ETH Balance</h4>
                <dd className="break-all">
                  {isBalanceLoading ? 'loading' : balance ? `${balance?.formatted} ${balance?.symbol}` : 'n/a'}
                </dd>
                <h4 className="pt-2 text-lg font-bold text-neutral-900 underline">DEIT Balance</h4>
                <dd className="break-all text-sm">
                  {isTokenBalanceLoading
                    ? 'loading'
                    : tokenBalance
                    ? `${tokenBalance?.formatted} ${tokenBalance?.symbol}`
                    : 'n/a'}
                </dd>
                <h4 className="pt-2 text-lg font-bold text-neutral-900 underline">Sign Message</h4>
                <dd className="mt-4 break-all text-neutral-400">{address ? <SignMsg /> : 'n/a'} </dd>
                <button
                  onClick={handleRefresh}
                  className=" mt-2 w-full bg-slate-600 p-4 text-neutral-200 transition-all duration-150 hover:scale-105 hover:bg-green-400"
                >
                  Refresh
                </button>
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
                  <span className="rounded-2xl bg-neutral-50 p-2 align-text-top text-sm font-thin text-neutral-900 no-underline">
                    alpha
                  </span>
                  &nbsp;&gt; Goerli Launch
                </div>
                <div className="mt-8">
                  <span className="rounded-2xl bg-neutral-50 p-2 align-text-top text-sm font-thin text-neutral-900 no-underline">
                    beta
                  </span>
                  &nbsp;&gt; ETH Mainnet Launch
                </div>
              </div>
            </div>
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
                <div className={`break-all ${styles.dl}`}>
                  <h4 className="pt-2 text-lg font-bold text-neutral-900 underline">Official ETH Contracts</h4>
                  <ul className="mb-4">
                    <li>
                      <strong>DEIT Token Testnet Address:</strong>
                      <br />
                      <a className="text-sm underline" href={`https://goerli.etherscan.io/address/${TOKEN_ADDRESS}`}>
                        {TOKEN_ADDRESS}
                      </a>
                    </li>
                    <li>
                      <strong>DEIT Broker Testnet Address:</strong>
                      <br />{' '}
                      <a className="text-sm underline" href={`https://goerli.etherscan.io/address/${BROKER_ADDRESS}`}>
                        {BROKER_ADDRESS}
                      </a>
                    </li>
                  </ul>
                  <h4 className="pt-2 text-lg font-bold text-neutral-900 underline">Meta Stats</h4>
                  <div className="flex flex-col sm:flex-row">
                    <div className="basis-1/2">
                      <ul>
                        <li>
                          <strong>Max Supply:</strong>
                          <br /> 100 billion
                        </li>
                        <li>
                          <strong>Total Supply:</strong>
                          <br /> <DeitSupply DEIT20={DEIT20} TOKEN_ADDRESS={TOKEN_ADDRESS} />
                        </li>
                      </ul>
                    </div>
                    <div className="basis-1/2">
                      <ul>
                        <li>
                          <strong>Pooled ETH:</strong>
                          <br /> <PooledETH BROKER_ADDRESS={BROKER_ADDRESS} />
                        </li>
                        <li>
                          <strong>Pooled DEIT:</strong>
                          <br /> <PooledDEIT BROKER_ADDRESS={BROKER_ADDRESS} TOKEN_ADDRESS={TOKEN_ADDRESS} />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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
                {donation && <DonationForm BROKER_ADDRESS={BROKER_ADDRESS} chain={chain} />}
                {!donation && <AndThen />}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const DonationForm = props => {
  return (
    <div className=" bg-slate-900/40 px-4  pb-4 text-left  font-bold">
      <dt>R&D Donations</dt>
      {props.chain && props.chain?.id == 1 && (
        <div className="flex flex-col">
          <label htmlFor="to" className="mt-2 break-all">
            Transfer To: {props.BROKER_ADDRESS}
          </label>
          <label htmlFor="amount" className="mt-2">
            Transfer Amount (in ETH)
          </label>
          <input
            id="amount"
            type="text"
            placeholder="0"
            onChange={() => {}}
            name="amount"
            className="mt-4 bg-neutral-50 p-4"
          />
          <button className=" mt-4 w-full bg-slate-600 p-4 text-neutral-200 transition-all duration-150 hover:scale-105">
            Donate ETH
          </button>
          <p className="mt-4 text-sm">
            If you donate, thank you! And please let me know which project below you think most interesting/ viable.{' '}
            <a href="https://fractional.foundation" target="_blank" rel="noreferrer" className="underline">
              Fractional
            </a>{' '}
            still haunts me... what if?
          </p>
        </div>
      )}
      {props.chain?.id != 1 && (
        <div>
          <div className="mt-8 bg-slate-200 p-4 font-bold text-neutral-900">Ethereum Mainnet Only</div>
          <div className="mt-8 bg-slate-200 p-4 font-normal text-neutral-900">
            <a href="mailto:proggR@pm.me" target="_blank" rel="noreferrer" className="underline">
              Contact me
            </a>{' '}
            and let me know what research you&apos;d like to see funded or which projects below I should keep hacking
            forward/ aim to integrate with <strong>DEIT</strong>.
          </div>
          <div className="mt-8 bg-slate-200 p-4 font-normal text-neutral-900">
            Need dev work done?{' '}
            <a href="mailto:proggR@pm.me" target="_blank" rel="noreferrer" className="underline">
              Contact me
            </a>
            . Will entertain Web3 contracts/ fulltime work, or select Web2 contracts of interest.
          </div>
        </div>
      )}
    </div>
  )
}

const AndThen = () => {
  return (
    <div className=" bg-slate-900/40 px-4  pb-4">
      <dt>And then...</dt>
      <p className="mb-2">
        <strong>DEIT</strong> is an ongoing project researching and developing whatever comes to mind and seems
        interesting largely for fun. While I&apos;m looking for real work in web3 for{' '}
        <a href="https://github.com/proggR" target="_blank" rel="noreferrer" className="underline">
          myself
        </a>{' '}
        at the moment, I&apos;d also love to find funders for <strong>DEIT</strong> in order to stay heads down hacking
        out any of the projects or diving down any of the research interests listed below. Even a little ramp would go a
        long way, allowing me a brief reprieve from normal work to live my dream and HACK THE PLANET.
      </p>
      <p>
        Contact for R&D funding interests{' '}
        <a href="mailto:proggR@pm.me" target="_blank" rel="noreferrer" className="underline">
          here
        </a>
        .
      </p>
      <p className="mt-4">
        <span className=" rounded-2xl bg-neutral-50 p-2 align-text-top font-bold text-neutral-900 no-underline">
          beta.v<span className="text-2xl">∞</span>
        </span>
      </p>
    </div>
  )
}

const StacksProjects = () => {
  return (
    <div className="flex max-w-7xl flex-col sm:flex-row sm:space-x-6">
      <StacksSkills />
      <Projects />
    </div>
  )
}

const SignMsg = () => {
  const [msg, setMsg] = useState('DEIT')
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: msg,
  })
  const signMsg = () => {
    if (msg) {
      signMessage()
    }
  }

  return (
    <>
      <p>
        <input value={msg} onChange={e => setMsg(e.target.value)} className="w-full p-4" />
        <button
          disabled={isLoading}
          onClick={() => signMsg()}
          className="mt-4 w-full bg-slate-600 p-4 text-white transition-all duration-150 hover:scale-105 hover:bg-green-400"
        >
          Sign
        </button>
      </p>
      <p>
        {isSuccess && <span>Signature: {data}</span>}
        {isError && <span>Error signing message</span>}
      </p>
    </>
  )
}

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <ThemeToggleButton />
      </div>

      <div className="mb-8 flex w-full flex-col items-center justify-end sm:mb-0 sm:max-w-xl sm:flex-row">
        <div>
          <strong className="text-4xl sm:mr-8">DEIT.</strong>
        </div>
        <div className="">
          <a href="https://www.linkedin.com/in/brandon-thorn-03662b36/" target="_blank" rel="noreferrer">
            <img
              src="./me.jpeg"
              alt="Brandon Thorn, the guy with too many ideas and not enough time or seed capital...yet"
              className="my-4 w-24 sm:my-0 sm:ml-4 sm:h-12 sm:w-10 sm:py-1"
            />
          </a>
        </div>
        <div className="w-full text-center ">
          A
          <a
            href="https://www.linkedin.com/in/brandon-thorn-03662b36/"
            className="mx-2 font-bold underline"
            target="_blank"
            rel="noreferrer"
          >
            Brandon Thorn
          </a>
          /<br className="sm:hidden" />
          <a href="https://github.com/proggR" className="mx-2 font-bold underline" target="_blank" rel="noreferrer">
            proggR
          </a>
          project.
        </div>
      </div>
    </footer>
  )
}

const Foundation = () => {
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

const StacksSkills = () => {
  return (
    <div className={`mt-6 basis-1/3 rounded-xl bg-neutral-500/10 p-6 text-center sm:mt-0 ${styles.dl}`}>
      <h3 className="mb-4 text-3xl font-bold underline">
        Languages/
        <br className="sm:hidden" />
        Stacks
      </h3>
      <dt>Web3</dt>
      <ul className="flex flex-wrap items-center space-x-4">
        <li className="ml-4">&mdash; Solidity</li>
        <li>&mdash; ERC2535</li>
        <li>&mdash; Hardhat </li>
        <li>&mdash; Ethers.js </li>
        <li>&mdash; Web3.js </li>
        <li>&mdash; Wagmi </li>
        <li>&mdash; Chainlink </li>
        <li>&mdash; Subgraphs </li>
        <li>&mdash; IPFS </li>
      </ul>
      <hr className="my-6" />
      <dt>Web2/Systems</dt>
      <ul className="flex flex-wrap items-center space-x-4">
        <li className="ml-4">&mdash; React/AstroJS</li>
        <li>&mdash; GraphQL</li>
        <li>&mdash; Python/Flask</li>
        <li>&mdash; Golang/Gin</li>
        <li>&mdash; NodeJS/Express</li>
        <li>&mdash; Ruby on Rails</li>
        <li>&mdash; PHP/Laravel</li>
        <li>&mdash; Unity3D</li>
        <li>&mdash; C#/Java</li>
        <li>&mdash; Postgres/MySQL/Redis</li>
        <li>&mdash; Docker/Kubernates</li>
        <li>&mdash; Terraform/AWS/Heroku</li>
        <li>&mdash; Tailwind</li>
      </ul>
      <hr className="my-6" />
      <h3 className=" mb-4 text-3xl font-bold underline">
        Insights/
        <br className="sm:hidden" />
        Experience
      </h3>
      <dt>Industry Experience</dt>
      <ul className="mb-4 flex flex-wrap items-center space-x-4">
        <li className="ml-4">&mdash; Healthcare</li>
        <li>&mdash; Government</li>
        <li>&mdash; Academia</li>
        <li>&mdash; Music/Media</li>
        <li>&mdash; Startups</li>
      </ul>
      <hr className="my-6" />
      <dt>Research Interests</dt>
      <ul className="mb-4 flex flex-wrap items-center space-x-4">
        <li className="ml-4">&mdash; Social-capitalism</li>
        <li>&mdash; Distributed Tech</li>
        <li>&mdash; Insurance</li>
        <li>&mdash; Dev Tooling</li>
        <li>&mdash; Oracles</li>
        <li>&mdash; Game/Virtual World Dev</li>
        <li>&mdash; Education</li>
        <li>&mdash; Healthcare</li>
        <li>&mdash; Open Accreditation</li>
        <li>&mdash; SSI/DID</li>
        <li>&mdash; Theoretical Economics</li>
        <li>&mdash; DAOs</li>
        <li>&mdash; ARGs</li>
        <li>&mdash; Memetics</li>
      </ul>
      <hr className="my-6" />
      <dt>Skills Available For Fractional CTO/Consulting</dt>
      <ul className="flex flex-wrap items-center space-x-4">
        <li className="ml-4">&mdash; Architecture</li>
        <li>&mdash; Roadmapping</li>
        <li>&mdash; Grant/ Fundraising Proposals</li>
        <li>&mdash; Project Management</li>
        <li>&mdash; Migration Management</li>
        <li>&mdash; Third Party Integrations</li>
        <li>&mdash; Legacy System Replacements</li>
        <li>&mdash; Social Media/SEO Optimization</li>
      </ul>
    </div>
  )
}

const Projects = () => {
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
              With multiple MVP protofypes in the back catalog, and one Early Access game nearing launch, <strong>DEIT</strong> will be exploring more game dev as <strong>DEIT Games</strong>, delving more into bridging DLT and games with future releases.
            </p>
            <p>
              In the meantime, if you like Super Smash Bros and/or Slime Volleyball, stay tuned ;)
            </p>
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
              .<br/>
              Set to be integrated into a refactor of  <a
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
              Started simply as the Starter Repo outlined below, dfm and the WIP diamond.json format it&apos;s built on aims
              to be to Diamond driven Solidity development what NPM/package.json is to Node dev.
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
              implementations of ERC20, ERC721 and EfunctionRC1155 leveraging DiamondStorage, tasks covering the
              external functions for each Facet, and a WIP per-Facet test structure to simplify Diamond
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
              . diamond-hardhat-chainlink extension in development.
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
              is live, but articles covering EVM/Diamond Storage in more detail along with an example project are in
              draft with plans to expand coverage alongside continued dev.
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
              router, registrar, event stream, blockchain, binary state, and assemblyscript hooks (though currently only
              the node goes through the IRMA handshake... then the miner basically backdoors it atm).
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
              . Would love feedback on this idea. Tell me why it&apos;s doomed to fail because it started to hurt my brain,
              but then helped inspire Deluge.
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
              a reusable standard for routing capital from point A to point B, complete with DAuth, DEIT&apos;s model
              for bubbling transaction event data to delegated authorities to automate business processes/taxes.
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
              </a>
              , but once incentives/tokenomics have been reconsidered it will be rebuilt leveraging the diamond-hardhat
              repo to add the culled featureset.
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
              campaign manager. It offers few bells & whistles (for now), aiming toservice a niche budget minded client
              who has simple needs: managing lists and sending emails.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
