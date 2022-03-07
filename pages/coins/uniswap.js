import styles from '../../styles/Coins.module.css'

import { useState, useEffect } from 'react'

function Uniswap() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=uniswap&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24%2C7d').then((res) => res.json()).then((data) => {
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
                                <p className={styles.coin__low_24}><svg width="95" height="30"><defs><linearGradient id="area-gradientCAKEUSDT#007dff" x2="1" y2="1"><stop offset="10%" stop-color="#007dff" stop-opacity="0.01"></stop><stop offset="100%" stop-color="#007dff" stop-opacity="0.5"></stop></linearGradient></defs><path d="M0,0.8999999999999442L0.6884057971014492,1.399999999999949C1.3768115942028984,1.8999999999999542,2.753623188405797,2.8999999999999635,4.130434782608695,3.799999999999969C5.507246376811594,4.699999999999974,6.884057971014492,5.499999999999975,8.26086956521739,5.483333333333302C9.63768115942029,5.4666666666666295,11.014492753623188,4.633333333333284,12.391304347826086,4.733333333333287C13.768115942028984,4.833333333333292,15.144927536231883,5.866666666666646,16.52173913043478,7.899999999999978C17.89855072463768,9.93333333333331,19.27536231884058,12.966666666666624,20.652173913043477,14.899999999999954C22.028985507246375,16.833333333333282,23.40579710144927,17.66666666666663,24.782608695652172,18.299999999999965C26.159420289855074,18.933333333333305,27.53623188405797,19.366666666666635,28.91304347826087,19.616666666666628C30.28985507246377,19.866666666666625,31.666666666666668,19.933333333333284,33.04347826086956,21.049999999999955C34.42028985507246,22.166666666666625,35.79710144927537,24.333333333333304,37.17391304347826,25.266666666666637C38.550724637681164,26.19999999999997,39.927536231884055,25.89999999999996,41.30434782608695,24.31666666666663C42.68115942028985,22.733333333333302,44.05797101449275,19.86666666666665,45.43478260869565,20.53333333333332C46.811594202898554,21.19999999999999,48.188405797101446,25.399999999999974,49.565217391304344,26.84999999999997C50.94202898550724,28.299999999999965,52.31884057971015,26.99999999999997,53.69565217391304,23.79999999999997C55.07246376811594,20.599999999999962,56.44927536231884,15.499999999999945,57.82608695652174,13.416666666666613C59.20289855072465,11.333333333333277,60.57971014492754,12.266666666666625,61.95652173913044,13.783333333333296C63.333333333333336,15.299999999999967,64.71014492753623,17.39999999999996,66.08695652173913,19.199999999999953C67.46376811594202,20.999999999999947,68.84057971014492,22.499999999999947,70.21739130434783,22.499999999999947C71.59420289855073,22.499999999999947,72.97101449275362,20.999999999999947,74.34782608695652,18.049999999999955C75.72463768115942,15.099999999999959,77.10144927536233,10.699999999999967,78.4782608695652,9.116666666666637C79.85507246376811,7.5333333333333075,81.23188405797102,8.766666666666639,82.60869565217392,9.416666666666636C83.98550724637681,10.066666666666631,85.3623188405797,10.13333333333329,86.73913043478262,10.933333333333293C88.1159420289855,11.733333333333292,89.49275362318842,13.266666666666637,90.86956521739131,13.183333333333303C92.2463768115942,13.099999999999971,93.62318840579711,11.399999999999963,94.31159420289855,10.549999999999962L95,9.699999999999957L95,610.0000000000002L94.31159420289855,610.0000000000001C93.62318840579711,610.0000000000002,92.2463768115942,610.0000000000002,90.86956521739131,610.0000000000001C89.49275362318842,610.0000000000002,88.1159420289855,610.0000000000002,86.73913043478261,610.0000000000001C85.3623188405797,610.0000000000002,83.98550724637681,610.0000000000002,82.60869565217392,610.0000000000001C81.23188405797102,610.0000000000002,79.85507246376811,610.0000000000002,78.4782608695652,610.0000000000001C77.10144927536233,610.0000000000002,75.72463768115942,610.0000000000002,74.34782608695653,610.0000000000001C72.97101449275362,610.0000000000002,71.59420289855073,610.0000000000002,70.21739130434783,610.0000000000001C68.84057971014492,610.0000000000002,67.46376811594202,610.0000000000002,66.08695652173913,610.0000000000001C64.71014492753623,610.0000000000002,63.333333333333336,610.0000000000002,61.95652173913044,610.0000000000001C60.57971014492754,610.0000000000002,59.20289855072465,610.0000000000002,57.82608695652174,610.0000000000001C56.44927536231884,610.0000000000002,55.07246376811594,610.0000000000002,53.69565217391304,610.0000000000001C52.31884057971015,610.0000000000002,50.94202898550724,610.0000000000002,49.565217391304344,610.0000000000001C48.188405797101446,610.0000000000002,46.811594202898554,610.0000000000002,45.434782608695656,610.0000000000001C44.05797101449275,610.0000000000002,42.68115942028985,610.0000000000002,41.30434782608696,610.0000000000001C39.927536231884055,610.0000000000002,38.550724637681164,610.0000000000002,37.17391304347826,610.0000000000001C35.79710144927537,610.0000000000002,34.42028985507246,610.0000000000002,33.04347826086956,610.0000000000001C31.666666666666668,610.0000000000002,30.28985507246377,610.0000000000002,28.913043478260875,610.0000000000001C27.53623188405797,610.0000000000002,26.159420289855074,610.0000000000002,24.782608695652172,610.0000000000001C23.40579710144927,610.0000000000002,22.028985507246375,610.0000000000002,20.652173913043477,610.0000000000001C19.27536231884058,610.0000000000002,17.89855072463768,610.0000000000002,16.52173913043478,610.0000000000001C15.144927536231883,610.0000000000002,13.768115942028984,610.0000000000002,12.391304347826086,610.0000000000001C11.014492753623188,610.0000000000002,9.63768115942029,610.0000000000002,8.26086956521739,610.0000000000001C6.884057971014492,610.0000000000002,5.507246376811594,610.0000000000002,4.130434782608695,610.0000000000001C2.753623188405797,610.0000000000002,1.3768115942028984,610.0000000000002,0.6884057971014492,610.0000000000001L0,610.0000000000002Z" fill="url(#area-gradientCAKEUSDT#007dff)" class="strokePath"></path><path d="M0,0.8999999999999442L0.6884057971014492,1.399999999999949C1.3768115942028984,1.8999999999999542,2.753623188405797,2.8999999999999635,4.130434782608695,3.799999999999969C5.507246376811594,4.699999999999974,6.884057971014492,5.499999999999975,8.26086956521739,5.483333333333302C9.63768115942029,5.4666666666666295,11.014492753623188,4.633333333333284,12.391304347826086,4.733333333333287C13.768115942028984,4.833333333333292,15.144927536231883,5.866666666666646,16.52173913043478,7.899999999999978C17.89855072463768,9.93333333333331,19.27536231884058,12.966666666666624,20.652173913043477,14.899999999999954C22.028985507246375,16.833333333333282,23.40579710144927,17.66666666666663,24.782608695652172,18.299999999999965C26.159420289855074,18.933333333333305,27.53623188405797,19.366666666666635,28.91304347826087,19.616666666666628C30.28985507246377,19.866666666666625,31.666666666666668,19.933333333333284,33.04347826086956,21.049999999999955C34.42028985507246,22.166666666666625,35.79710144927537,24.333333333333304,37.17391304347826,25.266666666666637C38.550724637681164,26.19999999999997,39.927536231884055,25.89999999999996,41.30434782608695,24.31666666666663C42.68115942028985,22.733333333333302,44.05797101449275,19.86666666666665,45.43478260869565,20.53333333333332C46.811594202898554,21.19999999999999,48.188405797101446,25.399999999999974,49.565217391304344,26.84999999999997C50.94202898550724,28.299999999999965,52.31884057971015,26.99999999999997,53.69565217391304,23.79999999999997C55.07246376811594,20.599999999999962,56.44927536231884,15.499999999999945,57.82608695652174,13.416666666666613C59.20289855072465,11.333333333333277,60.57971014492754,12.266666666666625,61.95652173913044,13.783333333333296C63.333333333333336,15.299999999999967,64.71014492753623,17.39999999999996,66.08695652173913,19.199999999999953C67.46376811594202,20.999999999999947,68.84057971014492,22.499999999999947,70.21739130434783,22.499999999999947C71.59420289855073,22.499999999999947,72.97101449275362,20.999999999999947,74.34782608695652,18.049999999999955C75.72463768115942,15.099999999999959,77.10144927536233,10.699999999999967,78.4782608695652,9.116666666666637C79.85507246376811,7.5333333333333075,81.23188405797102,8.766666666666639,82.60869565217392,9.416666666666636C83.98550724637681,10.066666666666631,85.3623188405797,10.13333333333329,86.73913043478262,10.933333333333293C88.1159420289855,11.733333333333292,89.49275362318842,13.266666666666637,90.86956521739131,13.183333333333303C92.2463768115942,13.099999999999971,93.62318840579711,11.399999999999963,94.31159420289855,10.549999999999962L95,9.699999999999957" stroke="#007dff" fill="transparent" stroke-width="1" class="strokePath"></path></svg></p>
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

export default Uniswap

