import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'

export const DEITBroker = props => {
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
      setBuyParams({
        ...buyParams,
        ETH: String(1.0),
        DEIT: String(deit),
      })
    },
  })

  const [buyParams, setBuyParams] = useState({
    ETH: String(1.0),
    DEIT: String(100000),
    amount: ethers.BigNumber.from(0),
    options: { value: ethers.BigNumber.from(0) },
  })

  const handleETHChange = event => {
    if (!price) return
    const ethInput = !event.target.value
      ? 0
      : event.target.value.charAt(0) == '0' && event.target.value.length > 1
      ? event.target.value.substring(1)
      : event.target.value

    if (String(ethInput).charAt(0) == '.' && String(ethInput).length == 1) {
      setBuyParams({
        ...buyParams,
        ETH: String(ethInput),
      })
      return
    }

    const ethFloat = parseFloat(ethInput)

    if (isNaN(ethFloat)) {
      setBuyParams({
        ...buyParams,
        ETH: String(ethInput),
      })
      return
    }

    const deitPrint = String(
      ethers.BigNumber.from(ethers.utils.parseEther(String(ethFloat))).div(ethers.BigNumber.from(String(price)))
    )

    setBuyParams({
      ...buyParams,
      ETH: String(ethInput),
      DEIT: String(deitPrint),
    })
  }
  const handleDEITChange = event => {
    if (!price) return
    const deitInput = !event.target.value
      ? 0
      : event.target.value.charAt(0) == '0' && event.target.value.length > 1
      ? event.target.value.substring(1)
      : event.target.value

    if (String(deitInput).charAt(0) == '.' && String(deitInput).length == 1) {
      setBuyParams({
        ...buyParams,
        DEIT: String(deitInput),
      })
      return
    }
    console.log('INPUT')
    console.log(deitInput)
    const deitFloat = parseFloat(deitInput)
    console.log('FLOAT')
    console.log(deitFloat)
    if (isNaN(deitFloat)) {
      setBuyParams({
        ...buyParams,
        DEIT: String(deitInput),
      })
      return
    }
    const deitStr = String(deitFloat)

    const ethPrint = String(
      ethers.utils.formatUnits(
        ethers.BigNumber.from(ethers.utils.parseEther(deitStr))
          .mul(ethers.BigNumber.from(String(price)))
          .div(base),
        18
      )
    )

    setBuyParams({
      ...buyParams,
      ETH: String(ethPrint),
      DEIT: String(deitInput),
    })
  }

  const { config, refetch, error } = usePrepareContractWrite({
    address: props.BROKER_ADDRESS,
    abi: props.BROKER,
    functionName: 'buy',
    args: [buyParams.amount],
    overrides: buyParams.options,
  })

  const [buying, setBuying] = useState(false)

  const { write: buyDEIT } = useContractWrite(config)

  const handleBuy = event => {
    event.preventDefault()
    console.log('CALLING')
    console.log(props.BROKER_ADDRESS)
    console.log(props.BROKER)
    const _value = ethers.utils.parseEther(String(buyParams.ETH))
    const _amount = ethers.utils.parseEther(String(buyParams.DEIT))
    const _options = { value: _value }
    setBuyParams({ ...buyParams, amount: _amount, options: _options })
    refetch()
    if (props.ethBalance >= buyParams.amount) {
      setBuying(true)
    }
  }

  useEffect(() => {
    if (buying && buyDEIT) {
      buyDEIT()
      setBuying(false)
    }
  }, [buying, buyDEIT, setBuying])

  return (
    <div className="text-left font-bold">
      <h4 className="pt-2 text-lg font-bold text-neutral-900 underline">DEIT Broker Contract</h4>
      {props.chain && (props.chain?.id == 31337 || props.chain?.id == 80001) && (
        <>
          <div className="flex flex-col">
            <label htmlFor="ETH" className="mt-4">
              MATIC
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
        (props.chain?.id != 31337 && props.chain?.id != 80001 && (
          <div className="mt-8 bg-neutral-700 p-4 font-bold text-neutral-50">Polygon Mumbai Only</div>
        ))}
    </div>
  )
}
