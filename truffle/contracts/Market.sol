contract Market {
    address public owner;
    uint8 public TAX_FEE_NUMERATOR = 1;
    uint8 public TAX_FEE_DENOMINATOR = 100;
    enum OrderType {Buy, Sell, Done}
    mapping(address => uint256) public shares;
    mapping(uint256 => Order) public orders;
    uint256 counter = 0;
    struct Order {
        uint256 amount;
        address from;
        uint256 price;
        OrderType orderType;
    }

    constructor() {
        owner = msg.sender;
        shares[msg.sender] = 100;
    }

    event OrderPlaced(uint256 amount, uint256 price, address from);

    function getShares() public view returns (uint256) {
        return shares[msg.sender];
    }

    //Trade buy - sell if you have
    //Trade sell - buy if you have
    //Order buy - order buy define the price per share and amount
    //Order sell order sell
    function OrderBuy(uint256 price) public payable {
        require(msg.value > 0, "Ammount can't be 0");
        uint256 amount = msg.value / price;
        require(amount > 1, "the minimum is one share");
        orders[counter] = Order(
            amount,
            msg.sender,
            price * amount,
            OrderType.Buy
        );
        counter++;
        emit OrderPlaced(amount, price, msg.sender);
    }

    function TradeBuy(uint256 tradeId) public {
        Order storage order = orders[tradeId];
        require(order.from != address(0), "this is not a valid order");
        require(
            shares[msg.sender] >= order.amount,
            "You don't have enough shares for this transaction"
        );
        require(
            order.orderType != OrderType.Sell,
            "Order needs to be type Buy"
        );
        uint256 fee = order.price * (TAX_FEE_NUMERATOR / TAX_FEE_DENOMINATOR);
        order.amount -= fee;
        shares[msg.sender] -= order.amount;
        shares[order.from] += order.amount;
        payable(owner).transfer(fee);
        payable(msg.sender).transfer(order.price);
        order.orderType = OrderType.Done;
    }

    function OrderSell(uint256 price, uint256 amount) public {
        require(shares[msg.sender] >= amount);
        orders[counter] = Order(amount, msg.sender, price, OrderType.Sell);
        counter++;
        emit OrderPlaced(amount, price, msg.sender);
    }

    function TradeSell(uint256 orderId) public payable {
        Order storage order = orders[orderId];
        require(order.from != address(0));
        require(
            msg.value == order.price,
            "You didn't send enough(or to much) ethereum for this transaction"
        );
        uint256 fee = order.amount * (TAX_FEE_NUMERATOR / TAX_FEE_DENOMINATOR);
        order.price -= fee;
        shares[order.from] -= order.amount;
        payable(owner).transfer(fee);
        payable(order.from).transfer(order.price);
        shares[msg.sender] += order.amount;
        order.orderType = OrderType.Done;
    }
}
