import Head from 'next/head';
// import SearchBar from '../components/SearchBar'
import TableHeader from '../components/TableHeader';
import CoinList from '../components/CoinList';
import Eth from './coins/eth';
import Tether from './coins/tether';
import Binance from './coins/binance';
import USDCoin from './coins/usdcoin';
import Ripple from './coins/ripple';
import TerraLuna from './coins/terra-luna';
import Solana from "./coins/solana"
import Cardano from "./coins/cardano"
import Avalanche2 from "./coins/avalanche-2"
import Polkadot from "./coins/polkadot"
import BinanceUSD from "./coins/binance-usd"
import Doge from "./coins/doge"
import TerraUSD from "./coins/terrausd"
import ShibaInu from "./coins/shibainu"
import WrappedBitcoin from "./coins/wrapped-bitcoin"
import MaticNetwork from "./coins/matic-network"
import CryptopComChain from "./coins/crypto-com-chain"
import Dai from "./coins/dai"
import Cosmos from "./coins/cosmos"
import LightCoin from "./coins/litecoin"
import Near from "./coins/near"
import ChainLink from "./coins/chainlink"
import Tron from "./coins/tron"
import FTXToken from "./coins/ftx-token"
import StakedEther from "./coins/staked-ether"
import BitcoinCash from "./coins/bitcoin-cash"
import LeoToken from "./coins/leo-token"
import Algorand from "./coins/algorand"
import Okb from "./coins/okb"
import Stellar from "./coins/stellar"
import HederaGraph from "./coins/hedera"
import Uniswap from "./coins/uniswap"
import Decentraland from "./coins/decentraland"
import AxieInfinity from "./coins/axie-infinity"
import EthereumClassic from "./coins/ethereum-classic"
import Fantom from "./coins/fantom"
import InternetComputer from "./coins/internet-computer"
import TheSandbox from './coins/sandbox';
import FileCoin from './coins/filecoin';
import Vechain from './coins/vechain';
import CompoundEther from './coins/compound-ether';
import Osmosis from './coins/osmosis';
import KlayToken from './coins/klay-token';
import ElRondERD from './coins/elrond-erd2';
import Frax from './coins/frax';
import Monero from './coins/monero';
import MagicInternet from './coins/magic-internet-money';
import ThetaToken from './coins/theta-token';
import CompoundUSD from './coins/compound-usd';

import { useState } from 'react';

export default function Home({ coinsData }) {
  const [search, setSearch] = useState('');

  const filteredCoins = coinsData.filter(coin => coin.symbol.toLowerCase().includes(search.toLowerCase()));


  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  }

  return (
    <>
      <Head>
        <title>Price List</title>
        <meta name="description" content="NCX Price List" />
        <link rel="icon" href="/ncx.ico" />
      </Head>
      <header>
      <div className='coin__app'>
        {/* <Chart /> */}
        {/* <SearchBar type='text' placeholder='Search' onChange={handleChange} /> */}
        <TableHeader />
        <CoinList coinsData={filteredCoins} />
        <Eth />
        <Tether />
        <Binance />
        <USDCoin />
        <Ripple />
        <TerraLuna />
        <Solana />
        <Cardano />
        <Avalanche2 />
        <Polkadot />
        <BinanceUSD />
        <Doge />
        <TerraUSD />
        <ShibaInu />
        <WrappedBitcoin />
        <MaticNetwork />
        <CryptopComChain />
        <Dai />
        <Cosmos />
        <LightCoin />
        <Near />
        <ChainLink />
        <Tron />
        <FTXToken />
        <StakedEther />
        <BitcoinCash />
        <LeoToken />
        <Algorand />
        <Okb />
        <Stellar />
        <HederaGraph />
        <Uniswap />
        <Decentraland />
        <AxieInfinity />
        <EthereumClassic />
        <Fantom />
        <InternetComputer />
        <TheSandbox />
        <FileCoin />
        <Vechain />
        <CompoundEther />
        <Osmosis />
        <KlayToken />
        <ElRondERD />
        <Frax />
        <Monero />
        <MagicInternet />
        <ThetaToken />
        <CompoundUSD />
      </div>
      </header>
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24%2C7d`);

  const coinsData = await res.json();

  return {
    props: {
      coinsData
    }
  }

  

}