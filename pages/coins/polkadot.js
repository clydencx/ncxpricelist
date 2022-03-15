import styles from '../../styles/Coins.module.css'

import { useState, useEffect } from 'react'

function Polkadot() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=polkadot&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24%2C7d').then((res) => res.json()).then((data) => {
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
                                <div className={styles.coin__innerrow}>
                                <p className={styles.coin__graph}><svg width="95" height="30"><defs><linearGradient id="area-gradientMSUUSDT#007dff" x2="1" y2="1"><stop offset="10%" stop-color="#007dff" stop-opacity="0.01"></stop><stop offset="100%" stop-color="#007dff" stop-opacity="0.5"></stop></linearGradient></defs><path d="M0,9.297000000000015L0.6884057971014492,10.1865C1.3768115942028984,11.075999999999988,2.753623188405797,12.854999999999961,4.130434782608695,12.734499999999947C5.507246376811594,12.613999999999935,6.884057971014492,10.593999999999939,8.26086956521739,8.63299999999995C9.63768115942029,6.6719999999999615,11.014492753623188,4.769999999999981,12.391304347826086,4.859999999999993C13.768115942028984,4.9500000000000055,15.144927536231883,7.032000000000011,16.52173913043478,9.002499999999996C17.89855072463768,10.97299999999998,19.27536231884058,12.831999999999942,20.652173913043477,14.958499999999928C22.028985507246375,17.084999999999912,23.40579710144927,19.478999999999917,24.782608695652172,21.293999999999926C26.159420289855074,23.108999999999938,27.53623188405797,24.344999999999953,28.91304347826087,24.86349999999995C30.28985507246377,25.381999999999948,31.666666666666668,25.182999999999932,33.04347826086956,24.745499999999932C34.42028985507246,24.307999999999932,35.79710144927537,23.631999999999945,37.17391304347826,23.226499999999948C38.550724637681164,22.82099999999996,39.927536231884055,22.685999999999964,41.30434782608695,21.497999999999976C42.68115942028985,20.309999999999988,44.05797101449275,18.069000000000006,45.43478260869565,17.22500000000001C46.811594202898554,16.38100000000001,48.188405797101446,16.933999999999994,49.565217391304344,16.713499999999993C50.94202898550724,16.49299999999999,52.31884057971015,15.499000000000004,53.69565217391304,14.2645C55.07246376811594,13.029999999999996,56.44927536231884,11.55499999999997,57.82608695652174,11.729499999999959C59.20289855072465,11.903999999999948,60.57971014492754,13.727999999999952,61.95652173913044,15.327999999999951C63.333333333333336,16.92799999999995,64.71014492753623,18.30399999999995,66.08695652173913,20.53999999999994C67.46376811594202,22.77599999999993,68.84057971014492,25.871999999999915,70.21739130434783,25.227999999999913C71.59420289855073,24.583999999999918,72.97101449275362,20.199999999999932,74.34782608695652,17.430499999999956C75.72463768115942,14.660999999999978,77.10144927536233,13.506000000000006,78.4782608695652,13.401500000000008C79.85507246376811,13.297000000000013,81.23188405797102,14.242999999999993,82.60869565217392,15.060999999999977C83.98550724637681,15.878999999999962,85.3623188405797,16.568999999999953,86.73913043478262,17.79749999999994C88.1159420289855,19.025999999999925,89.49275362318842,20.79299999999991,90.86956521739131,19.697499999999906C92.2463768115942,18.6019999999999,93.62318840579711,14.643999999999911,94.31159420289855,12.664999999999914L95,10.685999999999918L95,875.9999999999992L94.31159420289855,875.9999999999992C93.62318840579711,875.9999999999992,92.2463768115942,875.9999999999992,90.86956521739131,875.9999999999992C89.49275362318842,875.9999999999992,88.1159420289855,875.9999999999992,86.73913043478261,875.9999999999992C85.3623188405797,875.9999999999992,83.98550724637681,875.9999999999992,82.60869565217392,875.9999999999992C81.23188405797102,875.9999999999992,79.85507246376811,875.9999999999992,78.4782608695652,875.9999999999992C77.10144927536233,875.9999999999992,75.72463768115942,875.9999999999992,74.34782608695653,875.9999999999992C72.97101449275362,875.9999999999992,71.59420289855073,875.9999999999992,70.21739130434783,875.9999999999992C68.84057971014492,875.9999999999992,67.46376811594202,875.9999999999992,66.08695652173913,875.9999999999992C64.71014492753623,875.9999999999992,63.333333333333336,875.9999999999992,61.95652173913044,875.9999999999992C60.57971014492754,875.9999999999992,59.20289855072465,875.9999999999992,57.82608695652174,875.9999999999992C56.44927536231884,875.9999999999992,55.07246376811594,875.9999999999992,53.69565217391304,875.9999999999992C52.31884057971015,875.9999999999992,50.94202898550724,875.9999999999992,49.565217391304344,875.9999999999992C48.188405797101446,875.9999999999992,46.811594202898554,875.9999999999992,45.434782608695656,875.9999999999992C44.05797101449275,875.9999999999992,42.68115942028985,875.9999999999992,41.30434782608696,875.9999999999992C39.927536231884055,875.9999999999992,38.550724637681164,875.9999999999992,37.17391304347826,875.9999999999992C35.79710144927537,875.9999999999992,34.42028985507246,875.9999999999992,33.04347826086956,875.9999999999992C31.666666666666668,875.9999999999992,30.28985507246377,875.9999999999992,28.913043478260875,875.9999999999992C27.53623188405797,875.9999999999992,26.159420289855074,875.9999999999992,24.782608695652172,875.9999999999992C23.40579710144927,875.9999999999992,22.028985507246375,875.9999999999992,20.652173913043477,875.9999999999992C19.27536231884058,875.9999999999992,17.89855072463768,875.9999999999992,16.52173913043478,875.9999999999992C15.144927536231883,875.9999999999992,13.768115942028984,875.9999999999992,12.391304347826086,875.9999999999992C11.014492753623188,875.9999999999992,9.63768115942029,875.9999999999992,8.26086956521739,875.9999999999992C6.884057971014492,875.9999999999992,5.507246376811594,875.9999999999992,4.130434782608695,875.9999999999992C2.753623188405797,875.9999999999992,1.3768115942028984,875.9999999999992,0.6884057971014492,875.9999999999992L0,875.9999999999992Z" fill="url(#area-gradientMSUUSDT#007dff)" class="strokePath"></path><path d="M0,9.297000000000015L0.6884057971014492,10.1865C1.3768115942028984,11.075999999999988,2.753623188405797,12.854999999999961,4.130434782608695,12.734499999999947C5.507246376811594,12.613999999999935,6.884057971014492,10.593999999999939,8.26086956521739,8.63299999999995C9.63768115942029,6.6719999999999615,11.014492753623188,4.769999999999981,12.391304347826086,4.859999999999993C13.768115942028984,4.9500000000000055,15.144927536231883,7.032000000000011,16.52173913043478,9.002499999999996C17.89855072463768,10.97299999999998,19.27536231884058,12.831999999999942,20.652173913043477,14.958499999999928C22.028985507246375,17.084999999999912,23.40579710144927,19.478999999999917,24.782608695652172,21.293999999999926C26.159420289855074,23.108999999999938,27.53623188405797,24.344999999999953,28.91304347826087,24.86349999999995C30.28985507246377,25.381999999999948,31.666666666666668,25.182999999999932,33.04347826086956,24.745499999999932C34.42028985507246,24.307999999999932,35.79710144927537,23.631999999999945,37.17391304347826,23.226499999999948C38.550724637681164,22.82099999999996,39.927536231884055,22.685999999999964,41.30434782608695,21.497999999999976C42.68115942028985,20.309999999999988,44.05797101449275,18.069000000000006,45.43478260869565,17.22500000000001C46.811594202898554,16.38100000000001,48.188405797101446,16.933999999999994,49.565217391304344,16.713499999999993C50.94202898550724,16.49299999999999,52.31884057971015,15.499000000000004,53.69565217391304,14.2645C55.07246376811594,13.029999999999996,56.44927536231884,11.55499999999997,57.82608695652174,11.729499999999959C59.20289855072465,11.903999999999948,60.57971014492754,13.727999999999952,61.95652173913044,15.327999999999951C63.333333333333336,16.92799999999995,64.71014492753623,18.30399999999995,66.08695652173913,20.53999999999994C67.46376811594202,22.77599999999993,68.84057971014492,25.871999999999915,70.21739130434783,25.227999999999913C71.59420289855073,24.583999999999918,72.97101449275362,20.199999999999932,74.34782608695652,17.430499999999956C75.72463768115942,14.660999999999978,77.10144927536233,13.506000000000006,78.4782608695652,13.401500000000008C79.85507246376811,13.297000000000013,81.23188405797102,14.242999999999993,82.60869565217392,15.060999999999977C83.98550724637681,15.878999999999962,85.3623188405797,16.568999999999953,86.73913043478262,17.79749999999994C88.1159420289855,19.025999999999925,89.49275362318842,20.79299999999991,90.86956521739131,19.697499999999906C92.2463768115942,18.6019999999999,93.62318840579711,14.643999999999911,94.31159420289855,12.664999999999914L95,10.685999999999918" stroke="#007dff" fill="transparent" stroke-width="1" class="strokePath"></path></svg></p>
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

export default Polkadot

