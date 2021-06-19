import React, { useState } from "react";
import { OrderComponent } from "./OrderComponent"
export const Main = ({ orders }) => {
    //if 0 -> buy if 1 -> sell if 2 -> choose
    const [option, setOption] = useState(2);
    const renderComponent = (userOption) => {
        switch (userOption) {
            case 2:
                return (
                    <div className="choose">
                        <h2>Da li hoces da:</h2>
                        <button onClick={() => setOption(0)}>Kupis</button>
                        <p>ili da</p>
                        <button onClick={() => setOption(1)}>Prodas</button>
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