import React from "react";
import { OrderComponent } from "./OrderComponent"
export const Main = ({ orders }) => {
    return (
        <div className="orders-container">
            {orders[0] && orders.map((order, indx) =>
                <>
                    {orders[indx].orderType !== "2" &&
                        <div key={indx}>
                            <OrderComponent id={indx} order={order} />
                        </div>
                    }
                </>
            )}
        </div>
    )
}