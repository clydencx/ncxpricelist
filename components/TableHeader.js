import styles from '../styles/Coins.module.css'
import Coins from './Coins';

const TableHeader = ({ coinsData }) => {
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
        </>
    )
}

export default TableHeader