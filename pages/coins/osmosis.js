import styles from '../../styles/Coins.module.css'

import { useState, useEffect } from 'react'

function Osmosis() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=osmosis&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24%2C7d').then((res) => res.json()).then((data) => {
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
                                <img className={styles.coin_logo} src="https://assets.coingecko.com/coins/images/16724/large/osmo.png" />
                                <p className={styles.coin__symbol}>{item.name} <span className={styles.symbol_span}>{item.symbol}</span> </p>
                            </div>
                                <p className={styles.coin__price}>${item.current_price.toLocaleString('en')}</p>
                                {item.price_change_percentage_24h < 0 ? (
                                    <p className={styles.red}>{item.price_change_percentage_24h.toFixed(2)}%</p>
                                ) : (
                                    <p className={styles.green}>+{item.price_change_percentage_24h.toFixed(2)}%</p>
                                )}
                                <p className={styles.coin__high_24}>${item.market_cap.toLocaleString()}</p>
                                <p className={styles.coin__low_24}>${item.total_volume.toLocaleString()}</p>
                                <div className={styles.coin__innerrow}>
                                <p className={styles.coin__graph}><svg width="95" height="30"><defs><linearGradient id="area-gradientJEWELUSDT#007dff" x2="1" y2="1"><stop offset="10%" stop-color="#007dff" stop-opacity="0.01"></stop><stop offset="100%" stop-color="#007dff" stop-opacity="0.5"></stop></linearGradient></defs><path d="M0,0.10249999999998205L0.6884057971014492,4.681583333333319C1.3768115942028984,9.260666666666657,2.753623188405797,18.418833333333332,4.130434782608695,22.99791666666667C5.507246376811594,27.57700000000001,6.884057971014492,27.57700000000001,8.26086956521739,27.577C9.63768115942029,27.57700000000001,11.014492753623188,27.57700000000001,12.391304347826086,27.577C13.768115942028984,27.57700000000001,15.144927536231883,27.57700000000001,16.52173913043478,27.577C17.89855072463768,27.57700000000001,19.27536231884058,27.57700000000001,20.652173913043477,27.577C22.028985507246375,27.57700000000001,23.40579710144927,27.57700000000001,24.782608695652172,27.577C26.159420289855074,27.57700000000001,27.53623188405797,27.57700000000001,28.91304347826087,27.577C30.28985507246377,27.57700000000001,31.666666666666668,27.57700000000001,33.04347826086956,27.577C34.42028985507246,27.57700000000001,35.79710144927537,27.57700000000001,37.17391304347826,27.577C38.550724637681164,27.57700000000001,39.927536231884055,27.57700000000001,41.30434782608695,27.577C42.68115942028985,27.57700000000001,44.05797101449275,27.57700000000001,45.43478260869565,27.577C46.811594202898554,27.57700000000001,48.188405797101446,27.57700000000001,49.565217391304344,27.577C50.94202898550724,27.57700000000001,52.31884057971015,27.57700000000001,53.69565217391304,27.577C55.07246376811594,27.57700000000001,56.44927536231884,27.57700000000001,57.82608695652174,27.577C59.20289855072465,27.57700000000001,60.57971014492754,27.57700000000001,61.95652173913044,27.577C63.333333333333336,27.57700000000001,64.71014492753623,27.57700000000001,66.08695652173913,27.577C67.46376811594202,27.57700000000001,68.84057971014492,27.57700000000001,70.21739130434783,27.577C71.59420289855073,27.57700000000001,72.97101449275362,27.57700000000001,74.34782608695652,27.577C75.72463768115942,27.57700000000001,77.10144927536233,27.57700000000001,78.4782608695652,27.577C79.85507246376811,27.57700000000001,81.23188405797102,27.57700000000001,82.60869565217392,27.89791666666667C83.98550724637681,28.21883333333334,85.3623188405797,28.860666666666674,86.73913043478262,29.181583333333336C88.1159420289855,29.50250000000001,89.49275362318842,29.50250000000001,90.86956521739131,29.5025C92.2463768115942,29.50250000000001,93.62318840579711,29.50250000000001,94.31159420289855,29.5025L95,29.502500000000005L95,212.49999999999997L94.31159420289855,212.49999999999997C93.62318840579711,212.49999999999997,92.2463768115942,212.49999999999997,90.86956521739131,212.49999999999997C89.49275362318842,212.49999999999997,88.1159420289855,212.49999999999997,86.73913043478261,212.49999999999997C85.3623188405797,212.49999999999997,83.98550724637681,212.49999999999997,82.60869565217392,212.49999999999997C81.23188405797102,212.49999999999997,79.85507246376811,212.49999999999997,78.4782608695652,212.49999999999997C77.10144927536233,212.49999999999997,75.72463768115942,212.49999999999997,74.34782608695653,212.49999999999997C72.97101449275362,212.49999999999997,71.59420289855073,212.49999999999997,70.21739130434783,212.49999999999997C68.84057971014492,212.49999999999997,67.46376811594202,212.49999999999997,66.08695652173913,212.49999999999997C64.71014492753623,212.49999999999997,63.333333333333336,212.49999999999997,61.95652173913044,212.49999999999997C60.57971014492754,212.49999999999997,59.20289855072465,212.49999999999997,57.82608695652174,212.49999999999997C56.44927536231884,212.49999999999997,55.07246376811594,212.49999999999997,53.69565217391304,212.49999999999997C52.31884057971015,212.49999999999997,50.94202898550724,212.49999999999997,49.565217391304344,212.49999999999997C48.188405797101446,212.49999999999997,46.811594202898554,212.49999999999997,45.434782608695656,212.49999999999997C44.05797101449275,212.49999999999997,42.68115942028985,212.49999999999997,41.30434782608696,212.49999999999997C39.927536231884055,212.49999999999997,38.550724637681164,212.49999999999997,37.17391304347826,212.49999999999997C35.79710144927537,212.49999999999997,34.42028985507246,212.49999999999997,33.04347826086956,212.49999999999997C31.666666666666668,212.49999999999997,30.28985507246377,212.49999999999997,28.913043478260875,212.49999999999997C27.53623188405797,212.49999999999997,26.159420289855074,212.49999999999997,24.782608695652172,212.49999999999997C23.40579710144927,212.49999999999997,22.028985507246375,212.49999999999997,20.652173913043477,212.49999999999997C19.27536231884058,212.49999999999997,17.89855072463768,212.49999999999997,16.52173913043478,212.49999999999997C15.144927536231883,212.49999999999997,13.768115942028984,212.49999999999997,12.391304347826086,212.49999999999997C11.014492753623188,212.49999999999997,9.63768115942029,212.49999999999997,8.26086956521739,212.49999999999997C6.884057971014492,212.49999999999997,5.507246376811594,212.49999999999997,4.130434782608695,212.49999999999997C2.753623188405797,212.49999999999997,1.3768115942028984,212.49999999999997,0.6884057971014492,212.49999999999997L0,212.49999999999997Z" fill="url(#area-gradientJEWELUSDT#007dff)" class="strokePath"></path><path d="M0,0.10249999999998205L0.6884057971014492,4.681583333333319C1.3768115942028984,9.260666666666657,2.753623188405797,18.418833333333332,4.130434782608695,22.99791666666667C5.507246376811594,27.57700000000001,6.884057971014492,27.57700000000001,8.26086956521739,27.577C9.63768115942029,27.57700000000001,11.014492753623188,27.57700000000001,12.391304347826086,27.577C13.768115942028984,27.57700000000001,15.144927536231883,27.57700000000001,16.52173913043478,27.577C17.89855072463768,27.57700000000001,19.27536231884058,27.57700000000001,20.652173913043477,27.577C22.028985507246375,27.57700000000001,23.40579710144927,27.57700000000001,24.782608695652172,27.577C26.159420289855074,27.57700000000001,27.53623188405797,27.57700000000001,28.91304347826087,27.577C30.28985507246377,27.57700000000001,31.666666666666668,27.57700000000001,33.04347826086956,27.577C34.42028985507246,27.57700000000001,35.79710144927537,27.57700000000001,37.17391304347826,27.577C38.550724637681164,27.57700000000001,39.927536231884055,27.57700000000001,41.30434782608695,27.577C42.68115942028985,27.57700000000001,44.05797101449275,27.57700000000001,45.43478260869565,27.577C46.811594202898554,27.57700000000001,48.188405797101446,27.57700000000001,49.565217391304344,27.577C50.94202898550724,27.57700000000001,52.31884057971015,27.57700000000001,53.69565217391304,27.577C55.07246376811594,27.57700000000001,56.44927536231884,27.57700000000001,57.82608695652174,27.577C59.20289855072465,27.57700000000001,60.57971014492754,27.57700000000001,61.95652173913044,27.577C63.333333333333336,27.57700000000001,64.71014492753623,27.57700000000001,66.08695652173913,27.577C67.46376811594202,27.57700000000001,68.84057971014492,27.57700000000001,70.21739130434783,27.577C71.59420289855073,27.57700000000001,72.97101449275362,27.57700000000001,74.34782608695652,27.577C75.72463768115942,27.57700000000001,77.10144927536233,27.57700000000001,78.4782608695652,27.577C79.85507246376811,27.57700000000001,81.23188405797102,27.57700000000001,82.60869565217392,27.89791666666667C83.98550724637681,28.21883333333334,85.3623188405797,28.860666666666674,86.73913043478262,29.181583333333336C88.1159420289855,29.50250000000001,89.49275362318842,29.50250000000001,90.86956521739131,29.5025C92.2463768115942,29.50250000000001,93.62318840579711,29.50250000000001,94.31159420289855,29.5025L95,29.502500000000005" stroke="#007dff" fill="transparent" stroke-width="1" class="strokePath"></path></svg></p>
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

export default Osmosis

