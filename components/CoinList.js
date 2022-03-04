import styles from '../styles/Coins.module.css'
import Coins from './Coins';

const CoinList = ({ coinsData }) => {
    return (
        <>
         <div className={styles.coin__container}>
            <div className={styles.coin__row}>
                <div className={styles.coin__data_p}>
                    <p>Pair</p>
                    <p style={{width: "110px"}}>Last Price</p>
                    <p>24h Change</p>
                    <p>24h High</p>
                    <p>24h Low</p>
                    <p>Graph</p>
                    <p>Action</p>
                </div>
            </div>
        </div>
        
            {coinsData.map(coin => {
                return (
                    <Coins
                        key={coin.id}
                        name={coin.name}
                        id={coin.id}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketcap={coin.market_cap}
                        volume={coin.total_volume}
                        image={coin.image}
                        priceChange={coin.price_change_percentage_24h}
                        high24={coin.high_24h}
                        low24={coin.low_24h}
                    />
                )
            })}
        </>
    )
}

export default CoinList