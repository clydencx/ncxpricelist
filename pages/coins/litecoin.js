import styles from '../../styles/Coins.module.css'

import { useState, useEffect } from 'react'

function LightCoin() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=litecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24%2C7d').then((res) => res.json()).then((data) => {
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
                                <img className={styles.coin_logo} src="/icons/ltc.png" />
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
                                <p className={styles.coin__graph}><svg width="95" height="30"><defs><linearGradient id="area-gradientPSGUSDT#45B26B" x2="1" y2="1"><stop offset="10%" stop-color="#45B26B" stop-opacity="0.01"></stop><stop offset="100%" stop-color="#45B26B" stop-opacity="0.5"></stop></linearGradient></defs><path d="M0,14.146153846153867L0.6884057971014492,15.042307692307718C1.3768115942028984,15.938461538461567,2.753623188405797,17.73076923076927,4.130434782608695,18.669230769230808C5.507246376811594,19.60769230769235,6.884057971014492,19.692307692307725,8.26086956521739,19.726923076923097C9.63768115942029,19.761538461538468,11.014492753623188,19.746153846153835,12.391304347826086,19.496153846153828C13.768115942028984,19.246153846153824,15.144927536231883,18.761538461538446,16.52173913043478,19.365384615384603C17.89855072463768,19.96923076923076,19.27536231884058,21.66153846153844,20.652173913043477,22.792307692307677C22.028985507246375,23.923076923076916,23.40579710144927,24.4923076923077,24.782608695652172,24.87692307692309C26.159420289855074,25.261538461538482,27.53623188405797,25.46153846153848,28.91304347826087,25.711538461538492C30.28985507246377,25.961538461538492,31.666666666666668,26.261538461538507,33.04347826086956,26.611538461538505C34.42028985507246,26.961538461538513,35.79710144927537,27.36153846153851,37.17391304347826,26.75000000000004C38.550724637681164,26.138461538461566,39.927536231884055,24.51538461538462,41.30434782608695,23.703846153846147C42.68115942028985,22.89230769230768,44.05797101449275,22.89230769230768,45.43478260869565,22.89230769230768C46.811594202898554,22.89230769230768,48.188405797101446,22.89230769230768,49.565217391304344,22.89230769230768C50.94202898550724,22.89230769230768,52.31884057971015,22.89230769230768,53.69565217391304,22.89230769230768C55.07246376811594,22.89230769230768,56.44927536231884,22.89230769230768,57.82608695652174,22.89230769230768C59.20289855072465,22.89230769230768,60.57971014492754,22.89230769230768,61.95652173913044,22.89230769230768C63.333333333333336,22.89230769230768,64.71014492753623,22.89230769230768,66.08695652173913,22.89230769230768C67.46376811594202,22.89230769230768,68.84057971014492,22.89230769230768,70.21739130434783,22.89230769230768C71.59420289855073,22.89230769230768,72.97101449275362,22.89230769230768,74.34782608695652,19.284615384615368C75.72463768115942,15.676923076923059,77.10144927536233,8.461538461538437,78.4782608695652,5.449999999999978C79.85507246376811,2.438461538461519,81.23188405797102,3.6307692307692228,82.60869565217392,4.3692307692307635C83.98550724637681,5.107692307692304,85.3623188405797,5.392307692307682,86.73913043478262,5.673076923076915C88.1159420289855,5.953846153846148,89.49275362318842,6.230769230769236,90.86956521739131,6.569230769230779C92.2463768115942,6.907692307692322,93.62318840579711,7.30769230769232,94.31159420289855,7.507692307692319L95,7.707692307692318L95,413.07692307692395L94.31159420289855,413.07692307692395C93.62318840579711,413.07692307692395,92.2463768115942,413.07692307692395,90.86956521739131,413.07692307692395C89.49275362318842,413.07692307692395,88.1159420289855,413.07692307692395,86.73913043478261,413.07692307692395C85.3623188405797,413.07692307692395,83.98550724637681,413.07692307692395,82.60869565217392,413.07692307692395C81.23188405797102,413.07692307692395,79.85507246376811,413.07692307692395,78.4782608695652,413.07692307692395C77.10144927536233,413.07692307692395,75.72463768115942,413.07692307692395,74.34782608695653,413.07692307692395C72.97101449275362,413.07692307692395,71.59420289855073,413.07692307692395,70.21739130434783,413.07692307692395C68.84057971014492,413.07692307692395,67.46376811594202,413.07692307692395,66.08695652173913,413.07692307692395C64.71014492753623,413.07692307692395,63.333333333333336,413.07692307692395,61.95652173913044,413.07692307692395C60.57971014492754,413.07692307692395,59.20289855072465,413.07692307692395,57.82608695652174,413.07692307692395C56.44927536231884,413.07692307692395,55.07246376811594,413.07692307692395,53.69565217391304,413.07692307692395C52.31884057971015,413.07692307692395,50.94202898550724,413.07692307692395,49.565217391304344,413.07692307692395C48.188405797101446,413.07692307692395,46.811594202898554,413.07692307692395,45.434782608695656,413.07692307692395C44.05797101449275,413.07692307692395,42.68115942028985,413.07692307692395,41.30434782608696,413.07692307692395C39.927536231884055,413.07692307692395,38.550724637681164,413.07692307692395,37.17391304347826,413.07692307692395C35.79710144927537,413.07692307692395,34.42028985507246,413.07692307692395,33.04347826086956,413.07692307692395C31.666666666666668,413.07692307692395,30.28985507246377,413.07692307692395,28.913043478260875,413.07692307692395C27.53623188405797,413.07692307692395,26.159420289855074,413.07692307692395,24.782608695652172,413.07692307692395C23.40579710144927,413.07692307692395,22.028985507246375,413.07692307692395,20.652173913043477,413.07692307692395C19.27536231884058,413.07692307692395,17.89855072463768,413.07692307692395,16.52173913043478,413.07692307692395C15.144927536231883,413.07692307692395,13.768115942028984,413.07692307692395,12.391304347826086,413.07692307692395C11.014492753623188,413.07692307692395,9.63768115942029,413.07692307692395,8.26086956521739,413.07692307692395C6.884057971014492,413.07692307692395,5.507246376811594,413.07692307692395,4.130434782608695,413.07692307692395C2.753623188405797,413.07692307692395,1.3768115942028984,413.07692307692395,0.6884057971014492,413.07692307692395L0,413.07692307692395Z" fill="url(#area-gradientPSGUSDT#45B26B)" class="strokePath"></path><path d="M0,14.146153846153867L0.6884057971014492,15.042307692307718C1.3768115942028984,15.938461538461567,2.753623188405797,17.73076923076927,4.130434782608695,18.669230769230808C5.507246376811594,19.60769230769235,6.884057971014492,19.692307692307725,8.26086956521739,19.726923076923097C9.63768115942029,19.761538461538468,11.014492753623188,19.746153846153835,12.391304347826086,19.496153846153828C13.768115942028984,19.246153846153824,15.144927536231883,18.761538461538446,16.52173913043478,19.365384615384603C17.89855072463768,19.96923076923076,19.27536231884058,21.66153846153844,20.652173913043477,22.792307692307677C22.028985507246375,23.923076923076916,23.40579710144927,24.4923076923077,24.782608695652172,24.87692307692309C26.159420289855074,25.261538461538482,27.53623188405797,25.46153846153848,28.91304347826087,25.711538461538492C30.28985507246377,25.961538461538492,31.666666666666668,26.261538461538507,33.04347826086956,26.611538461538505C34.42028985507246,26.961538461538513,35.79710144927537,27.36153846153851,37.17391304347826,26.75000000000004C38.550724637681164,26.138461538461566,39.927536231884055,24.51538461538462,41.30434782608695,23.703846153846147C42.68115942028985,22.89230769230768,44.05797101449275,22.89230769230768,45.43478260869565,22.89230769230768C46.811594202898554,22.89230769230768,48.188405797101446,22.89230769230768,49.565217391304344,22.89230769230768C50.94202898550724,22.89230769230768,52.31884057971015,22.89230769230768,53.69565217391304,22.89230769230768C55.07246376811594,22.89230769230768,56.44927536231884,22.89230769230768,57.82608695652174,22.89230769230768C59.20289855072465,22.89230769230768,60.57971014492754,22.89230769230768,61.95652173913044,22.89230769230768C63.333333333333336,22.89230769230768,64.71014492753623,22.89230769230768,66.08695652173913,22.89230769230768C67.46376811594202,22.89230769230768,68.84057971014492,22.89230769230768,70.21739130434783,22.89230769230768C71.59420289855073,22.89230769230768,72.97101449275362,22.89230769230768,74.34782608695652,19.284615384615368C75.72463768115942,15.676923076923059,77.10144927536233,8.461538461538437,78.4782608695652,5.449999999999978C79.85507246376811,2.438461538461519,81.23188405797102,3.6307692307692228,82.60869565217392,4.3692307692307635C83.98550724637681,5.107692307692304,85.3623188405797,5.392307692307682,86.73913043478262,5.673076923076915C88.1159420289855,5.953846153846148,89.49275362318842,6.230769230769236,90.86956521739131,6.569230769230779C92.2463768115942,6.907692307692322,93.62318840579711,7.30769230769232,94.31159420289855,7.507692307692319L95,7.707692307692318" stroke="#45B26B" fill="transparent" stroke-width="1" class="strokePath"></path></svg></p>
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

export default LightCoin

