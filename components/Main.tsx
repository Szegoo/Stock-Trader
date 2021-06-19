import React, { useState } from "react";
import { OrderComponent } from "./OrderComponent"
import { useSelector } from "react-redux";
import { ReduxState } from '../redux/orders';
export const Main = ({ orders }) => {
    const language = useSelector<ReduxState>(state => state.language.language);
    //if 0 -> buy if 1 -> sell if 2 -> choose
    const [option, setOption] = useState(2);
    const renderComponent = (userOption) => {
        switch (userOption) {
            case 2:
                return (
                    <div className="choose">
                        <h2>{language ? "Da li hoces da" : "Do you want to"}:</h2>
                        <button onClick={() => setOption(0)}>
                            {language ? "Kupis" : "Buy"}
                        </button>
                        <p>{
                            language ? "ili da" : "or"
                        }</p>
                        <button onClick={() => setOption(1)}>{
                            language ? "Prodas" : "Sell"
                        }</button>
                    </div>
                )
            case 0:
                return (
                    <div className="orders-container">
                        {orders[0] && orders.map((order, indx) =>
                            <>
                                {orders[indx].orderType !== "2" && orders[indx].orderType !== "0" &&
                                    <div key={indx}>
                                        <OrderComponent id={indx} order={order} />
                                    </div>
                                }
                            </>
                        )
                        }
                    </div >
                )
            case 1:
                return (
                    <div className="orders-container">
                        {orders[0] && orders.map((order, indx) =>
                            <>
                                {orders[indx].orderType !== "2" && orders[indx].orderType !== "1" &&
                                    <div key={indx}>
                                        <OrderComponent id={indx} order={order} />
                                    </div>
                                }
                            </>
                        )}
                    </div>
                )
        }
    }
    return (
        <div>
            {renderComponent(option)}
        </div>
    )
}