import styles from '../../styles/Coins.module.css'

import { useState, useEffect } from 'react'

function Fantom() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=fantom&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24%2C7d').then((res) => res.json()).then((data) => {
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
                                <p className={styles.coin__symbol}>{item.symbol} / <span style={{color: "gray"}}>USD</span> </p>
                                <p className={styles.coin__price}>{item.current_price.toFixed(2)}</p>
                                {item.price_change_percentage_24h < 0 ? (
                                    <p className={styles.red}>{item.price_change_percentage_24h.toFixed(2)}%</p>
                                ) : (
                                    <p className={styles.green}>{item.price_change_percentage_24h.toFixed(2)}%</p>
                                )}
                                <p className={styles.coin__high_24}>{item.high_24h}</p>
                                <p className={styles.coin__low_24}>{item.low_24h}</p>
                                <p className={styles.coin__low_24}><svg width="95" height="30"><defs><linearGradient id="area-gradientSEELEUSDT#007dff" x2="1" y2="1"><stop offset="10%" stop-color="#007dff" stop-opacity="0.01"></stop><stop offset="100%" stop-color="#007dff" stop-opacity="0.5"></stop></linearGradient></defs><path d="M0,2.511000000000043L0.6884057971014492,4.370750000000031C1.3768115942028984,6.23050000000002,2.753623188405797,9.949999999999994,4.130434782608695,11.809749999999985C5.507246376811594,13.669499999999971,6.884057971014492,13.669499999999971,8.26086956521739,12.975499999999974C9.63768115942029,12.281499999999978,11.014492753623188,10.893499999999984,12.391304347826086,10.089999999999986C13.768115942028984,9.286499999999988,15.144927536231883,9.067499999999988,16.52173913043478,10.443999999999985C17.89855072463768,11.820499999999981,19.27536231884058,14.792499999999976,20.652173913043477,16.247499999999985C22.028985507246375,17.70249999999999,23.40579710144927,17.640500000000014,24.782608695652172,19.083250000000007C26.159420289855074,20.526,27.53623188405797,23.473499999999962,28.91304347826087,25.089499999999948C30.28985507246377,26.70549999999993,31.666666666666668,26.989999999999934,33.04347826086956,26.715249999999937C34.42028985507246,26.440499999999943,35.79710144927537,25.606499999999954,37.17391304347826,24.95724999999995C38.550724637681164,24.307999999999947,39.927536231884055,23.84349999999993,41.30434782608695,23.443999999999942C42.68115942028985,23.044499999999953,44.05797101449275,22.70999999999999,45.43478260869565,23.56349999999999C46.811594202898554,24.41699999999999,48.188405797101446,26.45849999999997,49.565217391304344,27.284249999999957C50.94202898550724,28.109999999999957,52.31884057971015,27.71999999999997,53.69565217391304,27.53624999999998C55.07246376811594,27.35249999999999,56.44927536231884,27.374999999999982,57.82608695652174,27.447999999999983C59.20289855072465,27.520999999999983,60.57971014492754,27.644499999999983,61.95652173913044,27.80599999999998C63.333333333333336,27.967499999999973,64.71014492753623,28.16699999999996,66.08695652173913,28.224999999999966C67.46376811594202,28.282999999999962,68.84057971014492,28.199499999999983,70.21739130434783,25.632499999999993C71.59420289855073,23.0655,72.97101449275362,18.014999999999997,74.34782608695652,14.488999999999999C75.72463768115942,10.963000000000003,77.10144927536233,8.96150000000001,78.4782608695652,8.123500000000025C79.85507246376811,7.285500000000038,81.23188405797102,7.611000000000057,82.60869565217392,9.51375000000005C83.98550724637681,11.416500000000042,85.3623188405797,14.896500000000009,86.73913043478262,17.322749999999992C88.1159420289855,19.748999999999974,89.49275362318842,21.121499999999973,90.86956521739131,21.03274999999998C92.2463768115942,20.943999999999985,93.62318840579711,19.394000000000002,94.31159420289855,18.61900000000001L95,17.844000000000015L95,659.9999999999983L94.31159420289855,659.9999999999983C93.62318840579711,659.9999999999983,92.2463768115942,659.9999999999983,90.86956521739131,659.9999999999983C89.49275362318842,659.9999999999983,88.1159420289855,659.9999999999983,86.73913043478261,659.9999999999983C85.3623188405797,659.9999999999983,83.98550724637681,659.9999999999983,82.60869565217392,659.9999999999983C81.23188405797102,659.9999999999983,79.85507246376811,659.9999999999983,78.4782608695652,659.9999999999983C77.10144927536233,659.9999999999983,75.72463768115942,659.9999999999983,74.34782608695653,659.9999999999983C72.97101449275362,659.9999999999983,71.59420289855073,659.9999999999983,70.21739130434783,659.9999999999983C68.84057971014492,659.9999999999983,67.46376811594202,659.9999999999983,66.08695652173913,659.9999999999983C64.71014492753623,659.9999999999983,63.333333333333336,659.9999999999983,61.95652173913044,659.9999999999983C60.57971014492754,659.9999999999983,59.20289855072465,659.9999999999983,57.82608695652174,659.9999999999983C56.44927536231884,659.9999999999983,55.07246376811594,659.9999999999983,53.69565217391304,659.9999999999983C52.31884057971015,659.9999999999983,50.94202898550724,659.9999999999983,49.565217391304344,659.9999999999983C48.188405797101446,659.9999999999983,46.811594202898554,659.9999999999983,45.434782608695656,659.9999999999983C44.05797101449275,659.9999999999983,42.68115942028985,659.9999999999983,41.30434782608696,659.9999999999983C39.927536231884055,659.9999999999983,38.550724637681164,659.9999999999983,37.17391304347826,659.9999999999983C35.79710144927537,659.9999999999983,34.42028985507246,659.9999999999983,33.04347826086956,659.9999999999983C31.666666666666668,659.9999999999983,30.28985507246377,659.9999999999983,28.913043478260875,659.9999999999983C27.53623188405797,659.9999999999983,26.159420289855074,659.9999999999983,24.782608695652172,659.9999999999983C23.40579710144927,659.9999999999983,22.028985507246375,659.9999999999983,20.652173913043477,659.9999999999983C19.27536231884058,659.9999999999983,17.89855072463768,659.9999999999983,16.52173913043478,659.9999999999983C15.144927536231883,659.9999999999983,13.768115942028984,659.9999999999983,12.391304347826086,659.9999999999983C11.014492753623188,659.9999999999983,9.63768115942029,659.9999999999983,8.26086956521739,659.9999999999983C6.884057971014492,659.9999999999983,5.507246376811594,659.9999999999983,4.130434782608695,659.9999999999983C2.753623188405797,659.9999999999983,1.3768115942028984,659.9999999999983,0.6884057971014492,659.9999999999983L0,659.9999999999983Z" fill="url(#area-gradientSEELEUSDT#007dff)" class="strokePath"></path><path d="M0,2.511000000000043L0.6884057971014492,4.370750000000031C1.3768115942028984,6.23050000000002,2.753623188405797,9.949999999999994,4.130434782608695,11.809749999999985C5.507246376811594,13.669499999999971,6.884057971014492,13.669499999999971,8.26086956521739,12.975499999999974C9.63768115942029,12.281499999999978,11.014492753623188,10.893499999999984,12.391304347826086,10.089999999999986C13.768115942028984,9.286499999999988,15.144927536231883,9.067499999999988,16.52173913043478,10.443999999999985C17.89855072463768,11.820499999999981,19.27536231884058,14.792499999999976,20.652173913043477,16.247499999999985C22.028985507246375,17.70249999999999,23.40579710144927,17.640500000000014,24.782608695652172,19.083250000000007C26.159420289855074,20.526,27.53623188405797,23.473499999999962,28.91304347826087,25.089499999999948C30.28985507246377,26.70549999999993,31.666666666666668,26.989999999999934,33.04347826086956,26.715249999999937C34.42028985507246,26.440499999999943,35.79710144927537,25.606499999999954,37.17391304347826,24.95724999999995C38.550724637681164,24.307999999999947,39.927536231884055,23.84349999999993,41.30434782608695,23.443999999999942C42.68115942028985,23.044499999999953,44.05797101449275,22.70999999999999,45.43478260869565,23.56349999999999C46.811594202898554,24.41699999999999,48.188405797101446,26.45849999999997,49.565217391304344,27.284249999999957C50.94202898550724,28.109999999999957,52.31884057971015,27.71999999999997,53.69565217391304,27.53624999999998C55.07246376811594,27.35249999999999,56.44927536231884,27.374999999999982,57.82608695652174,27.447999999999983C59.20289855072465,27.520999999999983,60.57971014492754,27.644499999999983,61.95652173913044,27.80599999999998C63.333333333333336,27.967499999999973,64.71014492753623,28.16699999999996,66.08695652173913,28.224999999999966C67.46376811594202,28.282999999999962,68.84057971014492,28.199499999999983,70.21739130434783,25.632499999999993C71.59420289855073,23.0655,72.97101449275362,18.014999999999997,74.34782608695652,14.488999999999999C75.72463768115942,10.963000000000003,77.10144927536233,8.96150000000001,78.4782608695652,8.123500000000025C79.85507246376811,7.285500000000038,81.23188405797102,7.611000000000057,82.60869565217392,9.51375000000005C83.98550724637681,11.416500000000042,85.3623188405797,14.896500000000009,86.73913043478262,17.322749999999992C88.1159420289855,19.748999999999974,89.49275362318842,21.121499999999973,90.86956521739131,21.03274999999998C92.2463768115942,20.943999999999985,93.62318840579711,19.394000000000002,94.31159420289855,18.61900000000001L95,17.844000000000015" stroke="#007dff" fill="transparent" stroke-width="1" class="strokePath"></path></svg></p>
                                <p className={styles.coin__low_24}><div className={styles.buybuttons}>
                                <button className={styles.btn_buy}>Buy</button><button className={styles.btn_trade}>Trade</button></div></p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Fantom

