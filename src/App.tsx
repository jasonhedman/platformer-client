import React, { useState, useEffect } from 'react';

import Game from './components/Game';

import {
  PontemWalletAdapter, 
  AptosWalletAdapter,
  WalletAdapter,
  MartianWalletAdapter,
  RiseWalletAdapter,
  WalletProvider
} from '@manahippo/aptos-wallet-adapter';
import Layout from './components/Layout';
import Controls from './components/Controls';
import Header from './components/Header';


const App: React.FC = () => {

  const [wallets, setWallets] = useState<WalletAdapter[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setWallets([
      new PontemWalletAdapter(),
      new RiseWalletAdapter(),
      new AptosWalletAdapter(),
      new MartianWalletAdapter(),
    ])
    setLoaded(true);
  }, [])

  if (!loaded) {
    return null;
  }

  return (
    <WalletProvider
      wallets={wallets}
      autoConnect={true}
    >
        <Layout>
          <Header />
          <Controls />
          <Game />
        </Layout>
    </WalletProvider>
  );
}

export default App;
