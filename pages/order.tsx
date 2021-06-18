import Header from '../preact/navigation-bar';
import React, { useEffect } from 'react';
import { Order, Shares } from '../interfaces/interfaces';
import { ContractABI } from '../truffle/ABI';
import Web3 from 'web3';
declare let window: any;
interface MyState {
	order: Order,
	shares: number
}
const web3 = new Web3(Web3.givenProvider);
const contractAddr = '0xdB30697a0ED2bb87e1717f4401731700edbA681F';
const enableMetamask = async (id): Promise<MyState> => {
	const accounts = await window.ethereum.enable();
	const account = accounts[0];
	const Market = new web3.eth.Contract(ContractABI, contractAddr, { from: account });
	const shares = await Market.methods.getShares().call();
	const order = await Market.methods.orders(id).call();
	return {
		shares,
		order
	}
}
export default class OrderComponent extends React.Component<{ id: number }, MyState> {
	static async getInitialProps({ req, res, query }) {
		console.log(query.id);

		return {
			id: query.id
		}
	}
	fillOrder = async () => {
		const { id } = this.props;
		const { order } = this.state;
		console.log(order);
		const accounts = await window.ethereum.enable();
		const account = accounts[0];
		const Market = new web3.eth.Contract(ContractABI, contractAddr, { from: account });
		//if 1 then sell
		console.log(order.orderType);
		if (order.orderType === "0") {
			console.log('trade buy');
			await Market.methods.TradeBuy(id).send();
		} else if (order.orderType === "1") {
			console.log('radi');
			await Market.methods.TradeSell(id).send({
				from: account,
				value: order.price
			})
		}
	}
	componentDidMount() {
		const { id } = this.props;
		enableMetamask(id).then((data) => {
			this.setState({
				order: data.order,
				shares: data.shares
			})
		})
	}
	render() {
		console.log(this.state);
		const { order, shares } = this.state;
		return (
			<div>
				<Header balance={0} backgroundColor="white" color="#21325b" />
				<div className="order-window">
					<h2>{order.price * Math.pow(10, -18)}ETH</h2>
					<h3>Type: {order.orderType == "1" ? "Buy" : "Sell"}</h3>
					<h2>Ammount: {order.amount}</h2>
					<h4>Order Creator: {(order.from)}</h4>
					<button onClick={this.fillOrder}>Fill in the order</button>
				</div>
			</div>
		)
	}
}