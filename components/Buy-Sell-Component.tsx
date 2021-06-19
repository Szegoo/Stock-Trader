import { useState } from "react";
import { useSelector } from "react-redux";

interface ReduxState {
    language: {
        language: boolean
    }
}
export default ({ handleOrder, buy }) => {
    let language = useSelector<ReduxState>(state => state.language.language);
    const [price, setPrice] = useState(0);
    const [eth, setEth] = useState(0);
    return (
        <div className="exchange box">
            <h2>{buy ? [language ? "Kupi" : "Buy"] : [language ? "Prodaj" : "Sell"]}</h2>
            <form className="eth-stt">
                <p>
                    <label>{language ? "Cena u ETH" : "Price in eth"}</label>
                    <input onChange={(e) => setEth(Number(e.target.value))} />
                </p>
                <p>
                    <label>{buy ? [language ? "Cena po deonici" : "Price per share"] : [language ? "Broj deonica" : "Number of Shares"]}</label>
                    <input onChange={(e) => setPrice(Number(e.target.value))} />
                </p>
                <p>
                    {language ? "Nakon što ovo popunite, morate sačekati da neko ispuni ove naredbe."
                        + "Budite strpljivi do tada" : "After filling this out you need to wait" +
                    "for somebody to fill in this orders. Be patient 'till then"}
                </p>
                <p>
                    <button onClick={(e) => {
                        e.preventDefault();
                        handleOrder(price, eth).then(() => {
                            console.log('done');
                        })
                    }}>{buy ? [language ? "Napravi Porudžinu Za Kupovinu" : "Make A Buy Order"] :
                        [language ? "Napravi Porudžbinu Za Prodaju" : "Make A Sell Order"]}</button>
                </p>
            </form>
        </div>
    )
}