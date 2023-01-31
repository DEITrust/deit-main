import { useBalance } from 'wagmi'
import { useEffect } from 'react'

export const PooledDEIT = props => {
  const {
    data: tokenBalance,
    isLoading: isTokenBalanceLoading,
    refetch,
  } = useBalance({
    address: props.BROKER_ADDRESS,
    token: props.TOKEN_ADDRESS,
  })

  useEffect(() => {
    refetch()
  }, [props.meta, refetch])

  return (
    <span className="text-xs">
      {isTokenBalanceLoading ? 'loading' : tokenBalance ? `${tokenBalance?.formatted} ${tokenBalance?.symbol}` : 'n/a'}
    </span>
  )
}
