import Header from '../preact/navigation-bar';
import HeroImage from '../preact/heroImage';
import { useDispatch } from 'react-redux';
import { setOrders } from '../redux/orders';
import { Order, Shares } from '../interfaces/interfaces';
import Web3 from 'web3';
import React from 'react';
import ContractABI from '../truffle/ABI';
import { Main } from '../components/Main';
import OrderBuy from '../components/Buy-Sell-Container';
interface MyState {
    orders: Order[],
    shares: number
}
const web3 = new Web3(Web3.givenProvider);
const contractAddr = '0xdB30697a0ED2bb87e1717f4401731700edbA681F';
declare let window: any;
const enableMetamask = async (): Promise<MyState> => {
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    let orders = [];
    const Market = new web3.eth.Contract(ContractABI, contractAddr, { from: account });
    let count = 0;
    return Market.methods.getShares().call().then(async (shares) => {
        while (true) {
            const order = await Market.methods.orders(count).call();
            console.log(orders);
            count++;
            if (order.price == "0") {
                return {
                    orders,
                    shares
                }
            }
            orders.push(order);
        }
    })
}
export default function Wrapper() {
    const dispatch = useDispatch();
    const onData = (data: MyState): void => {
        dispatch(setOrders(data.orders));
    }
    return (
        <Index onData={onData} />
    )
}
interface Props {
    onData: void;
}
class Index extends React.Component<Props, MyState>{
    state = {
        shares: 0,
        orders: []
    }
    componentDidMount() {
        const { onData } = this.props;
        enableMetamask().then(data => {
            this.setState({
                shares: data.shares,
                orders: data.orders
            });
            onData(data.orders, data.shares)
        })
    }
    render() {
        const { shares, orders } = this.state;
        return (
            <div>
                <Header balance={shares} backgroundColor="white" color="#21325b" />
                <HeroImage src="../../static/heroImage.png" />
                <OrderBuy />
                <Main orders={orders} />
            </div>
        )
    }
}