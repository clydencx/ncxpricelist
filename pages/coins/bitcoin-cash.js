import styles from '../../styles/Coins.module.css'

import { useState, useEffect } from 'react'

function BitcoinCash() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin-cash&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24%2C7d').then((res) => res.json()).then((data) => {
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
                                <img className={styles.coin_logo} src="/icons/bch.png" />
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
                                <p className={styles.coin__graph}><svg width="95" height="30"><defs><linearGradient id="area-gradientBNBUSDT#007dff" x2="1" y2="1"><stop offset="10%" stop-color="#007dff" stop-opacity="0.01"></stop><stop offset="100%" stop-color="#007dff" stop-opacity="0.5"></stop></linearGradient></defs><path d="M0,9.683333333333339L0.6884057971014492,9.547222222222224C1.3768115942028984,9.41111111111111,2.753623188405797,9.13888888888888,4.130434782608695,8.530555555555548C5.507246376811594,7.9222222222222145,6.884057971014492,6.977777777777778,8.26086956521739,6.58611111111112C9.63768115942029,6.194444444444463,11.014492753623188,6.355555555555586,12.391304347826086,5.886111111111142C13.768115942028984,5.416666666666699,15.144927536231883,4.316666666666688,16.52173913043478,3.8861111111111284C17.89855072463768,3.4555555555555695,19.27536231884058,3.6944444444444624,20.652173913043477,5.933333333333352C22.028985507246375,8.172222222222242,23.40579710144927,12.411111111111131,24.782608695652172,14.30000000000002C26.159420289855074,16.188888888888915,27.53623188405797,15.727777777777812,28.91304347826087,15.97500000000003C30.28985507246377,16.222222222222246,31.666666666666668,17.177777777777784,33.04347826086956,17.952777777777772C34.42028985507246,18.727777777777764,35.79710144927537,19.32222222222221,37.17391304347826,19.34166666666665C38.550724637681164,19.361111111111097,39.927536231884055,18.80555555555554,41.30434782608695,18.797222222222214C42.68115942028985,18.788888888888888,44.05797101449275,19.327777777777793,45.43478260869565,20.98333333333336C46.811594202898554,22.638888888888925,48.188405797101446,25.41111111111115,49.565217391304344,26.95555555555559C50.94202898550724,28.50000000000004,52.31884057971015,28.816666666666702,53.69565217391304,29.09444444444448C55.07246376811594,29.37222222222226,56.44927536231884,29.611111111111153,57.82608695652174,29.70277777777781C59.20289855072465,29.794444444444476,60.57971014492754,29.73888888888891,61.95652173913044,29.711111111111123C63.333333333333336,29.683333333333337,64.71014492753623,29.683333333333337,66.08695652173913,28.82222222222222C67.46376811594202,27.961111111111105,68.84057971014492,26.23888888888887,70.21739130434783,24.858333333333306C71.59420289855073,23.477777777777742,72.97101449275362,22.43888888888885,74.34782608695652,21.769444444444417C75.72463768115942,21.09999999999998,77.10144927536233,20.8,78.4782608695652,20.269444444444456C79.85507246376811,19.738888888888905,81.23188405797102,18.977777777777792,82.60869565217392,18.51944444444445C83.98550724637681,18.061111111111106,85.3623188405797,17.905555555555534,86.73913043478262,18.086111111111084C88.1159420289855,18.266666666666634,89.49275362318842,18.783333333333303,90.86956521739131,19.449999999999978C92.2463768115942,20.116666666666656,93.62318840579711,20.933333333333337,94.31159420289855,21.34166666666668L95,21.750000000000018L95,640L94.31159420289855,640C93.62318840579711,640,92.2463768115942,640,90.86956521739131,640C89.49275362318842,640,88.1159420289855,640,86.73913043478261,640C85.3623188405797,640,83.98550724637681,640,82.60869565217392,640C81.23188405797102,640,79.85507246376811,640,78.4782608695652,640C77.10144927536233,640,75.72463768115942,640,74.34782608695653,640C72.97101449275362,640,71.59420289855073,640,70.21739130434783,640C68.84057971014492,640,67.46376811594202,640,66.08695652173913,640C64.71014492753623,640,63.333333333333336,640,61.95652173913044,640C60.57971014492754,640,59.20289855072465,640,57.82608695652174,640C56.44927536231884,640,55.07246376811594,640,53.69565217391304,640C52.31884057971015,640,50.94202898550724,640,49.565217391304344,640C48.188405797101446,640,46.811594202898554,640,45.434782608695656,640C44.05797101449275,640,42.68115942028985,640,41.30434782608696,640C39.927536231884055,640,38.550724637681164,640,37.17391304347826,640C35.79710144927537,640,34.42028985507246,640,33.04347826086956,640C31.666666666666668,640,30.28985507246377,640,28.913043478260875,640C27.53623188405797,640,26.159420289855074,640,24.782608695652172,640C23.40579710144927,640,22.028985507246375,640,20.652173913043477,640C19.27536231884058,640,17.89855072463768,640,16.52173913043478,640C15.144927536231883,640,13.768115942028984,640,12.391304347826086,640C11.014492753623188,640,9.63768115942029,640,8.26086956521739,640C6.884057971014492,640,5.507246376811594,640,4.130434782608695,640C2.753623188405797,640,1.3768115942028984,640,0.6884057971014492,640L0,640Z" fill="url(#area-gradientBNBUSDT#007dff)" class="strokePath"></path><path d="M0,9.683333333333339L0.6884057971014492,9.547222222222224C1.3768115942028984,9.41111111111111,2.753623188405797,9.13888888888888,4.130434782608695,8.530555555555548C5.507246376811594,7.9222222222222145,6.884057971014492,6.977777777777778,8.26086956521739,6.58611111111112C9.63768115942029,6.194444444444463,11.014492753623188,6.355555555555586,12.391304347826086,5.886111111111142C13.768115942028984,5.416666666666699,15.144927536231883,4.316666666666688,16.52173913043478,3.8861111111111284C17.89855072463768,3.4555555555555695,19.27536231884058,3.6944444444444624,20.652173913043477,5.933333333333352C22.028985507246375,8.172222222222242,23.40579710144927,12.411111111111131,24.782608695652172,14.30000000000002C26.159420289855074,16.188888888888915,27.53623188405797,15.727777777777812,28.91304347826087,15.97500000000003C30.28985507246377,16.222222222222246,31.666666666666668,17.177777777777784,33.04347826086956,17.952777777777772C34.42028985507246,18.727777777777764,35.79710144927537,19.32222222222221,37.17391304347826,19.34166666666665C38.550724637681164,19.361111111111097,39.927536231884055,18.80555555555554,41.30434782608695,18.797222222222214C42.68115942028985,18.788888888888888,44.05797101449275,19.327777777777793,45.43478260869565,20.98333333333336C46.811594202898554,22.638888888888925,48.188405797101446,25.41111111111115,49.565217391304344,26.95555555555559C50.94202898550724,28.50000000000004,52.31884057971015,28.816666666666702,53.69565217391304,29.09444444444448C55.07246376811594,29.37222222222226,56.44927536231884,29.611111111111153,57.82608695652174,29.70277777777781C59.20289855072465,29.794444444444476,60.57971014492754,29.73888888888891,61.95652173913044,29.711111111111123C63.333333333333336,29.683333333333337,64.71014492753623,29.683333333333337,66.08695652173913,28.82222222222222C67.46376811594202,27.961111111111105,68.84057971014492,26.23888888888887,70.21739130434783,24.858333333333306C71.59420289855073,23.477777777777742,72.97101449275362,22.43888888888885,74.34782608695652,21.769444444444417C75.72463768115942,21.09999999999998,77.10144927536233,20.8,78.4782608695652,20.269444444444456C79.85507246376811,19.738888888888905,81.23188405797102,18.977777777777792,82.60869565217392,18.51944444444445C83.98550724637681,18.061111111111106,85.3623188405797,17.905555555555534,86.73913043478262,18.086111111111084C88.1159420289855,18.266666666666634,89.49275362318842,18.783333333333303,90.86956521739131,19.449999999999978C92.2463768115942,20.116666666666656,93.62318840579711,20.933333333333337,94.31159420289855,21.34166666666668L95,21.750000000000018" stroke="#007dff" fill="transparent" stroke-width="1" class="strokePath"></path></svg></p>
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

export default BitcoinCash

