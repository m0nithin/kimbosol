import React from 'react'
import '../styles/Banner.scss'
import kimbo_homepage from '../assets/KIMBO_PIXEL_NOBGl.png'

const ImageTextPage = () => {
    return ( <
        div className = 'banner' >
        <
        div className = "image-text-container" >
        <
        div className = "text-container" >
        <
        h1 > $KIMBO < /h1> <
        p > KIMBO is COQ 's best friend</p> <
        /div> <
        img src = {
            kimbo_homepage
        }
        alt = "Description of the image"
        className = "page-image" / >
        <
        div className = "text-container" >
        <
        p > 0 Team allocation.taxes or presale. < /p> <
        p > Like $COQ, a fair community token < /p> <
        /div> <
        div className = "text-container" >
        <
        p > 69, 420, 000, 000.00, total $kimbo < /p> <
        p > Contract: 0x184ff13B3EBCB25Be44e860163A5D8391Dd568c1 < /p> <
        p > Contract renounced < /p> <
        p > Liquidity Locked < /p> <
        a href = 'https://traderjoexyz.com/avalanche/trade?inputCurrency=AVAX&outputCurrency=0x184ff13B3EBCB25Be44e860163A5D8391Dd568c1'
        target = 'blank' > BUY $KIMBO < /a> <
        a href = 'https://dexscreener.com/avalanche/0x184ff13B3EBCB25Be44e860163A5D8391Dd568c1'
        target = 'blank' > Dexscreener < /a> <
        a href = 'https://twitter.com/KimboAvax'
        target = 'blank' > Twitter < /a> <
        a href = 'https://t.me/KIMBOavax'
        target = 'blank' > Telegram < /a> <
        /div> <
        div className = "text-container-footer" >
        $KIMBO is a meme coin with no intrinsic value or expectation of financial
        return .There is no formal team or roadmap.The coin is completely useless and
        for entertainment purposes only. <
        /div> <
        /div> <
        /div>
    );
};

export default ImageTextPage;