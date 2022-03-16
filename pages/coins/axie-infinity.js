import styles from '../../styles/Coins.module.css'

import { useState, useEffect } from 'react'

function AxieInfinity() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=axie-infinity&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24%2C7d').then((res) => res.json()).then((data) => {
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
                                <img className={styles.coin_logo} src="https://assets.coingecko.com/coins/images/13029/large/axie_infinity_logo.png" />
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
                                <p className={styles.coin__graph}><svg width="95" height="30"><defs><linearGradient id="area-gradientAXSUSDT#45B26B" x2="1" y2="1"><stop offset="10%" stop-color="#45B26B" stop-opacity="0.01"></stop><stop offset="100%" stop-color="#45B26B" stop-opacity="0.5"></stop></linearGradient></defs><path d="M0,2.3154545454545703L0.6884057971014492,5.049090909090922C1.3768115942028984,7.782727272727274,2.753623188405797,13.249999999999979,4.130434782608695,15.535227272727246C5.507246376811594,17.82045454545451,6.884057971014492,16.923636363636337,8.26086956521739,16.107045454545435C9.63768115942029,15.290454545454532,11.014492753623188,14.5540909090909,12.391304347826086,14.100227272727262C13.768115942028984,13.646363636363626,15.144927536231883,13.474999999999987,16.52173913043478,14.632045454545432C17.89855072463768,15.789090909090879,19.27536231884058,18.274545454545407,20.652173913043477,20.24386363636359C22.028985507246375,22.213181818181777,23.40579710144927,23.666363636363613,24.782608695652172,24.82272727272725C26.159420289855074,25.979090909090885,27.53623188405797,26.838636363636326,28.91304347826087,27.020909090909043C30.28985507246377,27.203181818181765,31.666666666666668,26.708181818181775,33.04347826086956,26.212727272727236C34.42028985507246,25.7172727272727,35.79710144927537,25.22136363636362,37.17391304347826,24.945909090909073C38.550724637681164,24.670454545454522,39.927536231884055,24.615454545454508,41.30434782608695,24.093409090909052C42.68115942028985,23.571363636363596,44.05797101449275,22.5822727272727,45.43478260869565,22.03159090909088C46.811594202898554,21.480909090909062,48.188405797101446,21.368636363636323,49.565217391304344,21.309772727272684C50.94202898550724,21.250909090909047,52.31884057971015,21.245454545454514,53.69565217391304,20.647727272727245C55.07246376811594,20.04999999999998,56.44927536231884,18.859999999999978,57.82608695652174,18.778181818181793C59.20289855072465,18.69636363636361,60.57971014492754,19.72272727272724,61.95652173913044,21.469090909090877C63.333333333333336,23.21545454545451,64.71014492753623,25.681818181818144,66.08695652173913,26.659772727272696C67.46376811594202,27.637727272727243,68.84057971014492,27.12727272727271,70.21739130434783,25.96181818181817C71.59420289855073,24.796363636363626,72.97101449275362,22.97590909090908,74.34782608695652,21.825454545454537C75.72463768115942,20.674999999999994,77.10144927536233,20.194545454545455,78.4782608695652,20.090454545454545C79.85507246376811,19.986363636363638,81.23188405797102,20.25863636363636,82.60869565217392,20.530454545454536C83.98550724637681,20.80227272727271,85.3623188405797,21.07363636363635,86.73913043478262,21.69386363636362C88.1159420289855,22.31409090909089,89.49275362318842,23.283181818181802,90.86956521739131,22.555454545454527C92.2463768115942,21.82772727272726,93.62318840579711,19.403181818181803,94.31159420289855,18.190909090909077L95,16.97863636363635L95,668.1818181818173L94.31159420289855,668.1818181818172C93.62318840579711,668.1818181818173,92.2463768115942,668.1818181818173,90.86956521739131,668.1818181818172C89.49275362318842,668.1818181818173,88.1159420289855,668.1818181818173,86.73913043478261,668.1818181818172C85.3623188405797,668.1818181818173,83.98550724637681,668.1818181818173,82.60869565217392,668.1818181818172C81.23188405797102,668.1818181818173,79.85507246376811,668.1818181818173,78.4782608695652,668.1818181818172C77.10144927536233,668.1818181818173,75.72463768115942,668.1818181818173,74.34782608695653,668.1818181818172C72.97101449275362,668.1818181818173,71.59420289855073,668.1818181818173,70.21739130434783,668.1818181818172C68.84057971014492,668.1818181818173,67.46376811594202,668.1818181818173,66.08695652173913,668.1818181818172C64.71014492753623,668.1818181818173,63.333333333333336,668.1818181818173,61.95652173913044,668.1818181818172C60.57971014492754,668.1818181818173,59.20289855072465,668.1818181818173,57.82608695652174,668.1818181818172C56.44927536231884,668.1818181818173,55.07246376811594,668.1818181818173,53.69565217391304,668.1818181818172C52.31884057971015,668.1818181818173,50.94202898550724,668.1818181818173,49.565217391304344,668.1818181818172C48.188405797101446,668.1818181818173,46.811594202898554,668.1818181818173,45.434782608695656,668.1818181818172C44.05797101449275,668.1818181818173,42.68115942028985,668.1818181818173,41.30434782608696,668.1818181818172C39.927536231884055,668.1818181818173,38.550724637681164,668.1818181818173,37.17391304347826,668.1818181818172C35.79710144927537,668.1818181818173,34.42028985507246,668.1818181818173,33.04347826086956,668.1818181818172C31.666666666666668,668.1818181818173,30.28985507246377,668.1818181818173,28.913043478260875,668.1818181818172C27.53623188405797,668.1818181818173,26.159420289855074,668.1818181818173,24.782608695652172,668.1818181818172C23.40579710144927,668.1818181818173,22.028985507246375,668.1818181818173,20.652173913043477,668.1818181818172C19.27536231884058,668.1818181818173,17.89855072463768,668.1818181818173,16.52173913043478,668.1818181818172C15.144927536231883,668.1818181818173,13.768115942028984,668.1818181818173,12.391304347826086,668.1818181818172C11.014492753623188,668.1818181818173,9.63768115942029,668.1818181818173,8.26086956521739,668.1818181818172C6.884057971014492,668.1818181818173,5.507246376811594,668.1818181818173,4.130434782608695,668.1818181818172C2.753623188405797,668.1818181818173,1.3768115942028984,668.1818181818173,0.6884057971014492,668.1818181818172L0,668.1818181818173Z" fill="url(#area-gradientAXSUSDT#45B26B)" class="strokePath"></path><path d="M0,2.3154545454545703L0.6884057971014492,5.049090909090922C1.3768115942028984,7.782727272727274,2.753623188405797,13.249999999999979,4.130434782608695,15.535227272727246C5.507246376811594,17.82045454545451,6.884057971014492,16.923636363636337,8.26086956521739,16.107045454545435C9.63768115942029,15.290454545454532,11.014492753623188,14.5540909090909,12.391304347826086,14.100227272727262C13.768115942028984,13.646363636363626,15.144927536231883,13.474999999999987,16.52173913043478,14.632045454545432C17.89855072463768,15.789090909090879,19.27536231884058,18.274545454545407,20.652173913043477,20.24386363636359C22.028985507246375,22.213181818181777,23.40579710144927,23.666363636363613,24.782608695652172,24.82272727272725C26.159420289855074,25.979090909090885,27.53623188405797,26.838636363636326,28.91304347826087,27.020909090909043C30.28985507246377,27.203181818181765,31.666666666666668,26.708181818181775,33.04347826086956,26.212727272727236C34.42028985507246,25.7172727272727,35.79710144927537,25.22136363636362,37.17391304347826,24.945909090909073C38.550724637681164,24.670454545454522,39.927536231884055,24.615454545454508,41.30434782608695,24.093409090909052C42.68115942028985,23.571363636363596,44.05797101449275,22.5822727272727,45.43478260869565,22.03159090909088C46.811594202898554,21.480909090909062,48.188405797101446,21.368636363636323,49.565217391304344,21.309772727272684C50.94202898550724,21.250909090909047,52.31884057971015,21.245454545454514,53.69565217391304,20.647727272727245C55.07246376811594,20.04999999999998,56.44927536231884,18.859999999999978,57.82608695652174,18.778181818181793C59.20289855072465,18.69636363636361,60.57971014492754,19.72272727272724,61.95652173913044,21.469090909090877C63.333333333333336,23.21545454545451,64.71014492753623,25.681818181818144,66.08695652173913,26.659772727272696C67.46376811594202,27.637727272727243,68.84057971014492,27.12727272727271,70.21739130434783,25.96181818181817C71.59420289855073,24.796363636363626,72.97101449275362,22.97590909090908,74.34782608695652,21.825454545454537C75.72463768115942,20.674999999999994,77.10144927536233,20.194545454545455,78.4782608695652,20.090454545454545C79.85507246376811,19.986363636363638,81.23188405797102,20.25863636363636,82.60869565217392,20.530454545454536C83.98550724637681,20.80227272727271,85.3623188405797,21.07363636363635,86.73913043478262,21.69386363636362C88.1159420289855,22.31409090909089,89.49275362318842,23.283181818181802,90.86956521739131,22.555454545454527C92.2463768115942,21.82772727272726,93.62318840579711,19.403181818181803,94.31159420289855,18.190909090909077L95,16.97863636363635" stroke="#45B26B" fill="transparent" stroke-width="1" class="strokePath"></path></svg></p>
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

export default AxieInfinity

