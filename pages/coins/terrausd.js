import styles from '../../styles/Coins.module.css'

import { useState, useEffect } from 'react'

function TerraUSD() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=terrausd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24%2C7d').then((res) => res.json()).then((data) => {
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
                                <img className={styles.coin_logo} src="/icons/UST.png" />
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
                                <p className={styles.coin__graph}><svg width="95" height="30"><defs><linearGradient id="area-gradientXRPUSDT#45B26B" x2="1" y2="1"><stop offset="10%" stop-color="#45B26B" stop-opacity="0.01"></stop><stop offset="100%" stop-color="#45B26B" stop-opacity="0.5"></stop></linearGradient></defs><path d="M0,17.442857142857108L0.6884057971014492,18.69999999999997C1.3768115942028984,19.95714285714283,2.753623188405797,22.47142857142855,4.130434782608695,23.722857142857123C5.507246376811594,24.97428571428569,6.884057971014492,24.962857142857104,8.26086956521739,24.828571428571383C9.63768115942029,24.694285714285666,11.014492753623188,24.437142857142803,12.391304347826086,24.062857142857094C13.768115942028984,23.68857142857139,15.144927536231883,23.197142857142833,16.52173913043478,23.488571428571408C17.89855072463768,23.779999999999983,19.27536231884058,24.854285714285695,20.652173913043477,25.812857142857123C22.028985507246375,26.771428571428547,23.40579710144927,27.61428571428569,24.782608695652172,27.634285714285696C26.159420289855074,27.654285714285702,27.53623188405797,26.851428571428567,28.91304347826087,26.38857142857142C30.28985507246377,25.925714285714275,31.666666666666668,25.80285714285712,33.04347826086956,25.741428571428546C34.42028985507246,25.679999999999968,35.79710144927537,25.679999999999968,37.17391304347826,25.425714285714253C38.550724637681164,25.17142857142854,39.927536231884055,24.662857142857106,41.30434782608695,24.408571428571392C42.68115942028985,24.154285714285677,44.05797101449275,24.154285714285677,45.43478260869565,24.154285714285677C46.811594202898554,24.154285714285677,48.188405797101446,24.154285714285677,49.565217391304344,24.154285714285677C50.94202898550724,24.154285714285677,52.31884057971015,24.154285714285677,53.69565217391304,24.154285714285677C55.07246376811594,24.154285714285677,56.44927536231884,24.154285714285677,57.82608695652174,24.154285714285677C59.20289855072465,24.154285714285677,60.57971014492754,24.154285714285677,61.95652173913044,21.57142857142854C63.333333333333336,18.9885714285714,64.71014492753623,13.822857142857124,66.08695652173913,10.832857142857128C67.46376811594202,7.842857142857127,68.84057971014492,7.028571428571408,70.21739130434783,6.202857142857122C71.59420289855073,5.377142857142836,72.97101449275362,4.539999999999982,74.34782608695652,3.672857142857124C75.72463768115942,2.8057142857142647,77.10144927536233,1.9085714285713997,78.4782608695652,1.8242857142856883C79.85507246376811,1.7399999999999771,81.23188405797102,2.46857142857142,82.60869565217392,3.225714285714288C83.98550724637681,3.982857142857157,85.3623188405797,4.768571428571451,86.73913043478262,4.947142857142876C88.1159420289855,5.1257142857143005,89.49275362318842,4.697142857142856,90.86956521739131,3.771428571428565C92.2463768115942,2.845714285714274,93.62318840579711,1.422857142857137,94.31159420289855,0.7114285714285685L95,0L95,638.571428571428L94.31159420289855,638.571428571428C93.62318840579711,638.571428571428,92.2463768115942,638.571428571428,90.86956521739131,638.571428571428C89.49275362318842,638.571428571428,88.1159420289855,638.571428571428,86.73913043478261,638.571428571428C85.3623188405797,638.571428571428,83.98550724637681,638.571428571428,82.60869565217392,638.571428571428C81.23188405797102,638.571428571428,79.85507246376811,638.571428571428,78.4782608695652,638.571428571428C77.10144927536233,638.571428571428,75.72463768115942,638.571428571428,74.34782608695653,638.571428571428C72.97101449275362,638.571428571428,71.59420289855073,638.571428571428,70.21739130434783,638.571428571428C68.84057971014492,638.571428571428,67.46376811594202,638.571428571428,66.08695652173913,638.571428571428C64.71014492753623,638.571428571428,63.333333333333336,638.571428571428,61.95652173913044,638.571428571428C60.57971014492754,638.571428571428,59.20289855072465,638.571428571428,57.82608695652174,638.571428571428C56.44927536231884,638.571428571428,55.07246376811594,638.571428571428,53.69565217391304,638.571428571428C52.31884057971015,638.571428571428,50.94202898550724,638.571428571428,49.565217391304344,638.571428571428C48.188405797101446,638.571428571428,46.811594202898554,638.571428571428,45.434782608695656,638.571428571428C44.05797101449275,638.571428571428,42.68115942028985,638.571428571428,41.30434782608696,638.571428571428C39.927536231884055,638.571428571428,38.550724637681164,638.571428571428,37.17391304347826,638.571428571428C35.79710144927537,638.571428571428,34.42028985507246,638.571428571428,33.04347826086956,638.571428571428C31.666666666666668,638.571428571428,30.28985507246377,638.571428571428,28.913043478260875,638.571428571428C27.53623188405797,638.571428571428,26.159420289855074,638.571428571428,24.782608695652172,638.571428571428C23.40579710144927,638.571428571428,22.028985507246375,638.571428571428,20.652173913043477,638.571428571428C19.27536231884058,638.571428571428,17.89855072463768,638.571428571428,16.52173913043478,638.571428571428C15.144927536231883,638.571428571428,13.768115942028984,638.571428571428,12.391304347826086,638.571428571428C11.014492753623188,638.571428571428,9.63768115942029,638.571428571428,8.26086956521739,638.571428571428C6.884057971014492,638.571428571428,5.507246376811594,638.571428571428,4.130434782608695,638.571428571428C2.753623188405797,638.571428571428,1.3768115942028984,638.571428571428,0.6884057971014492,638.571428571428L0,638.571428571428Z" fill="url(#area-gradientXRPUSDT#45B26B)" class="strokePath"></path><path d="M0,17.442857142857108L0.6884057971014492,18.69999999999997C1.3768115942028984,19.95714285714283,2.753623188405797,22.47142857142855,4.130434782608695,23.722857142857123C5.507246376811594,24.97428571428569,6.884057971014492,24.962857142857104,8.26086956521739,24.828571428571383C9.63768115942029,24.694285714285666,11.014492753623188,24.437142857142803,12.391304347826086,24.062857142857094C13.768115942028984,23.68857142857139,15.144927536231883,23.197142857142833,16.52173913043478,23.488571428571408C17.89855072463768,23.779999999999983,19.27536231884058,24.854285714285695,20.652173913043477,25.812857142857123C22.028985507246375,26.771428571428547,23.40579710144927,27.61428571428569,24.782608695652172,27.634285714285696C26.159420289855074,27.654285714285702,27.53623188405797,26.851428571428567,28.91304347826087,26.38857142857142C30.28985507246377,25.925714285714275,31.666666666666668,25.80285714285712,33.04347826086956,25.741428571428546C34.42028985507246,25.679999999999968,35.79710144927537,25.679999999999968,37.17391304347826,25.425714285714253C38.550724637681164,25.17142857142854,39.927536231884055,24.662857142857106,41.30434782608695,24.408571428571392C42.68115942028985,24.154285714285677,44.05797101449275,24.154285714285677,45.43478260869565,24.154285714285677C46.811594202898554,24.154285714285677,48.188405797101446,24.154285714285677,49.565217391304344,24.154285714285677C50.94202898550724,24.154285714285677,52.31884057971015,24.154285714285677,53.69565217391304,24.154285714285677C55.07246376811594,24.154285714285677,56.44927536231884,24.154285714285677,57.82608695652174,24.154285714285677C59.20289855072465,24.154285714285677,60.57971014492754,24.154285714285677,61.95652173913044,21.57142857142854C63.333333333333336,18.9885714285714,64.71014492753623,13.822857142857124,66.08695652173913,10.832857142857128C67.46376811594202,7.842857142857127,68.84057971014492,7.028571428571408,70.21739130434783,6.202857142857122C71.59420289855073,5.377142857142836,72.97101449275362,4.539999999999982,74.34782608695652,3.672857142857124C75.72463768115942,2.8057142857142647,77.10144927536233,1.9085714285713997,78.4782608695652,1.8242857142856883C79.85507246376811,1.7399999999999771,81.23188405797102,2.46857142857142,82.60869565217392,3.225714285714288C83.98550724637681,3.982857142857157,85.3623188405797,4.768571428571451,86.73913043478262,4.947142857142876C88.1159420289855,5.1257142857143005,89.49275362318842,4.697142857142856,90.86956521739131,3.771428571428565C92.2463768115942,2.845714285714274,93.62318840579711,1.422857142857137,94.31159420289855,0.7114285714285685L95,0" stroke="#45B26B" fill="transparent" stroke-width="1" class="strokePath"></path></svg></p>
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

export default TerraUSD

