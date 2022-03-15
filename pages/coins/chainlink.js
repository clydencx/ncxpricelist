import styles from '../../styles/Coins.module.css'

import { useState, useEffect } from 'react'

function ChainLink() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=chainlink&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24%2C7d').then((res) => res.json()).then((data) => {
            setData(data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <>
            {
                data.map((item) => (
                    <div key={item.id} className={styles.coin__container}>
                        <div className={styles.coin__row}>
                            <div className={styles.coin__data}>
                            <div className={styles.icons_sym}>
                                <img className={styles.coin_logo} src="/icons/chain.png" />
                                <p className={styles.coin__symbol}>{item.symbol} / <span style={{color: "gray"}}>USD</span> </p>
                            </div>
                                <p className={styles.coin__price}>{item.current_price.toFixed(2)}</p>
                                {item.price_change_percentage_24h < 0 ? (
                                    <p className={styles.red}>{item.price_change_percentage_24h.toFixed(2)}%</p>
                                ) : (
                                    <p className={styles.green}>{item.price_change_percentage_24h.toFixed(2)}%</p>
                                )}
                                <p className={styles.coin__high_24}>{item.high_24h}</p>
                                <p className={styles.coin__low_24}>{item.low_24h}</p>
                                <div className={styles.coin__innerrow}>
                                <p className={styles.coin__graph}><svg width="95" height="30"><defs><linearGradient id="area-gradientPHAEUSDT#007dff" x2="1" y2="1"><stop offset="10%" stop-color="#007dff" stop-opacity="0.01"></stop><stop offset="100%" stop-color="#007dff" stop-opacity="0.5"></stop></linearGradient></defs><path d="M0,24.66000000000003L0.6884057971014492,24.020000000000024C1.3768115942028984,23.380000000000024,2.753623188405797,22.10000000000002,4.130434782608695,22.687500000000018C5.507246376811594,23.275000000000016,6.884057971014492,25.730000000000018,8.26086956521739,25.867500000000017C9.63768115942029,26.005000000000013,11.014492753623188,23.825000000000006,12.391304347826086,21.297500000000007C13.768115942028984,18.770000000000003,15.144927536231883,15.894999999999998,16.52173913043478,16.86C17.89855072463768,17.825000000000003,19.27536231884058,22.63000000000001,20.652173913043477,23.497500000000013C22.028985507246375,24.36500000000001,23.40579710144927,21.295000000000005,24.782608695652172,19.142500000000002C26.159420289855074,16.99,27.53623188405797,15.755,28.91304347826087,14.109999999999998C30.28985507246377,12.464999999999998,31.666666666666668,10.409999999999995,33.04347826086956,12.12C34.42028985507246,13.830000000000004,35.79710144927537,19.30500000000001,37.17391304347826,21.300000000000015C38.550724637681164,23.29500000000002,39.927536231884055,21.81000000000002,41.30434782608695,22.00500000000002C42.68115942028985,22.20000000000002,44.05797101449275,24.075000000000028,45.43478260869565,24.502500000000023C46.811594202898554,24.93000000000002,48.188405797101446,23.91000000000001,49.565217391304344,22.45250000000001C50.94202898550724,20.995000000000008,52.31884057971015,19.100000000000012,53.69565217391304,20.075000000000014C55.07246376811594,21.050000000000008,56.44927536231884,24.895,57.82608695652174,26.1375C59.20289855072465,27.38,60.57971014492754,26.020000000000014,61.95652173913044,25.925000000000022C63.333333333333336,25.830000000000023,64.71014492753623,27.00000000000001,66.08695652173913,26.630000000000006C67.46376811594202,26.260000000000005,68.84057971014492,24.35000000000001,70.21739130434783,20.090000000000007C71.59420289855073,15.830000000000004,72.97101449275362,9.219999999999997,74.34782608695652,7.329999999999994C75.72463768115942,5.43999999999999,77.10144927536233,8.26999999999999,78.4782608695652,8.674999999999992C79.85507246376811,9.079999999999997,81.23188405797102,7.06,82.60869565217392,5.797499999999999C83.98550724637681,4.534999999999999,85.3623188405797,4.029999999999993,86.73913043478262,5.947499999999991C88.1159420289855,7.864999999999987,89.49275362318842,12.204999999999984,90.86956521739131,14.612499999999988C92.2463768115942,17.019999999999985,93.62318840579711,17.49499999999999,94.31159420289855,17.73249999999999L95,17.96999999999999L95,369.00000000000017L94.31159420289855,369.00000000000017C93.62318840579711,369.00000000000017,92.2463768115942,369.00000000000017,90.86956521739131,369.00000000000017C89.49275362318842,369.00000000000017,88.1159420289855,369.00000000000017,86.73913043478261,369.00000000000017C85.3623188405797,369.00000000000017,83.98550724637681,369.00000000000017,82.60869565217392,369.00000000000017C81.23188405797102,369.00000000000017,79.85507246376811,369.00000000000017,78.4782608695652,369.00000000000017C77.10144927536233,369.00000000000017,75.72463768115942,369.00000000000017,74.34782608695653,369.00000000000017C72.97101449275362,369.00000000000017,71.59420289855073,369.00000000000017,70.21739130434783,369.00000000000017C68.84057971014492,369.00000000000017,67.46376811594202,369.00000000000017,66.08695652173913,369.00000000000017C64.71014492753623,369.00000000000017,63.333333333333336,369.00000000000017,61.95652173913044,369.00000000000017C60.57971014492754,369.00000000000017,59.20289855072465,369.00000000000017,57.82608695652174,369.00000000000017C56.44927536231884,369.00000000000017,55.07246376811594,369.00000000000017,53.69565217391304,369.00000000000017C52.31884057971015,369.00000000000017,50.94202898550724,369.00000000000017,49.565217391304344,369.00000000000017C48.188405797101446,369.00000000000017,46.811594202898554,369.00000000000017,45.434782608695656,369.00000000000017C44.05797101449275,369.00000000000017,42.68115942028985,369.00000000000017,41.30434782608696,369.00000000000017C39.927536231884055,369.00000000000017,38.550724637681164,369.00000000000017,37.17391304347826,369.00000000000017C35.79710144927537,369.00000000000017,34.42028985507246,369.00000000000017,33.04347826086956,369.00000000000017C31.666666666666668,369.00000000000017,30.28985507246377,369.00000000000017,28.913043478260875,369.00000000000017C27.53623188405797,369.00000000000017,26.159420289855074,369.00000000000017,24.782608695652172,369.00000000000017C23.40579710144927,369.00000000000017,22.028985507246375,369.00000000000017,20.652173913043477,369.00000000000017C19.27536231884058,369.00000000000017,17.89855072463768,369.00000000000017,16.52173913043478,369.00000000000017C15.144927536231883,369.00000000000017,13.768115942028984,369.00000000000017,12.391304347826086,369.00000000000017C11.014492753623188,369.00000000000017,9.63768115942029,369.00000000000017,8.26086956521739,369.00000000000017C6.884057971014492,369.00000000000017,5.507246376811594,369.00000000000017,4.130434782608695,369.00000000000017C2.753623188405797,369.00000000000017,1.3768115942028984,369.00000000000017,0.6884057971014492,369.00000000000017L0,369.00000000000017Z" fill="url(#area-gradientPHAEUSDT#007dff)" class="strokePath"></path><path d="M0,24.66000000000003L0.6884057971014492,24.020000000000024C1.3768115942028984,23.380000000000024,2.753623188405797,22.10000000000002,4.130434782608695,22.687500000000018C5.507246376811594,23.275000000000016,6.884057971014492,25.730000000000018,8.26086956521739,25.867500000000017C9.63768115942029,26.005000000000013,11.014492753623188,23.825000000000006,12.391304347826086,21.297500000000007C13.768115942028984,18.770000000000003,15.144927536231883,15.894999999999998,16.52173913043478,16.86C17.89855072463768,17.825000000000003,19.27536231884058,22.63000000000001,20.652173913043477,23.497500000000013C22.028985507246375,24.36500000000001,23.40579710144927,21.295000000000005,24.782608695652172,19.142500000000002C26.159420289855074,16.99,27.53623188405797,15.755,28.91304347826087,14.109999999999998C30.28985507246377,12.464999999999998,31.666666666666668,10.409999999999995,33.04347826086956,12.12C34.42028985507246,13.830000000000004,35.79710144927537,19.30500000000001,37.17391304347826,21.300000000000015C38.550724637681164,23.29500000000002,39.927536231884055,21.81000000000002,41.30434782608695,22.00500000000002C42.68115942028985,22.20000000000002,44.05797101449275,24.075000000000028,45.43478260869565,24.502500000000023C46.811594202898554,24.93000000000002,48.188405797101446,23.91000000000001,49.565217391304344,22.45250000000001C50.94202898550724,20.995000000000008,52.31884057971015,19.100000000000012,53.69565217391304,20.075000000000014C55.07246376811594,21.050000000000008,56.44927536231884,24.895,57.82608695652174,26.1375C59.20289855072465,27.38,60.57971014492754,26.020000000000014,61.95652173913044,25.925000000000022C63.333333333333336,25.830000000000023,64.71014492753623,27.00000000000001,66.08695652173913,26.630000000000006C67.46376811594202,26.260000000000005,68.84057971014492,24.35000000000001,70.21739130434783,20.090000000000007C71.59420289855073,15.830000000000004,72.97101449275362,9.219999999999997,74.34782608695652,7.329999999999994C75.72463768115942,5.43999999999999,77.10144927536233,8.26999999999999,78.4782608695652,8.674999999999992C79.85507246376811,9.079999999999997,81.23188405797102,7.06,82.60869565217392,5.797499999999999C83.98550724637681,4.534999999999999,85.3623188405797,4.029999999999993,86.73913043478262,5.947499999999991C88.1159420289855,7.864999999999987,89.49275362318842,12.204999999999984,90.86956521739131,14.612499999999988C92.2463768115942,17.019999999999985,93.62318840579711,17.49499999999999,94.31159420289855,17.73249999999999L95,17.96999999999999" stroke="#007dff" fill="transparent" stroke-width="1" class="strokePath"></path></svg></p>
                                <button className={styles.btn_buy}>Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default ChainLink

