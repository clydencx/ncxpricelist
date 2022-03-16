import styles from '../../styles/Coins.module.css'

import { useState, useEffect } from 'react'

function Vechain() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=vechain&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24%2C7d').then((res) => res.json()).then((data) => {
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
                                <img className={styles.coin_logo} src="https://assets.coingecko.com/coins/images/1167/large/VeChain-Logo-768x725.png" />
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
                                <p className={styles.coin__graph}><svg width="95" height="30"><defs><linearGradient id="area-gradientUSDCUSDT#45B26B" x2="1" y2="1"><stop offset="10%" stop-color="#45B26B" stop-opacity="0.01"></stop><stop offset="100%" stop-color="#45B26B" stop-opacity="0.5"></stop></linearGradient></defs><path d="M0,21.42857142857211L0.6884057971014492,21.42857142857211C1.3768115942028984,21.42857142857211,2.753623188405797,21.42857142857211,4.130434782608695,21.42857142857211C5.507246376811594,21.42857142857211,6.884057971014492,21.42857142857211,8.26086956521739,21.42857142857211C9.63768115942029,21.42857142857211,11.014492753623188,21.42857142857211,12.391304347826086,21.42857142857211C13.768115942028984,21.42857142857211,15.144927536231883,21.42857142857211,16.52173913043478,21.42857142857211C17.89855072463768,21.42857142857211,19.27536231884058,21.42857142857211,20.652173913043477,17.857142857143426C22.028985507246375,14.28571428571474,23.40579710144927,7.14285714285737,24.782608695652172,7.14285714285737C26.159420289855074,7.14285714285737,27.53623188405797,14.28571428571474,28.91304347826087,14.28571428571474C30.28985507246377,14.28571428571474,31.666666666666668,7.14285714285737,33.04347826086956,3.571428571428685C34.42028985507246,0,35.79710144927537,0,37.17391304347826,0C38.550724637681164,0,39.927536231884055,0,41.30434782608695,0C42.68115942028985,0,44.05797101449275,0,45.43478260869565,3.9285714285715136C46.811594202898554,7.857142857143027,48.188405797101446,15.714285714286055,49.565217391304344,19.64285714285757C50.94202898550724,23.57142857142908,52.31884057971015,23.57142857142908,53.69565217391304,23.57142857142908C55.07246376811594,23.57142857142908,56.44927536231884,23.57142857142908,57.82608695652174,23.57142857142908C59.20289855072465,23.57142857142908,60.57971014492754,23.57142857142908,61.95652173913044,23.21428571428625C63.333333333333336,22.857142857143426,64.71014492753623,22.142857142857764,66.08695652173913,21.42857142857171C67.46376811594202,20.71428571428566,68.84057971014492,19.999999999999208,70.21739130434783,19.999999999999208C71.59420289855073,19.999999999999208,72.97101449275362,20.71428571428566,74.34782608695652,21.071428571428886C75.72463768115942,21.42857142857211,77.10144927536233,21.42857142857211,78.4782608695652,22.857142857143426C79.85507246376811,24.285714285714743,81.23188405797102,27.14285714285737,82.60869565217392,28.571428571428683C83.98550724637681,30,85.3623188405797,30,86.73913043478262,30C88.1159420289855,30,89.49275362318842,30,90.86956521739131,30C92.2463768115942,30,93.62318840579711,30,94.31159420289855,30L95,30L95,21437.142857143517L94.31159420289855,21437.142857143514C93.62318840579711,21437.142857143517,92.2463768115942,21437.142857143517,90.86956521739131,21437.142857143514C89.49275362318842,21437.142857143517,88.1159420289855,21437.142857143517,86.73913043478261,21437.142857143514C85.3623188405797,21437.142857143517,83.98550724637681,21437.142857143517,82.60869565217392,21437.142857143514C81.23188405797102,21437.142857143517,79.85507246376811,21437.142857143517,78.4782608695652,21437.142857143514C77.10144927536233,21437.142857143517,75.72463768115942,21437.142857143517,74.34782608695653,21437.142857143514C72.97101449275362,21437.142857143517,71.59420289855073,21437.142857143517,70.21739130434783,21437.142857143514C68.84057971014492,21437.142857143517,67.46376811594202,21437.142857143517,66.08695652173913,21437.142857143514C64.71014492753623,21437.142857143517,63.333333333333336,21437.142857143517,61.95652173913044,21437.142857143514C60.57971014492754,21437.142857143517,59.20289855072465,21437.142857143517,57.82608695652174,21437.142857143514C56.44927536231884,21437.142857143517,55.07246376811594,21437.142857143517,53.69565217391304,21437.142857143514C52.31884057971015,21437.142857143517,50.94202898550724,21437.142857143517,49.565217391304344,21437.142857143514C48.188405797101446,21437.142857143517,46.811594202898554,21437.142857143517,45.434782608695656,21437.142857143514C44.05797101449275,21437.142857143517,42.68115942028985,21437.142857143517,41.30434782608696,21437.142857143514C39.927536231884055,21437.142857143517,38.550724637681164,21437.142857143517,37.17391304347826,21437.142857143514C35.79710144927537,21437.142857143517,34.42028985507246,21437.142857143517,33.04347826086956,21437.142857143514C31.666666666666668,21437.142857143517,30.28985507246377,21437.142857143517,28.913043478260875,21437.142857143514C27.53623188405797,21437.142857143517,26.159420289855074,21437.142857143517,24.782608695652172,21437.142857143514C23.40579710144927,21437.142857143517,22.028985507246375,21437.142857143517,20.652173913043477,21437.142857143514C19.27536231884058,21437.142857143517,17.89855072463768,21437.142857143517,16.52173913043478,21437.142857143514C15.144927536231883,21437.142857143517,13.768115942028984,21437.142857143517,12.391304347826086,21437.142857143514C11.014492753623188,21437.142857143517,9.63768115942029,21437.142857143517,8.26086956521739,21437.142857143514C6.884057971014492,21437.142857143517,5.507246376811594,21437.142857143517,4.130434782608695,21437.142857143514C2.753623188405797,21437.142857143517,1.3768115942028984,21437.142857143517,0.6884057971014492,21437.142857143514L0,21437.142857143517Z" fill="url(#area-gradientUSDCUSDT#45B26B)" class="strokePath"></path><path d="M0,21.42857142857211L0.6884057971014492,21.42857142857211C1.3768115942028984,21.42857142857211,2.753623188405797,21.42857142857211,4.130434782608695,21.42857142857211C5.507246376811594,21.42857142857211,6.884057971014492,21.42857142857211,8.26086956521739,21.42857142857211C9.63768115942029,21.42857142857211,11.014492753623188,21.42857142857211,12.391304347826086,21.42857142857211C13.768115942028984,21.42857142857211,15.144927536231883,21.42857142857211,16.52173913043478,21.42857142857211C17.89855072463768,21.42857142857211,19.27536231884058,21.42857142857211,20.652173913043477,17.857142857143426C22.028985507246375,14.28571428571474,23.40579710144927,7.14285714285737,24.782608695652172,7.14285714285737C26.159420289855074,7.14285714285737,27.53623188405797,14.28571428571474,28.91304347826087,14.28571428571474C30.28985507246377,14.28571428571474,31.666666666666668,7.14285714285737,33.04347826086956,3.571428571428685C34.42028985507246,0,35.79710144927537,0,37.17391304347826,0C38.550724637681164,0,39.927536231884055,0,41.30434782608695,0C42.68115942028985,0,44.05797101449275,0,45.43478260869565,3.9285714285715136C46.811594202898554,7.857142857143027,48.188405797101446,15.714285714286055,49.565217391304344,19.64285714285757C50.94202898550724,23.57142857142908,52.31884057971015,23.57142857142908,53.69565217391304,23.57142857142908C55.07246376811594,23.57142857142908,56.44927536231884,23.57142857142908,57.82608695652174,23.57142857142908C59.20289855072465,23.57142857142908,60.57971014492754,23.57142857142908,61.95652173913044,23.21428571428625C63.333333333333336,22.857142857143426,64.71014492753623,22.142857142857764,66.08695652173913,21.42857142857171C67.46376811594202,20.71428571428566,68.84057971014492,19.999999999999208,70.21739130434783,19.999999999999208C71.59420289855073,19.999999999999208,72.97101449275362,20.71428571428566,74.34782608695652,21.071428571428886C75.72463768115942,21.42857142857211,77.10144927536233,21.42857142857211,78.4782608695652,22.857142857143426C79.85507246376811,24.285714285714743,81.23188405797102,27.14285714285737,82.60869565217392,28.571428571428683C83.98550724637681,30,85.3623188405797,30,86.73913043478262,30C88.1159420289855,30,89.49275362318842,30,90.86956521739131,30C92.2463768115942,30,93.62318840579711,30,94.31159420289855,30L95,30" stroke="#45B26B" fill="transparent" stroke-width="1" class="strokePath"></path></svg></p>
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

export default Vechain

