'use client'

import { PrivyProvider } from '@privy-io/react-auth';
import { abstractTestnet } from 'viem/chains';

export default function WalletProvider({ children }: { children: React.ReactNode }) {
    return (
        <PrivyProvider
            appId="cm29yi5s607e0fx5aq20cqszz"
            config={{
                appearance: {
                    theme: 'light',
                    accentColor: '#676FFF',
                },
                supportedChains: [abstractTestnet],
                defaultChain: abstractTestnet,
                embeddedWallets: {
                    createOnLogin: 'users-without-wallets',
                },
            }}
        >
            {children}
        </PrivyProvider>
    );
}