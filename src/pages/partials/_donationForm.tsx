import { usePrepareSendTransaction, useSendTransaction } from 'wagmi'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
export const DonationForm = props => {
  //    const {config } = usePrepareContractWrite({

  //    })

  const [donating, setDonating] = useState(false)
  const [input, setInput] = useState('0.0')
  const [amount, setAmount] = useState(ethers.BigNumber.from(0))

  const { config, refetch } = usePrepareSendTransaction({
    request: {
      to: props.BROKER_ADDRESS,
      value: amount,
    },
  })

  const { sendTransaction } = useSendTransaction(config)

  const handleDonation = () => {
    setAmount(ethers.utils.parseEther(input))
    refetch()
    setDonating(true)
  }

  useEffect(() => {
    if (donating) {
      sendTransaction?.()
      setDonating(false)
    }
  }, [sendTransaction, donating])

  return (
    <div className=" bg-slate-900/40 px-4  pb-4 text-left  font-bold">
      <dt>R&D Donations</dt>
      {/* {props.chain && props.chain?.id == 137 && ( */}
      {props.chain && (props.chain?.id == 31337 || props.chain?.id == 1 || props.chain?.id == 137) && (
        <div className="flex flex-col">
          <label htmlFor="to" className="mt-2 break-all">
            Transfer To: {props.DONATION_ADDRESS}
          </label>
          <label htmlFor="amount" className="mt-2">
            Transfer Amount (in {props.chain?.id == 1 ? 'ETH' : 'MATIC'})
          </label>
          <input
            id="amount"
            type="text"
            onChange={e => {
              setInput(e.target.value)
            }}
            placeholder={input}
            name="amount"
            className="mt-4 bg-neutral-50 p-4 text-neutral-900"
          />
          <button
            onClick={handleDonation}
            className=" mt-4 w-full bg-slate-600 p-4 text-neutral-200 transition-all duration-150 hover:scale-105 hover:bg-green-400"
          >
            Donate {props.chain?.id == 1 ? 'ETH' : 'MATIC'}
          </button>
          <p className="mt-4 text-sm">
            If you donate, thank you! And{' '}
            <a className="underline" href="mailto:proggR@pm.me" target="_blank" rel="noreferrer">
              please let me know
            </a>{' '}
            which project below you think most interesting/ viable.{' '}
            <a href="https://fractional.foundation" target="_blank" rel="noreferrer" className="underline">
              Fractional
            </a>{' '}
            still haunts me... what if?...
          </p>
        </div>
      )}
      {/* {props.chain?.id != 137 && props.chain?.id != 1 && ( */}
      {props.chain?.id != 1 && props.chain?.id != 137 && props.chain?.id != 31337 && (
        <div>
          <div className="mt-8 bg-slate-200 p-4 font-bold text-neutral-900">ETH/MATIC Mainnets Only</div>
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

export default DonationForm
