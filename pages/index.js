import Head from 'next/head';
import SearchBar from '../components/SearchBar'
import CoinList from '../components/CoinList';

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
        <SearchBar type='text' placeholder='Search' onChange={handleChange} />
        <CoinList coinsData={filteredCoins} />
      </div>
      </header>
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`);

  const coinsData = await res.json();

  return {
    props: {
      coinsData
    }
  }

}