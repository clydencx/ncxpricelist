import styles from '../styles/Coins.module.css'
const Coins = ({ name, id, price, symbol, marketcap, volume, image, priceChange, high24, low24 }) => {
    return (
        <div className={styles.coin__container}>
            <div className={styles.coin__row}>
                <div className={styles.coin__data}>
                    <p className={styles.coin__symbol}>{symbol} /USD </p>
                    <p className={styles.coin__price}>{price}</p>
                    {priceChange < 0 ? (
                        <p className={styles.coin__percent, styles.red}>{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className={styles.coin__percent, styles.green}>{priceChange.toFixed(2)}%</p>
                    )}
                    <p className={styles.coin__high_24}>{high24}</p>
                    <p className={styles.coin__low_24}>{low24}</p>
                </div>
            </div>
        </div>
        
    )
}
export default Coins