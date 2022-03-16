import styles from '../../styles/Coins.module.css'

import { useState, useEffect } from 'react'

function TheSandbox() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=the-sandbox&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24%2C7d').then((res) => res.json()).then((data) => {
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
                                <img className={styles.coin_logo} src="/icons/san.png" />
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
                                <p className={styles.coin__graph}><svg width="95" height="30"><defs><linearGradient id="area-gradientUSDCUSDT#007dff" x2="1" y2="1"><stop offset="10%" stop-color="#007dff" stop-opacity="0.01"></stop><stop offset="100%" stop-color="#007dff" stop-opacity="0.5"></stop></linearGradient></defs><path d="M0,21.42857142857211L0.6884057971014492,17.857142857143426C1.3768115942028984,14.28571428571474,2.753623188405797,7.14285714285737,4.130434782608695,3.571428571428685C5.507246376811594,0,6.884057971014492,0,8.26086956521739,0C9.63768115942029,0,11.014492753623188,0,12.391304347826086,0C13.768115942028984,0,15.144927536231883,0,16.52173913043478,3.9285714285715136C17.89855072463768,7.857142857143027,19.27536231884058,15.714285714286055,20.652173913043477,19.64285714285757C22.028985507246375,23.57142857142908,23.40579710144927,23.57142857142908,24.782608695652172,23.57142857142908C26.159420289855074,23.57142857142908,27.53623188405797,23.57142857142908,28.91304347826087,23.57142857142908C30.28985507246377,23.57142857142908,31.666666666666668,23.57142857142908,33.04347826086956,23.21428571428625C34.42028985507246,22.857142857143426,35.79710144927537,22.142857142857764,37.17391304347826,21.42857142857171C38.550724637681164,20.71428571428566,39.927536231884055,19.999999999999208,41.30434782608695,19.999999999999208C42.68115942028985,19.999999999999208,44.05797101449275,20.71428571428566,45.43478260869565,21.071428571428886C46.811594202898554,21.42857142857211,48.188405797101446,21.42857142857211,49.565217391304344,22.857142857143426C50.94202898550724,24.285714285714743,52.31884057971015,27.14285714285737,53.69565217391304,28.571428571428683C55.07246376811594,30,56.44927536231884,30,57.82608695652174,30C59.20289855072465,30,60.57971014492754,30,61.95652173913044,30C63.333333333333336,30,64.71014492753623,30,66.08695652173913,30C67.46376811594202,30,68.84057971014492,30,70.21739130434783,30C71.59420289855073,30,72.97101449275362,30,74.34782608695652,28.571428571428683C75.72463768115942,27.14285714285737,77.10144927536233,24.285714285714743,78.4782608695652,22.5000000000002C79.85507246376811,20.71428571428566,81.23188405797102,19.999999999999208,82.60869565217392,19.642857142855984C83.98550724637681,19.285714285712757,85.3623188405797,19.285714285712757,86.73913043478262,19.642857142855984C88.1159420289855,19.999999999999208,89.49275362318842,20.71428571428566,90.86956521739131,20.71428571428566C92.2463768115942,20.71428571428566,93.62318840579711,19.999999999999208,94.31159420289855,19.642857142855984L95,19.285714285712757L95,21437.142857143517L94.31159420289855,21437.142857143514C93.62318840579711,21437.142857143517,92.2463768115942,21437.142857143517,90.86956521739131,21437.142857143514C89.49275362318842,21437.142857143517,88.1159420289855,21437.142857143517,86.73913043478261,21437.142857143514C85.3623188405797,21437.142857143517,83.98550724637681,21437.142857143517,82.60869565217392,21437.142857143514C81.23188405797102,21437.142857143517,79.85507246376811,21437.142857143517,78.4782608695652,21437.142857143514C77.10144927536233,21437.142857143517,75.72463768115942,21437.142857143517,74.34782608695653,21437.142857143514C72.97101449275362,21437.142857143517,71.59420289855073,21437.142857143517,70.21739130434783,21437.142857143514C68.84057971014492,21437.142857143517,67.46376811594202,21437.142857143517,66.08695652173913,21437.142857143514C64.71014492753623,21437.142857143517,63.333333333333336,21437.142857143517,61.95652173913044,21437.142857143514C60.57971014492754,21437.142857143517,59.20289855072465,21437.142857143517,57.82608695652174,21437.142857143514C56.44927536231884,21437.142857143517,55.07246376811594,21437.142857143517,53.69565217391304,21437.142857143514C52.31884057971015,21437.142857143517,50.94202898550724,21437.142857143517,49.565217391304344,21437.142857143514C48.188405797101446,21437.142857143517,46.811594202898554,21437.142857143517,45.434782608695656,21437.142857143514C44.05797101449275,21437.142857143517,42.68115942028985,21437.142857143517,41.30434782608696,21437.142857143514C39.927536231884055,21437.142857143517,38.550724637681164,21437.142857143517,37.17391304347826,21437.142857143514C35.79710144927537,21437.142857143517,34.42028985507246,21437.142857143517,33.04347826086956,21437.142857143514C31.666666666666668,21437.142857143517,30.28985507246377,21437.142857143517,28.913043478260875,21437.142857143514C27.53623188405797,21437.142857143517,26.159420289855074,21437.142857143517,24.782608695652172,21437.142857143514C23.40579710144927,21437.142857143517,22.028985507246375,21437.142857143517,20.652173913043477,21437.142857143514C19.27536231884058,21437.142857143517,17.89855072463768,21437.142857143517,16.52173913043478,21437.142857143514C15.144927536231883,21437.142857143517,13.768115942028984,21437.142857143517,12.391304347826086,21437.142857143514C11.014492753623188,21437.142857143517,9.63768115942029,21437.142857143517,8.26086956521739,21437.142857143514C6.884057971014492,21437.142857143517,5.507246376811594,21437.142857143517,4.130434782608695,21437.142857143514C2.753623188405797,21437.142857143517,1.3768115942028984,21437.142857143517,0.6884057971014492,21437.142857143514L0,21437.142857143517Z" fill="url(#area-gradientUSDCUSDT#007dff)" class="strokePath"></path><path d="M0,21.42857142857211L0.6884057971014492,17.857142857143426C1.3768115942028984,14.28571428571474,2.753623188405797,7.14285714285737,4.130434782608695,3.571428571428685C5.507246376811594,0,6.884057971014492,0,8.26086956521739,0C9.63768115942029,0,11.014492753623188,0,12.391304347826086,0C13.768115942028984,0,15.144927536231883,0,16.52173913043478,3.9285714285715136C17.89855072463768,7.857142857143027,19.27536231884058,15.714285714286055,20.652173913043477,19.64285714285757C22.028985507246375,23.57142857142908,23.40579710144927,23.57142857142908,24.782608695652172,23.57142857142908C26.159420289855074,23.57142857142908,27.53623188405797,23.57142857142908,28.91304347826087,23.57142857142908C30.28985507246377,23.57142857142908,31.666666666666668,23.57142857142908,33.04347826086956,23.21428571428625C34.42028985507246,22.857142857143426,35.79710144927537,22.142857142857764,37.17391304347826,21.42857142857171C38.550724637681164,20.71428571428566,39.927536231884055,19.999999999999208,41.30434782608695,19.999999999999208C42.68115942028985,19.999999999999208,44.05797101449275,20.71428571428566,45.43478260869565,21.071428571428886C46.811594202898554,21.42857142857211,48.188405797101446,21.42857142857211,49.565217391304344,22.857142857143426C50.94202898550724,24.285714285714743,52.31884057971015,27.14285714285737,53.69565217391304,28.571428571428683C55.07246376811594,30,56.44927536231884,30,57.82608695652174,30C59.20289855072465,30,60.57971014492754,30,61.95652173913044,30C63.333333333333336,30,64.71014492753623,30,66.08695652173913,30C67.46376811594202,30,68.84057971014492,30,70.21739130434783,30C71.59420289855073,30,72.97101449275362,30,74.34782608695652,28.571428571428683C75.72463768115942,27.14285714285737,77.10144927536233,24.285714285714743,78.4782608695652,22.5000000000002C79.85507246376811,20.71428571428566,81.23188405797102,19.999999999999208,82.60869565217392,19.642857142855984C83.98550724637681,19.285714285712757,85.3623188405797,19.285714285712757,86.73913043478262,19.642857142855984C88.1159420289855,19.999999999999208,89.49275362318842,20.71428571428566,90.86956521739131,20.71428571428566C92.2463768115942,20.71428571428566,93.62318840579711,19.999999999999208,94.31159420289855,19.642857142855984L95,19.285714285712757" stroke="#007dff" fill="transparent" stroke-width="1" class="strokePath"></path></svg></p>
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

export default TheSandbox

