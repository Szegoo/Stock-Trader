import { Order, Shares } from "../interfaces/interfaces"
import { useSelector } from "react-redux";
import React from 'react';
import Router from 'next/router';
interface Props {
	order: Order,
	id: number
}
interface ReduxState {
	language: {
		language: boolean
	}
}
export const OrderComponent: React.FC<Props> = ({ order, id }) => {
	const language = useSelector<ReduxState>(state => state.language.language);
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
					<h4>{language ? "Tip Porudžbine" : "Order Type"}: {order.orderType == "1" ?
						[language ? "Prodaje" : "Selling"] :
						[language ? "Kupuje" : "Buying"]}</h4>
					<h3>{language ? "Broj deonica" : "Number of shares"}: {order.amount}</h3>
					<p>{language ? "Kreator porudžbine" : "Order Creator"}: {shorten(order.from)}</p>
				</div>
				: <p>Loading</p>
			}
		</>
	)
}