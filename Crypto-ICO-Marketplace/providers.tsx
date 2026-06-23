// Example App Provider
import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { polygonAmoy } from 'wagmi/chains';

const config = getDefaultConfig({
  appName: 'ICO Marketplace',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
  chains: [polygonAmoy],
  transports: { [polygonAmoy.id]: http() },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <RainbowKitProvider>{children}</RainbowKitProvider>
    </WagmiProvider>
  );
}