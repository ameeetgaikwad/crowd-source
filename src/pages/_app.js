import MainLayout from "@/layout/mainlayout";
import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [polygonMumbai],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Mint NFT",
  projectId: "2455679236dbec241fec394feb4fe62d",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          modalSize="compact"
          theme={darkTheme()}
        >
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}
