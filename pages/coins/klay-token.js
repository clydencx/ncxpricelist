import styles from '../../styles/Coins.module.css'

import { useState, useEffect } from 'react'

function KlayToken() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=klay-token&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24%2C7d').then((res) => res.json()).then((data) => {
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
                                <img className={styles.coin_logo} src="https://assets.coingecko.com/coins/images/9672/large/klaytn.jpeg" />
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
                                <p className={styles.coin__graph}><svg width="95" height="30"><defs><linearGradient id="area-gradientGMEEUSDT#007dff" x2="1" y2="1"><stop offset="10%" stop-color="#007dff" stop-opacity="0.01"></stop><stop offset="100%" stop-color="#007dff" stop-opacity="0.5"></stop></linearGradient></defs><path d="M0,6.578999999999995L0.6884057971014492,6.787999999999996C1.3768115942028984,6.996999999999997,2.753623188405797,7.414999999999999,4.130434782608695,6.753499999999996C5.507246376811594,6.091999999999995,6.884057971014492,4.350999999999991,8.26086956521739,4.118499999999994C9.63768115942029,3.885999999999997,11.014492753623188,5.162000000000009,12.391304347826086,5.869000000000014C13.768115942028984,6.576000000000019,15.144927536231883,6.714000000000019,16.52173913043478,5.944000000000012C17.89855072463768,5.1740000000000075,19.27536231884058,3.495999999999997,20.652173913043477,3.951499999999994C22.028985507246375,4.406999999999991,23.40579710144927,6.995999999999996,24.782608695652172,8.387499999999998C26.159420289855074,9.779000000000002,27.53623188405797,9.973,28.91304347826087,10.735999999999999C30.28985507246377,11.498999999999997,31.666666666666668,12.830999999999996,33.04347826086956,14.382499999999993C34.42028985507246,15.933999999999989,35.79710144927537,17.704999999999984,37.17391304347826,17.365999999999985C38.550724637681164,17.026999999999987,39.927536231884055,14.577999999999994,41.30434782608695,13.809999999999997C42.68115942028985,13.042000000000002,44.05797101449275,13.954999999999998,45.43478260869565,14.259499999999997C46.811594202898554,14.563999999999995,48.188405797101446,14.259999999999996,49.565217391304344,15.478999999999992C50.94202898550724,16.69799999999999,52.31884057971015,19.43999999999998,53.69565217391304,20.87549999999998C55.07246376811594,22.31099999999998,56.44927536231884,22.43999999999998,57.82608695652174,22.440999999999985C59.20289855072465,22.441999999999982,60.57971014492754,22.314999999999984,61.95652173913044,23.398499999999984C63.333333333333336,24.48199999999998,64.71014492753623,26.775999999999982,66.08695652173913,27.719999999999985C67.46376811594202,28.663999999999984,68.84057971014492,28.25799999999998,70.21739130434783,27.79299999999998C71.59420289855073,27.327999999999978,72.97101449275362,26.803999999999984,74.34782608695652,26.994499999999988C75.72463768115942,27.18499999999999,77.10144927536233,28.089999999999993,78.4782608695652,27.89399999999999C79.85507246376811,27.69799999999999,81.23188405797102,26.400999999999982,82.60869565217392,26.330499999999983C83.98550724637681,26.25999999999998,85.3623188405797,27.415999999999986,86.73913043478262,27.699999999999985C88.1159420289855,27.983999999999984,89.49275362318842,27.395999999999976,90.86956521739131,27.422999999999977C92.2463768115942,27.449999999999978,93.62318840579711,28.09199999999998,94.31159420289855,28.412999999999982L95,28.733999999999984L95,335.9999999999997L94.31159420289855,335.9999999999997C93.62318840579711,335.9999999999997,92.2463768115942,335.9999999999997,90.86956521739131,335.9999999999997C89.49275362318842,335.9999999999997,88.1159420289855,335.9999999999997,86.73913043478261,335.9999999999997C85.3623188405797,335.9999999999997,83.98550724637681,335.9999999999997,82.60869565217392,335.9999999999997C81.23188405797102,335.9999999999997,79.85507246376811,335.9999999999997,78.4782608695652,335.9999999999997C77.10144927536233,335.9999999999997,75.72463768115942,335.9999999999997,74.34782608695653,335.9999999999997C72.97101449275362,335.9999999999997,71.59420289855073,335.9999999999997,70.21739130434783,335.9999999999997C68.84057971014492,335.9999999999997,67.46376811594202,335.9999999999997,66.08695652173913,335.9999999999997C64.71014492753623,335.9999999999997,63.333333333333336,335.9999999999997,61.95652173913044,335.9999999999997C60.57971014492754,335.9999999999997,59.20289855072465,335.9999999999997,57.82608695652174,335.9999999999997C56.44927536231884,335.9999999999997,55.07246376811594,335.9999999999997,53.69565217391304,335.9999999999997C52.31884057971015,335.9999999999997,50.94202898550724,335.9999999999997,49.565217391304344,335.9999999999997C48.188405797101446,335.9999999999997,46.811594202898554,335.9999999999997,45.434782608695656,335.9999999999997C44.05797101449275,335.9999999999997,42.68115942028985,335.9999999999997,41.30434782608696,335.9999999999997C39.927536231884055,335.9999999999997,38.550724637681164,335.9999999999997,37.17391304347826,335.9999999999997C35.79710144927537,335.9999999999997,34.42028985507246,335.9999999999997,33.04347826086956,335.9999999999997C31.666666666666668,335.9999999999997,30.28985507246377,335.9999999999997,28.913043478260875,335.9999999999997C27.53623188405797,335.9999999999997,26.159420289855074,335.9999999999997,24.782608695652172,335.9999999999997C23.40579710144927,335.9999999999997,22.028985507246375,335.9999999999997,20.652173913043477,335.9999999999997C19.27536231884058,335.9999999999997,17.89855072463768,335.9999999999997,16.52173913043478,335.9999999999997C15.144927536231883,335.9999999999997,13.768115942028984,335.9999999999997,12.391304347826086,335.9999999999997C11.014492753623188,335.9999999999997,9.63768115942029,335.9999999999997,8.26086956521739,335.9999999999997C6.884057971014492,335.9999999999997,5.507246376811594,335.9999999999997,4.130434782608695,335.9999999999997C2.753623188405797,335.9999999999997,1.3768115942028984,335.9999999999997,0.6884057971014492,335.9999999999997L0,335.9999999999997Z" fill="url(#area-gradientGMEEUSDT#007dff)" class="strokePath"></path><path d="M0,6.578999999999995L0.6884057971014492,6.787999999999996C1.3768115942028984,6.996999999999997,2.753623188405797,7.414999999999999,4.130434782608695,6.753499999999996C5.507246376811594,6.091999999999995,6.884057971014492,4.350999999999991,8.26086956521739,4.118499999999994C9.63768115942029,3.885999999999997,11.014492753623188,5.162000000000009,12.391304347826086,5.869000000000014C13.768115942028984,6.576000000000019,15.144927536231883,6.714000000000019,16.52173913043478,5.944000000000012C17.89855072463768,5.1740000000000075,19.27536231884058,3.495999999999997,20.652173913043477,3.951499999999994C22.028985507246375,4.406999999999991,23.40579710144927,6.995999999999996,24.782608695652172,8.387499999999998C26.159420289855074,9.779000000000002,27.53623188405797,9.973,28.91304347826087,10.735999999999999C30.28985507246377,11.498999999999997,31.666666666666668,12.830999999999996,33.04347826086956,14.382499999999993C34.42028985507246,15.933999999999989,35.79710144927537,17.704999999999984,37.17391304347826,17.365999999999985C38.550724637681164,17.026999999999987,39.927536231884055,14.577999999999994,41.30434782608695,13.809999999999997C42.68115942028985,13.042000000000002,44.05797101449275,13.954999999999998,45.43478260869565,14.259499999999997C46.811594202898554,14.563999999999995,48.188405797101446,14.259999999999996,49.565217391304344,15.478999999999992C50.94202898550724,16.69799999999999,52.31884057971015,19.43999999999998,53.69565217391304,20.87549999999998C55.07246376811594,22.31099999999998,56.44927536231884,22.43999999999998,57.82608695652174,22.440999999999985C59.20289855072465,22.441999999999982,60.57971014492754,22.314999999999984,61.95652173913044,23.398499999999984C63.333333333333336,24.48199999999998,64.71014492753623,26.775999999999982,66.08695652173913,27.719999999999985C67.46376811594202,28.663999999999984,68.84057971014492,28.25799999999998,70.21739130434783,27.79299999999998C71.59420289855073,27.327999999999978,72.97101449275362,26.803999999999984,74.34782608695652,26.994499999999988C75.72463768115942,27.18499999999999,77.10144927536233,28.089999999999993,78.4782608695652,27.89399999999999C79.85507246376811,27.69799999999999,81.23188405797102,26.400999999999982,82.60869565217392,26.330499999999983C83.98550724637681,26.25999999999998,85.3623188405797,27.415999999999986,86.73913043478262,27.699999999999985C88.1159420289855,27.983999999999984,89.49275362318842,27.395999999999976,90.86956521739131,27.422999999999977C92.2463768115942,27.449999999999978,93.62318840579711,28.09199999999998,94.31159420289855,28.412999999999982L95,28.733999999999984" stroke="#007dff" fill="transparent" stroke-width="1" class="strokePath"></path></svg></p>
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

export default KlayToken

