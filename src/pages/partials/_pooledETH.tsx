import { useBalance } from 'wagmi'
import { useEffect } from 'react'

export const PooledETH = props => {
  const {
    data: balance,
    isLoading: isBalanceLoading,
    refetch,
  } = useBalance({
    address: props.BROKER_ADDRESS,
  })

  useEffect(() => {
    refetch()
  }, [props.meta, refetch])

  return (
    <span className="text-xs">
      {isBalanceLoading ? 'loading' : balance ? `${balance?.formatted} ${balance?.symbol}` : 'n/a'}
    </span>
  )
}
