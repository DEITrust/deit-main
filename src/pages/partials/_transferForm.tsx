import { useState } from 'react'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { ethers } from 'ethers'

export const TransferForm = props => {
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
      {props.chain && (props.chain?.id == 31337 || props.chain?.id == 80001) && (
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
        (props.chain?.id != 31337 && props.chain?.id != 80001 && (
          <div className="mt-8 bg-neutral-700 p-4 font-bold text-neutral-50">Polygon Mumbai Only</div>
        ))}
    </div>
  )
}

export default TransferForm
