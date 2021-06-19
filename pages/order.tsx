import Header from '../preact/navigation-bar';
import React from 'react';
import { Order, Shares } from '../interfaces/interfaces';
import { ContractABI } from '../truffle/ABI';
import { connect } from 'react-redux';
import Web3 from 'web3';

const mapStateToProps = state => {
	const { language } = state.language || {};
	return { language };
}

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
interface ReduxState {
	language: {
		language: boolean
	}
}
class OrderComponent extends React.Component<{
	id: number, data: {
		language: {
			language: boolean
		}
	}
}, MyState> {
	state: MyState = {
		order: { amount: 0, from: "", orderType: "0", price: 0 },
		shares: 0
	}
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
		let { language } = this.props.data.language;
		console.log(language);
		const { order, shares } = this.state;
		return (
			<div>
				<Header balance={shares} backgroundColor="white" color="#21325b" />
				<div className="order-window">
					<h2>{order.price * Math.pow(10, -18)}ETH</h2>
					<h3>{language ? "Tip Porudžbine" : "Order Type"}: {order.orderType == "1" ?
						[language ? "Prodaje" : "Selling"] :
						[language ? "Kupuje" : "Buying"]}</h3>
					<h2>{language ? "Broj deonica" : "Number of shares"}: {order.amount}</h2>
					<h4>{language ? "Kreator porudžbine" : "Order Creator"}: {(order.from)}</h4>
					<button onClick={this.fillOrder}>
						{order.orderType == "1" ?
							[language ? "Kupi deonice" : "Buy shares"]
							:
							[language ? "Prodaj deonice" : "Sell shares"]
						}
					</button>
				</div>
			</div>
		)
	}
}
export default connect(state => ({ data: state }))(OrderComponent);