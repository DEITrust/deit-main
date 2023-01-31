import { useState } from 'react'
import { useSignMessage } from 'wagmi'

export const SignMsg = () => {
  const [msg, setMsg] = useState('DEIT is neat')
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

export default SignMsg
