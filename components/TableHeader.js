import styles from '../styles/Coins.module.css'
import Coins from './Coins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDollarToSlot, faChartColumn } from '@fortawesome/free-solid-svg-icons'

const TableHeader = ({ coinsData }) => {
    return (
        <>
            <div className={styles.header__container}>
                <div className={styles.header__row}>
                    <div className={styles.coin__data_p}>
                        <p className={styles.header__name}>Name</p>
                        <p className={styles.header__price}>Price</p>
                        <p className={styles.header__24h}>24h%</p>
                        <p className={styles.header__marketcap}>Market Cap <FontAwesomeIcon icon={faCircleDollarToSlot} /></p>
                        <p className={styles.header__volume}>Volume(24h) <FontAwesomeIcon icon={faChartColumn} /></p>
                        <p className={styles.header__chart}>Chart</p>
                        {/* <p>Action</p> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TableHeader