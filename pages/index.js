import Head from 'next/head';
import SearchBar from '../components/SearchBar'
import CoinList from '../components/CoinList';

export default function Home({ coinsData }) {
  console.log(coinsData);
  return (
    <>
      <Head>
        <title>Price List</title>
        <meta name="description" content="NCX Price List" />
        <link rel="icon" href="/ncx.ico" />
      </Head>
      <div className='coin__app'>
        <SearchBar type='text' placeholder='Search' />
        <CoinList coinsData={coinsData} />
      </div>
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