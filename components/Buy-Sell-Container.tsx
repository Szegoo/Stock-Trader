import Web3 from "web3";
import Order from "./Buy-Sell-Component";
import BigNumber from "big-number";
import { ContractABI } from '../truffle/ABI';
const web3 = new Web3(Web3.givenProvider);
const contractAddr = '0xdB30697a0ED2bb87e1717f4401731700edbA681F';
declare let window: any;
const OrderBuy = async (price, eth) => {
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const value = BigNumber(parseFloat(eth) * Math.pow(10, 18));

    const Market = new web3.eth.Contract(ContractABI, contractAddr, { from: account });
    await Market.methods.OrderBuy(BigNumber(price * Math.pow(10, 18))).send({
        from: account,
        value: value.toString()
    });
}
const OrderSell = async (amount, price) => {
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    console.log('amount: ' + amount + "price: " + price)

    const Market = new web3.eth.Contract(ContractABI, contractAddr, { from: account });
    await Market.methods.OrderSell(BigNumber(price * Math.pow(10, 18)), amount).send({
        from: account
    });
}

export default () => {
    return (
        <div className="grid">
            <Order buy={true} handleOrder={OrderBuy} />
            <Order buy={false} handleOrder={OrderSell} />
        </div>
    )
}