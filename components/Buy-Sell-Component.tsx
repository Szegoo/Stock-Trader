import { useState } from "react"
export default ({ handleOrder, buy }) => {
    const [price, setPrice] = useState(0);
    const [eth, setEth] = useState(0);
    return (
        <div className="exchange box">
            <h2>{buy ? "Buy" : "Sell"}</h2>
            <form className="eth-stt">
                <p>
                    <label>Amount in eth</label>
                    <input onChange={(e) => setEth(Number(e.target.value))} />
                </p>
                <p>
                    <label>{buy ? "Price per share" : "Shares"}</label>
                    <input onChange={(e) => setPrice(Number(e.target.value))} />
                </p>
                <p>
                    After filling this out you need to wait
                    for somebody to fill in this orders.
                    Be patient 'till then
                </p>
                <p>
                    <button onClick={(e) => {
                        e.preventDefault();
                        handleOrder(price, eth).then(() => {
                            console.log('done');
                        })
                    }}>{buy ? "Make A Buy Order" : "Make A Sell Order"}</button>
                </p>
            </form>
        </div>
    )
}