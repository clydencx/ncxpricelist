// import styles from '../styles/Coins.module.css'

export async function getStaticProps() {

    const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24%2C7d
    `);

    const data = await res.json();

    return {
        props: {
            bitdatas: data
        }
    }
}
const BitCoin = ({ bitdatas }) => {
    return(
        <div>
            <div>
                <div>
                    {bitdatas.map(bitdata => {
                        return (
                            <div>{bitdata.name}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BitCoin;