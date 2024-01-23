import 'styles/style.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { app } from 'appConfig'
import { useState, useEffect } from 'react'
import HeadGlobal from 'components/HeadGlobal'

// import type { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'Contact DEIT',
//   description: 'Contact DEIT to discuss a project.',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// }

// Web3Wrapper deps:
import { connectorsForWallets, RainbowKitProvider, lightTheme, darkTheme } from '@rainbow-me/rainbowkit'
import {
  injectedWallet,
  metaMaskWallet,
  braveWallet,
  coinbaseWallet,
  walletConnectWallet,
  ledgerWallet,
  rainbowWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { Chain } from '@rainbow-me/rainbowkit'
// import { polygon, optimism, arbitrum } from 'wagmi/chains'
import { hardhat, polygonMumbai, polygon, mainnet } from 'wagmi/chains'
import { createClient, configureChains, WagmiConfig } from 'wagmi'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <HeadGlobal />
      <Web3Wrapper>
        <Component key={router.asPath} {...pageProps} />
      </Web3Wrapper>
    </ThemeProvider>
  )
}
export default App

// Web3 Configs
const { chains, provider } = configureChains(
  // [mainnet, polygon, optimism, arbitrum, gnosisChain],
  process.env.NEXT_PUBLIC_ENV == 'dev'
    ? [hardhat, polygonMumbai, polygon, mainnet]
    : process.env.NEXT_PUBLIC_ENV == 'alpha'
    ? [polygonMumbai, polygon, mainnet]
    : [polygon, mainnet],
  [
    infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_ID !== '' && process.env.NEXT_PUBLIC_INFURA_ID }),
    jsonRpcProvider({
      rpc: chain => {
        return null
      },
    }),
    publicProvider(),
  ]
)

const otherWallets = [
  braveWallet({ chains }),
  ledgerWallet({ chains }),
  //coinbaseWallet({ chains, appName: app.name }),
  rainbowWallet({ chains }),
]

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [injectedWallet({ chains }), metaMaskWallet({ chains }), walletConnectWallet({ chains })],
  },
  {
    groupName: 'Other Wallets',
    wallets: otherWallets,
  },
])

const wagmiClient = createClient({ autoConnect: false, connectors, provider })

// Web3Wrapper
export function Web3Wrapper({ children }) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        appInfo={{
          appName: app.name,
          learnMoreUrl: app.url,
        }}
        chains={chains}
        // Optional, initialChain={1}, initialChain={chain.mainnet}, initialChain={gnosisChain}
        initialChain={
          process.env.NEXT_PUBLIC_ENV == 'dev' ? 31337 : process.env.NEXT_PUBLIC_ENV == 'alpha' ? 80001 : 137
        }
        showRecentTransactions={true}
        theme={resolvedTheme === 'dark' ? darkTheme() : lightTheme()}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
