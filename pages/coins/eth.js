import styles from '../../styles/Coins.module.css'

import { useState, useEffect } from 'react'

function Eth() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24%2C7d').then((res) => res.json()).then((data) => {
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
                                    <img className={styles.coin_logo} src="/icons/eth.png" />
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
                                <p className={styles.coin__graph}><svg width="95" height="30"><defs><linearGradient id="area-gradientETHUSDT#007dff" x2="1" y2="1"><stop offset="10%" stop-color="#007dff" stop-opacity="0.01"></stop><stop offset="100%" stop-color="#007dff" stop-opacity="0.5"></stop></linearGradient></defs><path d="M0,8.256923076923123L0.6884057971014492,7.648461538461578C1.3768115942028984,7.040000000000034,2.753623188405797,5.823076923076944,4.130434782608695,5.391923076923097C5.507246376811594,4.960769230769249,6.884057971014492,5.315384615384644,8.26086956521739,4.8807692307692525C9.63768115942029,4.446153846153861,11.014492753623188,3.2223076923076834,12.391304347826086,2.730769230769214C13.768115942028984,2.2392307692307445,15.144927536231883,2.479999999999983,16.52173913043478,2.198461538461533C17.89855072463768,1.9169230769230827,19.27536231884058,1.1130769230769433,20.652173913043477,0.9926923076923239C22.028985507246375,0.8723076923077043,23.40579710144927,1.4353846153846053,24.782608695652172,4.787307692307667C26.159420289855074,8.13923076923073,27.53623188405797,14.279999999999953,28.91304347826087,17.51807692307688C30.28985507246377,20.756153846153804,31.666666666666668,21.09153846153843,33.04347826086956,21.58769230769228C34.42028985507246,22.083846153846128,35.79710144927537,22.740769230769203,37.17391304347826,22.94346153846151C38.550724637681164,23.14615384615382,39.927536231884055,22.89461538461536,41.30434782608695,22.52615384615382C42.68115942028985,22.157692307692287,44.05797101449275,21.672307692307673,45.43478260869565,21.499999999999982C46.811594202898554,21.32769230769229,48.188405797101446,21.46846153846151,49.565217391304344,22.2203846153846C50.94202898550724,22.97230769230768,52.31884057971015,24.335384615384623,53.69565217391304,25.3396153846154C55.07246376811594,26.343846153846172,56.44927536231884,26.989230769230783,57.82608695652174,27.38115384615386C59.20289855072465,27.77307692307694,60.57971014492754,27.911538461538488,61.95652173913044,27.71038461538464C63.333333333333336,27.509230769230793,64.71014492753623,26.96846153846155,66.08695652173913,26.53653846153847C67.46376811594202,26.104615384615396,68.84057971014492,25.781538461538485,70.21739130434783,25.803461538461566C71.59420289855073,25.825384615384653,72.97101449275362,26.192307692307725,74.34782608695652,26.151538461538497C75.72463768115942,26.110769230769268,77.10144927536233,25.66230769230774,78.4782608695652,25.4865384615385C79.85507246376811,25.310769230769264,81.23188405797102,25.407692307692326,82.60869565217392,25.295769230769235C83.98550724637681,25.183846153846144,85.3623188405797,24.863076923076907,86.73913043478262,24.43884615384613C88.1159420289855,24.014615384615354,89.49275362318842,23.486923076923038,90.86956521739131,23.62923076923074C92.2463768115942,23.771538461538444,93.62318840579711,24.583846153846167,94.31159420289855,24.990000000000023L95,25.396153846153886L95,609.2307692307692L94.31159420289855,609.2307692307692C93.62318840579711,609.2307692307692,92.2463768115942,609.2307692307692,90.86956521739131,609.2307692307692C89.49275362318842,609.2307692307692,88.1159420289855,609.2307692307692,86.73913043478261,609.2307692307692C85.3623188405797,609.2307692307692,83.98550724637681,609.2307692307692,82.60869565217392,609.2307692307692C81.23188405797102,609.2307692307692,79.85507246376811,609.2307692307692,78.4782608695652,609.2307692307692C77.10144927536233,609.2307692307692,75.72463768115942,609.2307692307692,74.34782608695653,609.2307692307692C72.97101449275362,609.2307692307692,71.59420289855073,609.2307692307692,70.21739130434783,609.2307692307692C68.84057971014492,609.2307692307692,67.46376811594202,609.2307692307692,66.08695652173913,609.2307692307692C64.71014492753623,609.2307692307692,63.333333333333336,609.2307692307692,61.95652173913044,609.2307692307692C60.57971014492754,609.2307692307692,59.20289855072465,609.2307692307692,57.82608695652174,609.2307692307692C56.44927536231884,609.2307692307692,55.07246376811594,609.2307692307692,53.69565217391304,609.2307692307692C52.31884057971015,609.2307692307692,50.94202898550724,609.2307692307692,49.565217391304344,609.2307692307692C48.188405797101446,609.2307692307692,46.811594202898554,609.2307692307692,45.434782608695656,609.2307692307692C44.05797101449275,609.2307692307692,42.68115942028985,609.2307692307692,41.30434782608696,609.2307692307692C39.927536231884055,609.2307692307692,38.550724637681164,609.2307692307692,37.17391304347826,609.2307692307692C35.79710144927537,609.2307692307692,34.42028985507246,609.2307692307692,33.04347826086956,609.2307692307692C31.666666666666668,609.2307692307692,30.28985507246377,609.2307692307692,28.913043478260875,609.2307692307692C27.53623188405797,609.2307692307692,26.159420289855074,609.2307692307692,24.782608695652172,609.2307692307692C23.40579710144927,609.2307692307692,22.028985507246375,609.2307692307692,20.652173913043477,609.2307692307692C19.27536231884058,609.2307692307692,17.89855072463768,609.2307692307692,16.52173913043478,609.2307692307692C15.144927536231883,609.2307692307692,13.768115942028984,609.2307692307692,12.391304347826086,609.2307692307692C11.014492753623188,609.2307692307692,9.63768115942029,609.2307692307692,8.26086956521739,609.2307692307692C6.884057971014492,609.2307692307692,5.507246376811594,609.2307692307692,4.130434782608695,609.2307692307692C2.753623188405797,609.2307692307692,1.3768115942028984,609.2307692307692,0.6884057971014492,609.2307692307692L0,609.2307692307692Z" fill="url(#area-gradientETHUSDT#007dff)" class="strokePath"></path><path d="M0,8.256923076923123L0.6884057971014492,7.648461538461578C1.3768115942028984,7.040000000000034,2.753623188405797,5.823076923076944,4.130434782608695,5.391923076923097C5.507246376811594,4.960769230769249,6.884057971014492,5.315384615384644,8.26086956521739,4.8807692307692525C9.63768115942029,4.446153846153861,11.014492753623188,3.2223076923076834,12.391304347826086,2.730769230769214C13.768115942028984,2.2392307692307445,15.144927536231883,2.479999999999983,16.52173913043478,2.198461538461533C17.89855072463768,1.9169230769230827,19.27536231884058,1.1130769230769433,20.652173913043477,0.9926923076923239C22.028985507246375,0.8723076923077043,23.40579710144927,1.4353846153846053,24.782608695652172,4.787307692307667C26.159420289855074,8.13923076923073,27.53623188405797,14.279999999999953,28.91304347826087,17.51807692307688C30.28985507246377,20.756153846153804,31.666666666666668,21.09153846153843,33.04347826086956,21.58769230769228C34.42028985507246,22.083846153846128,35.79710144927537,22.740769230769203,37.17391304347826,22.94346153846151C38.550724637681164,23.14615384615382,39.927536231884055,22.89461538461536,41.30434782608695,22.52615384615382C42.68115942028985,22.157692307692287,44.05797101449275,21.672307692307673,45.43478260869565,21.499999999999982C46.811594202898554,21.32769230769229,48.188405797101446,21.46846153846151,49.565217391304344,22.2203846153846C50.94202898550724,22.97230769230768,52.31884057971015,24.335384615384623,53.69565217391304,25.3396153846154C55.07246376811594,26.343846153846172,56.44927536231884,26.989230769230783,57.82608695652174,27.38115384615386C59.20289855072465,27.77307692307694,60.57971014492754,27.911538461538488,61.95652173913044,27.71038461538464C63.333333333333336,27.509230769230793,64.71014492753623,26.96846153846155,66.08695652173913,26.53653846153847C67.46376811594202,26.104615384615396,68.84057971014492,25.781538461538485,70.21739130434783,25.803461538461566C71.59420289855073,25.825384615384653,72.97101449275362,26.192307692307725,74.34782608695652,26.151538461538497C75.72463768115942,26.110769230769268,77.10144927536233,25.66230769230774,78.4782608695652,25.4865384615385C79.85507246376811,25.310769230769264,81.23188405797102,25.407692307692326,82.60869565217392,25.295769230769235C83.98550724637681,25.183846153846144,85.3623188405797,24.863076923076907,86.73913043478262,24.43884615384613C88.1159420289855,24.014615384615354,89.49275362318842,23.486923076923038,90.86956521739131,23.62923076923074C92.2463768115942,23.771538461538444,93.62318840579711,24.583846153846167,94.31159420289855,24.990000000000023L95,25.396153846153886" stroke="#007dff" fill="transparent" stroke-width="1" class="strokePath"></path></svg></p>
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

export default Eth

