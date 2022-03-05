import Head from 'next/head';
import SearchBar from '../components/SearchBar'
import TableHeader from '../components/TableHeader';
import CoinList from '../components/CoinList';
import BitCoin from './coins/bitcoin';

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
        <SearchBar type='text' placeholder='Search' onChange={handleChange} />
        <TableHeader />
        <CoinList coinsData={filteredCoins} />
        <BitCoin />
      </div>
      </header>
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1&sparkline=false&price_change_percentage=1h%2C24%2C7d`);

  const coinsData = await res.json();

  return {
    props: {
      coinsData
    }
  }

  

}