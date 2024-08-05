'use client';
import {PrivyProvider} from '@privy-io/react-auth';
import {arbitrum, arbitrumSepolia, base, baseSepolia} from 'viem/chains';
import React from 'react';


export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <PrivyProvider
      appId='clu43ma1g02yz1y4ob9gk96cg' 
      config={{
        appearance: {
          theme: 'dark',
          accentColor: '#676FF6',
          logo: 'https://shorturl.at/QMf6T',
        },
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
        supportedChains:[baseSepolia,arbitrumSepolia]
      }}
    >
      {children}
    </PrivyProvider>
  );
}