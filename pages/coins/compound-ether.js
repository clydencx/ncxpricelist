import styles from '../../styles/Coins.module.css'

import { useState, useEffect } from 'react'

function CompoundEther() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=compound-ether&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24%2C7d').then((res) => res.json()).then((data) => {
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
                                <img className={styles.coin_logo} src="https://assets.coingecko.com/coins/images/10643/large/ceth2.JPG" />
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
                                <p className={styles.coin__graph}><svg width="95" height="30"><defs><linearGradient id="area-gradientMOVDUSDT#007dff" x2="1" y2="1"><stop offset="10%" stop-color="#007dff" stop-opacity="0.01"></stop><stop offset="100%" stop-color="#007dff" stop-opacity="0.5"></stop></linearGradient></defs><path d="M0,3.633333333333325L0.6884057971014492,3.6388888888888817C1.3768115942028984,3.6444444444444373,2.753623188405797,3.65555555555555,4.130434782608695,3.622222222222218C5.507246376811594,3.588888888888885,6.884057971014492,3.5111111111111057,8.26086956521739,3.455555555555548C9.63768115942029,3.3999999999999897,11.014492753623188,3.3666666666666525,12.391304347826086,3.327777777777763C13.768115942028984,3.2888888888888737,15.144927536231883,3.2444444444444316,16.52173913043478,3.0333333333333212C17.89855072463768,2.822222222222211,19.27536231884058,2.444444444444432,20.652173913043477,2.2111111111110966C22.028985507246375,1.9777777777777616,23.40579710144927,1.8888888888888697,24.782608695652172,1.8277777777777604C26.159420289855074,1.7666666666666508,27.53623188405797,1.7333333333333234,28.91304347826087,1.7055555555555468C30.28985507246377,1.6777777777777703,31.666666666666668,1.6555555555555446,33.04347826086956,1.977777777777766C34.42028985507246,2.299999999999988,35.79710144927537,2.966666666666656,37.17391304347826,3.483333333333324C38.550724637681164,3.9999999999999925,39.927536231884055,4.36666666666666,41.30434782608695,4.783333333333324C42.68115942028985,5.199999999999988,44.05797101449275,5.666666666666649,45.43478260869565,5.955555555555537C46.811594202898554,6.244444444444426,48.188405797101446,6.355555555555543,49.565217391304344,6.455555555555546C50.94202898550724,6.55555555555555,52.31884057971015,6.644444444444441,53.69565217391304,6.705555555555551C55.07246376811594,6.766666666666661,56.44927536231884,6.799999999999989,57.82608695652174,6.772222222222207C59.20289855072465,6.744444444444426,60.57971014492754,6.655555555555535,61.95652173913044,7.972222222222204C63.333333333333336,9.288888888888872,64.71014492753623,12.0111111111111,66.08695652173913,13.594444444444436C67.46376811594202,15.177777777777772,68.84057971014492,15.622222222222218,70.21739130434783,15.755555555555551C71.59420289855073,15.88888888888888,72.97101449275362,15.7111111111111,74.34782608695652,15.927777777777765C75.72463768115942,16.14444444444443,77.10144927536233,16.75555555555555,78.4782608695652,18.477777777777774C79.85507246376811,20.2,81.23188405797102,23.03333333333333,82.60869565217392,24.805555555555554C83.98550724637681,26.577777777777772,85.3623188405797,27.28888888888888,86.73913043478262,27.62777777777777C88.1159420289855,27.966666666666654,89.49275362318842,27.93333333333332,90.86956521739131,27.894444444444428C92.2463768115942,27.85555555555554,93.62318840579711,27.8111111111111,94.31159420289855,27.788888888888877L95,27.76666666666666L95,160.00000000000003L94.31159420289855,160.00000000000003C93.62318840579711,160.00000000000003,92.2463768115942,160.00000000000003,90.86956521739131,160.00000000000003C89.49275362318842,160.00000000000003,88.1159420289855,160.00000000000003,86.73913043478261,160.00000000000003C85.3623188405797,160.00000000000003,83.98550724637681,160.00000000000003,82.60869565217392,160.00000000000003C81.23188405797102,160.00000000000003,79.85507246376811,160.00000000000003,78.4782608695652,160.00000000000003C77.10144927536233,160.00000000000003,75.72463768115942,160.00000000000003,74.34782608695653,160.00000000000003C72.97101449275362,160.00000000000003,71.59420289855073,160.00000000000003,70.21739130434783,160.00000000000003C68.84057971014492,160.00000000000003,67.46376811594202,160.00000000000003,66.08695652173913,160.00000000000003C64.71014492753623,160.00000000000003,63.333333333333336,160.00000000000003,61.95652173913044,160.00000000000003C60.57971014492754,160.00000000000003,59.20289855072465,160.00000000000003,57.82608695652174,160.00000000000003C56.44927536231884,160.00000000000003,55.07246376811594,160.00000000000003,53.69565217391304,160.00000000000003C52.31884057971015,160.00000000000003,50.94202898550724,160.00000000000003,49.565217391304344,160.00000000000003C48.188405797101446,160.00000000000003,46.811594202898554,160.00000000000003,45.434782608695656,160.00000000000003C44.05797101449275,160.00000000000003,42.68115942028985,160.00000000000003,41.30434782608696,160.00000000000003C39.927536231884055,160.00000000000003,38.550724637681164,160.00000000000003,37.17391304347826,160.00000000000003C35.79710144927537,160.00000000000003,34.42028985507246,160.00000000000003,33.04347826086956,160.00000000000003C31.666666666666668,160.00000000000003,30.28985507246377,160.00000000000003,28.913043478260875,160.00000000000003C27.53623188405797,160.00000000000003,26.159420289855074,160.00000000000003,24.782608695652172,160.00000000000003C23.40579710144927,160.00000000000003,22.028985507246375,160.00000000000003,20.652173913043477,160.00000000000003C19.27536231884058,160.00000000000003,17.89855072463768,160.00000000000003,16.52173913043478,160.00000000000003C15.144927536231883,160.00000000000003,13.768115942028984,160.00000000000003,12.391304347826086,160.00000000000003C11.014492753623188,160.00000000000003,9.63768115942029,160.00000000000003,8.26086956521739,160.00000000000003C6.884057971014492,160.00000000000003,5.507246376811594,160.00000000000003,4.130434782608695,160.00000000000003C2.753623188405797,160.00000000000003,1.3768115942028984,160.00000000000003,0.6884057971014492,160.00000000000003L0,160.00000000000003Z" fill="url(#area-gradientMOVDUSDT#007dff)" class="strokePath"></path><path d="M0,3.633333333333325L0.6884057971014492,3.6388888888888817C1.3768115942028984,3.6444444444444373,2.753623188405797,3.65555555555555,4.130434782608695,3.622222222222218C5.507246376811594,3.588888888888885,6.884057971014492,3.5111111111111057,8.26086956521739,3.455555555555548C9.63768115942029,3.3999999999999897,11.014492753623188,3.3666666666666525,12.391304347826086,3.327777777777763C13.768115942028984,3.2888888888888737,15.144927536231883,3.2444444444444316,16.52173913043478,3.0333333333333212C17.89855072463768,2.822222222222211,19.27536231884058,2.444444444444432,20.652173913043477,2.2111111111110966C22.028985507246375,1.9777777777777616,23.40579710144927,1.8888888888888697,24.782608695652172,1.8277777777777604C26.159420289855074,1.7666666666666508,27.53623188405797,1.7333333333333234,28.91304347826087,1.7055555555555468C30.28985507246377,1.6777777777777703,31.666666666666668,1.6555555555555446,33.04347826086956,1.977777777777766C34.42028985507246,2.299999999999988,35.79710144927537,2.966666666666656,37.17391304347826,3.483333333333324C38.550724637681164,3.9999999999999925,39.927536231884055,4.36666666666666,41.30434782608695,4.783333333333324C42.68115942028985,5.199999999999988,44.05797101449275,5.666666666666649,45.43478260869565,5.955555555555537C46.811594202898554,6.244444444444426,48.188405797101446,6.355555555555543,49.565217391304344,6.455555555555546C50.94202898550724,6.55555555555555,52.31884057971015,6.644444444444441,53.69565217391304,6.705555555555551C55.07246376811594,6.766666666666661,56.44927536231884,6.799999999999989,57.82608695652174,6.772222222222207C59.20289855072465,6.744444444444426,60.57971014492754,6.655555555555535,61.95652173913044,7.972222222222204C63.333333333333336,9.288888888888872,64.71014492753623,12.0111111111111,66.08695652173913,13.594444444444436C67.46376811594202,15.177777777777772,68.84057971014492,15.622222222222218,70.21739130434783,15.755555555555551C71.59420289855073,15.88888888888888,72.97101449275362,15.7111111111111,74.34782608695652,15.927777777777765C75.72463768115942,16.14444444444443,77.10144927536233,16.75555555555555,78.4782608695652,18.477777777777774C79.85507246376811,20.2,81.23188405797102,23.03333333333333,82.60869565217392,24.805555555555554C83.98550724637681,26.577777777777772,85.3623188405797,27.28888888888888,86.73913043478262,27.62777777777777C88.1159420289855,27.966666666666654,89.49275362318842,27.93333333333332,90.86956521739131,27.894444444444428C92.2463768115942,27.85555555555554,93.62318840579711,27.8111111111111,94.31159420289855,27.788888888888877L95,27.76666666666666" stroke="#007dff" fill="transparent" stroke-width="1" class="strokePath"></path></svg></p>
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

export default CompoundEther

