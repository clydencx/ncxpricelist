import styles from '../styles/Searchbar.module.css';

const Searhbar = ({ ...rest }) => {
    return (
        <div className={styles.coin__search}>
            <input className={styles.coin__input} {...rest} />
        </div>
    )
}

export default Searhbar