import { Order, Shares } from "../interfaces/interfaces"
import React from 'react';
import Router from 'next/router';
interface Props {
	order: Order,
	id: number
}
export const OrderComponent: React.FC<Props> = ({ order, id }) => {
	const shorten = (text: string) => {
		if (text)
			return text.substring(0, 10) + "...";
	}
	console.log(order);
	return (
		<>
			{order ?
				<div onClick={() => Router.push(`/order/?id=${id}`)} className="order">
					<h3>{order.price * Math.pow(10, -18)}ETH</h3>
					<h4>Type: {order.orderType === "1" ? "Buy" : "Sell"}</h4>
					<h3>Ammount: {order.amount}</h3>
					<p>Order Creator: {shorten(order.from)}</p>
				</div>
				: <p>Loading</p>
			}
		</>
	)
}