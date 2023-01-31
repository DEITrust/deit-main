import { useContractRead } from 'wagmi'
import { useEffect } from 'react'
import { ethers } from 'ethers'

export const DeitSupply = props => {
  const { data, isError, isLoading, refetch } = useContractRead({
    address: props.TOKEN_ADDRESS,
    abi: props.DEIT20,
    functionName: 'totalSupply',
    onSuccess(data) {
      console.log(data)
    },
  })

  useEffect(() => {
    refetch()
  }, [props.meta, refetch])

  return <span className="text-xs">{isLoading ? 'loading' : String(ethers.utils.formatUnits(String(data), 18))} </span>
}

export default DeitSupply
