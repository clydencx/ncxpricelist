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
                        <p>Name</p>
                        <p style={{width: "110px"}}>Price</p>
                        <p>24h%</p>
                        <p>Market Cap <FontAwesomeIcon icon={faCircleDollarToSlot} /></p>
                        <p>Volume(24h) <FontAwesomeIcon icon={faChartColumn} /></p>
                        <p>Chart</p>
                        {/* <p>Action</p> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TableHeader