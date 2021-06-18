(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Buy-Sell-Component.tsx":
/*!*******************************************!*\
  !*** ./components/Buy-Sell-Component.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\sakac\\Desktop\\TradeMarket\\components\\Buy-Sell-Component.tsx";

/* harmony default export */ __webpack_exports__["default"] = (({
  handleOrder,
  buy
}) => {
  const {
    0: price,
    1: setPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: eth,
    1: setEth
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "exchange box",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: buy ? "Buy" : "Sell"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      className: "eth-stt",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: "Amount in eth"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          onChange: e => setEth(Number(e.target.value))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          children: buy ? "Price per share" : "Shares"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          onChange: e => setPrice(Number(e.target.value))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "After filling this out you need to wait for somebody to fill in this orders. Be patient 'till then"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: e => {
            e.preventDefault();
            handleOrder(price, eth).then(() => {
              console.log('done');
            });
          },
          children: buy ? "Make A Buy Order" : "Make A Sell Order"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
});

/***/ }),

/***/ "./components/Buy-Sell-Container.tsx":
/*!*******************************************!*\
  !*** ./components/Buy-Sell-Container.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Buy_Sell_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Buy-Sell-Component */ "./components/Buy-Sell-Component.tsx");
/* harmony import */ var big_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! big-number */ "big-number");
/* harmony import */ var big_number__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(big_number__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _truffle_ABI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../truffle/ABI */ "./truffle/ABI.ts");

var _jsxFileName = "C:\\Users\\sakac\\Desktop\\TradeMarket\\components\\Buy-Sell-Container.tsx";




const web3 = new (web3__WEBPACK_IMPORTED_MODULE_1___default())((web3__WEBPACK_IMPORTED_MODULE_1___default().givenProvider));
const contractAddr = '0xdB30697a0ED2bb87e1717f4401731700edbA681F';

const OrderBuy = async (price, eth) => {
  const accounts = await window.ethereum.enable();
  const account = accounts[0];
  const value = big_number__WEBPACK_IMPORTED_MODULE_3___default()(parseFloat(eth) * Math.pow(10, 18));
  const Market = new web3.eth.Contract(_truffle_ABI__WEBPACK_IMPORTED_MODULE_4__.default, contractAddr, {
    from: account
  });
  await Market.methods.OrderBuy(big_number__WEBPACK_IMPORTED_MODULE_3___default()(price * Math.pow(10, 18))).send({
    from: account,
    value: value.toString()
  });
};

const OrderSell = async (amount, price) => {
  const accounts = await window.ethereum.enable();
  const account = accounts[0];
  console.log('amount: ' + amount + "price: " + price);
  const Market = new web3.eth.Contract(_truffle_ABI__WEBPACK_IMPORTED_MODULE_4__.default, contractAddr, {
    from: account
  });
  await Market.methods.OrderSell(big_number__WEBPACK_IMPORTED_MODULE_3___default()(price * Math.pow(10, 18)), amount).send({
    from: account
  });
};

/* harmony default export */ __webpack_exports__["default"] = (() => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Buy_Sell_Component__WEBPACK_IMPORTED_MODULE_2__.default, {
      buy: true,
      handleOrder: OrderBuy
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Buy_Sell_Component__WEBPACK_IMPORTED_MODULE_2__.default, {
      buy: false,
      handleOrder: OrderSell
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, undefined);
});

/***/ }),

/***/ "./components/Main.tsx":
/*!*****************************!*\
  !*** ./components/Main.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main": function() { return /* binding */ Main; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OrderComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrderComponent */ "./components/OrderComponent.tsx");


var _jsxFileName = "C:\\Users\\sakac\\Desktop\\TradeMarket\\components\\Main.tsx";


const Main = ({
  orders
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "orders-container",
    children: orders[0] && orders.map((order, indx) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: orders[indx].orderType !== "2" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_OrderComponent__WEBPACK_IMPORTED_MODULE_2__.OrderComponent, {
          id: indx,
          order: order
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 29
        }, undefined)
      }, indx, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 25
      }, undefined)
    }, void 0, false))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/OrderComponent.tsx":
/*!***************************************!*\
  !*** ./components/OrderComponent.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderComponent": function() { return /* binding */ OrderComponent; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\sakac\\Desktop\\TradeMarket\\components\\OrderComponent.tsx";


const OrderComponent = ({
  order,
  id
}) => {
  const shorten = text => {
    if (text) return text.substring(0, 10) + "...";
  };

  console.log(order);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: order ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_2___default().push(`/order/?id=${id}`),
      className: "order",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: [order.price * Math.pow(10, -18), "ETH"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 6
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: ["Type: ", order.orderType === "1" ? "Buy" : "Sell"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 6
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: ["Ammount: ", order.amount]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 6
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Order Creator: ", shorten(order.from)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 6
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Loading"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Wrapper; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _preact_navigation_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../preact/navigation-bar */ "./preact/navigation-bar.js");
/* harmony import */ var _preact_heroImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../preact/heroImage */ "./preact/heroImage.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_orders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/orders */ "./redux/orders.ts");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _truffle_ABI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../truffle/ABI */ "./truffle/ABI.ts");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Main */ "./components/Main.tsx");
/* harmony import */ var _components_Buy_Sell_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Buy-Sell-Container */ "./components/Buy-Sell-Container.tsx");

var _jsxFileName = "C:\\Users\\sakac\\Desktop\\TradeMarket\\pages\\index.tsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const web3 = new (web3__WEBPACK_IMPORTED_MODULE_5___default())((web3__WEBPACK_IMPORTED_MODULE_5___default().givenProvider));
const contractAddr = '0xdB30697a0ED2bb87e1717f4401731700edbA681F';

const enableMetamask = async () => {
  const accounts = await window.ethereum.enable();
  const account = accounts[0];
  let orders = [];
  const Market = new web3.eth.Contract(_truffle_ABI__WEBPACK_IMPORTED_MODULE_7__.default, contractAddr, {
    from: account
  });
  let count = 0;
  return Market.methods.getShares().call().then(async shares => {
    while (true) {
      const order = await Market.methods.orders(count).call();
      console.log(orders);
      count++;

      if (order.price == "0") {
        return {
          orders,
          shares
        };
      }

      orders.push(order);
    }
  });
};

function Wrapper() {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  const onData = data => {
    dispatch((0,_redux_orders__WEBPACK_IMPORTED_MODULE_4__.setOrders)(data.orders));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Index, {
    onData: onData
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }, this);
}

class Index extends (react__WEBPACK_IMPORTED_MODULE_6___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      shares: 0,
      orders: []
    });
  }

  componentDidMount() {
    const {
      onData
    } = this.props;
    enableMetamask().then(data => {
      this.setState({
        shares: data.shares,
        orders: data.orders
      });
      onData(data.orders, data.shares);
    });
  }

  render() {
    const {
      shares,
      orders
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_preact_navigation_bar__WEBPACK_IMPORTED_MODULE_1__.default, {
        balance: shares,
        backgroundColor: "white",
        color: "#21325b"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_preact_heroImage__WEBPACK_IMPORTED_MODULE_2__.default, {
        src: "../../static/heroImage.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Buy_Sell_Container__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Main__WEBPACK_IMPORTED_MODULE_8__.Main, {
        orders: orders
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./preact/heroImage.js":
/*!*****************************!*\
  !*** ./preact/heroImage.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\sakac\\Desktop\\TradeMarket\\preact\\heroImage.js";
/* harmony default export */ __webpack_exports__["default"] = (({
  src
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      id: "hero-text",
      children: "Everything is possible."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("style", {
      children: `
                #hero-text {
                    border-bottom: 1px solid #21325b;
                    margin-top: 0;
                    text-align: center;
                    font-size: 2.5em;
                    background-color: #21325b;
                    background: url(${src});
                    color: #21325b;
                    padding-top: 1.5em;
                    padding-bottom: 2.5em;
                    background-attachment: fixed;
                }
            `
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, undefined);
});

/***/ }),

/***/ "./preact/navigation-bar.js":
/*!**********************************!*\
  !*** ./preact/navigation-bar.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\sakac\\Desktop\\TradeMarket\\preact\\navigation-bar.js";

/* harmony default export */ __webpack_exports__["default"] = (({
  backgroundColor,
  color,
  balance
}) => {
  const {
    0: isOpen,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const toggleOpen = () => {
    setOpen(currentState => !currentState);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "nav",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "navigation-bar",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Stock Trader"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "/",
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "/get-started",
          children: "Get Started"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "/donate",
          children: [balance, " Shares"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: "special",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "/about-us",
          children: "About us"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 41
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "navigation-bar-mobile",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: toggleOpen,
        className: "navigation-toggle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Stock Trader"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined), isOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/",
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/get-started",
            children: "Get Started"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/donate",
            children: "Donate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/about-us",
            children: "About us"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "exit-button",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            onClick: toggleOpen,
            children: "X"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 53
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("style", {
      children: `
                div {
                    background-color green;
                }
                .navigation-bar {
                    color: ${color || "white"};
                    margin: 0;
                    display: flex;
                    align-items: center;
                        background-color: ${backgroundColor || "#141414"};
                    }
                    .navigation-bar > li {
                        list-style-type: none; }
                        .navigation-bar > li > a {
                        display: block;
                        padding: 1em;
                        color: ${color || "white"};
                        text-decoration: none; }
                        .navigation-bar > li > a:hover {
                            color: #a61f27; }
                    .navigation-bar > .special {
                        margin-left: auto; }
                    @media (max-width: 450px) {
                        .navigation-bar {
                        display: none; } }

                    .navigation-bar-mobile {
                    display: none; }
                    @media (max-width: 450px) {
                        .navigation-bar-mobile {
                        display: flex; 
                        align-items: center;
                    } }
                    .navigation-bar-mobile > .navigation-toggle {
                        width: fit-content;
                        height: 50px; }
                        .navigation-bar-mobile > .navigation-toggle::after {
                        position: absolute;
                        right: .5em;
                        display: block;
                        color: black;
                        content: "\\2261";
                        font-size: 2.7rem; }

                    @keyframes move-in {
                    0% {
                        transform: translateY(-200px); }
                    100% {
                        transform: translateY(0px); } }
            `
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
});

/***/ }),

/***/ "./redux/orders.ts":
/*!*************************!*\
  !*** ./redux/orders.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ordersSlice": function() { return /* binding */ ordersSlice; },
/* harmony export */   "setOrders": function() { return /* binding */ setOrders; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const ordersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "orders",
  initialState: {
    orders: []
  },
  reducers: {
    setOrders: (state, actions) => {
      state.orders = actions.payload;
    }
  }
});
const {
  setOrders
} = ordersSlice.actions;
/* harmony default export */ __webpack_exports__["default"] = (ordersSlice.reducer);

/***/ }),

/***/ "./truffle/ABI.ts":
/*!************************!*\
  !*** ./truffle/ABI.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "price",
    "type": "uint256"
  }, {
    "indexed": false,
    "internalType": "address",
    "name": "from",
    "type": "address"
  }],
  "name": "OrderPlaced",
  "type": "event"
}, {
  "inputs": [],
  "name": "TAX_FEE_DENOMINATOR",
  "outputs": [{
    "internalType": "uint8",
    "name": "",
    "type": "uint8"
  }],
  "stateMutability": "view",
  "type": "function",
  "constant": true
}, {
  "inputs": [],
  "name": "TAX_FEE_NUMERATOR",
  "outputs": [{
    "internalType": "uint8",
    "name": "",
    "type": "uint8"
  }],
  "stateMutability": "view",
  "type": "function",
  "constant": true
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "name": "orders",
  "outputs": [{
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }, {
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "price",
    "type": "uint256"
  }, {
    "internalType": "enum Market.OrderType",
    "name": "orderType",
    "type": "uint8"
  }],
  "stateMutability": "view",
  "type": "function",
  "constant": true
}, {
  "inputs": [],
  "name": "owner",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function",
  "constant": true
}, {
  "inputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "name": "shares",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function",
  "constant": true
}, {
  "inputs": [],
  "name": "getShares",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function",
  "constant": true
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "price",
    "type": "uint256"
  }],
  "name": "OrderBuy",
  "outputs": [],
  "stateMutability": "payable",
  "type": "function",
  "payable": true
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "tradeId",
    "type": "uint256"
  }],
  "name": "TradeBuy",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "price",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "OrderSell",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "orderId",
    "type": "uint256"
  }],
  "name": "TradeSell",
  "outputs": [],
  "stateMutability": "payable",
  "type": "function",
  "payable": true
}]);

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ "big-number":
/*!*****************************!*\
  !*** external "big-number" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("big-number");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UcmFkZU1hcmtldC8uL2NvbXBvbmVudHMvQnV5LVNlbGwtQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9UcmFkZU1hcmtldC8uL2NvbXBvbmVudHMvQnV5LVNlbGwtQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly9UcmFkZU1hcmtldC8uL2NvbXBvbmVudHMvTWFpbi50c3giLCJ3ZWJwYWNrOi8vVHJhZGVNYXJrZXQvLi9jb21wb25lbnRzL09yZGVyQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9UcmFkZU1hcmtldC8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9UcmFkZU1hcmtldC8uL3ByZWFjdC9oZXJvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vVHJhZGVNYXJrZXQvLi9wcmVhY3QvbmF2aWdhdGlvbi1iYXIuanMiLCJ3ZWJwYWNrOi8vVHJhZGVNYXJrZXQvLi9yZWR1eC9vcmRlcnMudHMiLCJ3ZWJwYWNrOi8vVHJhZGVNYXJrZXQvLi90cnVmZmxlL0FCSS50cyIsIndlYnBhY2s6Ly9UcmFkZU1hcmtldC9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly9UcmFkZU1hcmtldC9leHRlcm5hbCBcImJpZy1udW1iZXJcIiIsIndlYnBhY2s6Ly9UcmFkZU1hcmtldC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vVHJhZGVNYXJrZXQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL1RyYWRlTWFya2V0L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9UcmFkZU1hcmtldC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL1RyYWRlTWFya2V0L2V4dGVybmFsIFwid2ViM1wiIl0sIm5hbWVzIjpbImhhbmRsZU9yZGVyIiwiYnV5IiwicHJpY2UiLCJzZXRQcmljZSIsInVzZVN0YXRlIiwiZXRoIiwic2V0RXRoIiwiZSIsIk51bWJlciIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsIndlYjMiLCJXZWIzIiwiY29udHJhY3RBZGRyIiwiT3JkZXJCdXkiLCJhY2NvdW50cyIsIndpbmRvdyIsImV0aGVyZXVtIiwiZW5hYmxlIiwiYWNjb3VudCIsIkJpZ051bWJlciIsInBhcnNlRmxvYXQiLCJNYXRoIiwicG93IiwiTWFya2V0IiwiQ29udHJhY3QiLCJDb250cmFjdEFCSSIsImZyb20iLCJtZXRob2RzIiwic2VuZCIsInRvU3RyaW5nIiwiT3JkZXJTZWxsIiwiYW1vdW50IiwiTWFpbiIsIm9yZGVycyIsIm1hcCIsIm9yZGVyIiwiaW5keCIsIm9yZGVyVHlwZSIsIk9yZGVyQ29tcG9uZW50IiwiaWQiLCJzaG9ydGVuIiwidGV4dCIsInN1YnN0cmluZyIsIlJvdXRlciIsImVuYWJsZU1ldGFtYXNrIiwiY291bnQiLCJnZXRTaGFyZXMiLCJjYWxsIiwic2hhcmVzIiwicHVzaCIsIldyYXBwZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25EYXRhIiwiZGF0YSIsInNldE9yZGVycyIsIkluZGV4IiwiUmVhY3QiLCJjb21wb25lbnREaWRNb3VudCIsInByb3BzIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJzdGF0ZSIsInNyYyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYmFsYW5jZSIsImlzT3BlbiIsInNldE9wZW4iLCJ0b2dnbGVPcGVuIiwiY3VycmVudFN0YXRlIiwib3JkZXJzU2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VycyIsImFjdGlvbnMiLCJwYXlsb2FkIiwicmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLCtEQUFlLENBQUM7QUFBRUEsYUFBRjtBQUFlQztBQUFmLENBQUQsS0FBMEI7QUFDckMsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQywrQ0FB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O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmV4cG9ydCBkZWZhdWx0ICh7IGhhbmRsZU9yZGVyLCBidXkgfSkgPT4ge1xyXG4gICAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtldGgsIHNldEV0aF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGNoYW5nZSBib3hcIj5cclxuICAgICAgICAgICAgPGgyPntidXkgPyBcIkJ1eVwiIDogXCJTZWxsXCJ9PC9oMj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZXRoLXN0dFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFtb3VudCBpbiBldGg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpID0+IHNldEV0aChOdW1iZXIoZS50YXJnZXQudmFsdWUpKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD57YnV5ID8gXCJQcmljZSBwZXIgc2hhcmVcIiA6IFwiU2hhcmVzXCJ9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIEFmdGVyIGZpbGxpbmcgdGhpcyBvdXQgeW91IG5lZWQgdG8gd2FpdFxyXG4gICAgICAgICAgICAgICAgICAgIGZvciBzb21lYm9keSB0byBmaWxsIGluIHRoaXMgb3JkZXJzLlxyXG4gICAgICAgICAgICAgICAgICAgIEJlIHBhdGllbnQgJ3RpbGwgdGhlblxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU9yZGVyKHByaWNlLCBldGgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9fT57YnV5ID8gXCJNYWtlIEEgQnV5IE9yZGVyXCIgOiBcIk1ha2UgQSBTZWxsIE9yZGVyXCJ9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcbmltcG9ydCBPcmRlciBmcm9tIFwiLi9CdXktU2VsbC1Db21wb25lbnRcIjtcclxuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiYmlnLW51bWJlclwiO1xyXG5pbXBvcnQgQ29udHJhY3RBQkkgZnJvbSAnLi4vdHJ1ZmZsZS9BQkknO1xyXG5jb25zdCB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyKTtcclxuY29uc3QgY29udHJhY3RBZGRyID0gJzB4ZEIzMDY5N2EwRUQyYmI4N2UxNzE3ZjQ0MDE3MzE3MDBlZGJBNjgxRic7XHJcbmRlY2xhcmUgbGV0IHdpbmRvdzogYW55O1xyXG5jb25zdCBPcmRlckJ1eSA9IGFzeW5jIChwcmljZSwgZXRoKSA9PiB7XHJcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTtcclxuICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcclxuICAgIGNvbnN0IHZhbHVlID0gQmlnTnVtYmVyKHBhcnNlRmxvYXQoZXRoKSAqIE1hdGgucG93KDEwLCAxOCkpO1xyXG5cclxuICAgIGNvbnN0IE1hcmtldCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChDb250cmFjdEFCSSwgY29udHJhY3RBZGRyLCB7IGZyb206IGFjY291bnQgfSk7XHJcbiAgICBhd2FpdCBNYXJrZXQubWV0aG9kcy5PcmRlckJ1eShCaWdOdW1iZXIocHJpY2UgKiBNYXRoLnBvdygxMCwgMTgpKSkuc2VuZCh7XHJcbiAgICAgICAgZnJvbTogYWNjb3VudCxcclxuICAgICAgICB2YWx1ZTogdmFsdWUudG9TdHJpbmcoKVxyXG4gICAgfSk7XHJcbn1cclxuY29uc3QgT3JkZXJTZWxsID0gYXN5bmMgKGFtb3VudCwgcHJpY2UpID0+IHtcclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpO1xyXG4gICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xyXG4gICAgY29uc29sZS5sb2coJ2Ftb3VudDogJyArIGFtb3VudCArIFwicHJpY2U6IFwiICsgcHJpY2UpXHJcblxyXG4gICAgY29uc3QgTWFya2V0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KENvbnRyYWN0QUJJLCBjb250cmFjdEFkZHIsIHsgZnJvbTogYWNjb3VudCB9KTtcclxuICAgIGF3YWl0IE1hcmtldC5tZXRob2RzLk9yZGVyU2VsbChCaWdOdW1iZXIocHJpY2UgKiBNYXRoLnBvdygxMCwgMTgpKSwgYW1vdW50KS5zZW5kKHtcclxuICAgICAgICBmcm9tOiBhY2NvdW50XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgICAgICAgPE9yZGVyIGJ1eT17dHJ1ZX0gaGFuZGxlT3JkZXI9e09yZGVyQnV5fSAvPlxyXG4gICAgICAgICAgICA8T3JkZXIgYnV5PXtmYWxzZX0gaGFuZGxlT3JkZXI9e09yZGVyU2VsbH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgT3JkZXJDb21wb25lbnQgfSBmcm9tIFwiLi9PcmRlckNvbXBvbmVudFwiXHJcbmV4cG9ydCBjb25zdCBNYWluID0gKHsgb3JkZXJzIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlcnMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIHtvcmRlcnNbMF0gJiYgb3JkZXJzLm1hcCgob3JkZXIsIGluZHgpID0+XHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIHtvcmRlcnNbaW5keF0ub3JkZXJUeXBlICE9PSBcIjJcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5keH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3JkZXJDb21wb25lbnQgaWQ9e2luZHh9IG9yZGVyPXtvcmRlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBPcmRlciwgU2hhcmVzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaW50ZXJmYWNlc1wiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG5cdG9yZGVyOiBPcmRlcixcclxuXHRpZDogbnVtYmVyXHJcbn1cclxuZXhwb3J0IGNvbnN0IE9yZGVyQ29tcG9uZW50OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBvcmRlciwgaWQgfSkgPT4ge1xyXG5cdGNvbnN0IHNob3J0ZW4gPSAodGV4dDogc3RyaW5nKSA9PiB7XHJcblx0XHRpZiAodGV4dClcclxuXHRcdFx0cmV0dXJuIHRleHQuc3Vic3RyaW5nKDAsIDEwKSArIFwiLi4uXCI7XHJcblx0fVxyXG5cdGNvbnNvbGUubG9nKG9yZGVyKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e29yZGVyID9cclxuXHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKGAvb3JkZXIvP2lkPSR7aWR9YCl9IGNsYXNzTmFtZT1cIm9yZGVyXCI+XHJcblx0XHRcdFx0XHQ8aDM+e29yZGVyLnByaWNlICogTWF0aC5wb3coMTAsIC0xOCl9RVRIPC9oMz5cclxuXHRcdFx0XHRcdDxoND5UeXBlOiB7b3JkZXIub3JkZXJUeXBlID09PSBcIjFcIiA/IFwiQnV5XCIgOiBcIlNlbGxcIn08L2g0PlxyXG5cdFx0XHRcdFx0PGgzPkFtbW91bnQ6IHtvcmRlci5hbW91bnR9PC9oMz5cclxuXHRcdFx0XHRcdDxwPk9yZGVyIENyZWF0b3I6IHtzaG9ydGVuKG9yZGVyLmZyb20pfTwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ6IDxwPkxvYWRpbmc8L3A+XHJcblx0XHRcdH1cclxuXHRcdDwvPlxyXG5cdClcclxufSIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vcHJlYWN0L25hdmlnYXRpb24tYmFyJztcclxuaW1wb3J0IEhlcm9JbWFnZSBmcm9tICcuLi9wcmVhY3QvaGVyb0ltYWdlJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNldE9yZGVycyB9IGZyb20gJy4uL3JlZHV4L29yZGVycyc7XHJcbmltcG9ydCB7IE9yZGVyLCBTaGFyZXMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnRyYWN0QUJJIGZyb20gJy4uL3RydWZmbGUvQUJJJztcclxuaW1wb3J0IHsgTWFpbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbic7XHJcbmltcG9ydCBPcmRlckJ1eSBmcm9tICcuLi9jb21wb25lbnRzL0J1eS1TZWxsLUNvbnRhaW5lcic7XHJcbmludGVyZmFjZSBNeVN0YXRlIHtcclxuICAgIG9yZGVyczogT3JkZXJbXSxcclxuICAgIHNoYXJlczogbnVtYmVyXHJcbn1cclxuY29uc3Qgd2ViMyA9IG5ldyBXZWIzKFdlYjMuZ2l2ZW5Qcm92aWRlcik7XHJcbmNvbnN0IGNvbnRyYWN0QWRkciA9ICcweGRCMzA2OTdhMEVEMmJiODdlMTcxN2Y0NDAxNzMxNzAwZWRiQTY4MUYnO1xyXG5kZWNsYXJlIGxldCB3aW5kb3c6IGFueTtcclxuY29uc3QgZW5hYmxlTWV0YW1hc2sgPSBhc3luYyAoKTogUHJvbWlzZTxNeVN0YXRlPiA9PiB7XHJcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTtcclxuICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcclxuICAgIGxldCBvcmRlcnMgPSBbXTtcclxuICAgIGNvbnN0IE1hcmtldCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChDb250cmFjdEFCSSwgY29udHJhY3RBZGRyLCB7IGZyb206IGFjY291bnQgfSk7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgcmV0dXJuIE1hcmtldC5tZXRob2RzLmdldFNoYXJlcygpLmNhbGwoKS50aGVuKGFzeW5jIChzaGFyZXMpID0+IHtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBvcmRlciA9IGF3YWl0IE1hcmtldC5tZXRob2RzLm9yZGVycyhjb3VudCkuY2FsbCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvcmRlcnMpO1xyXG4gICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICBpZiAob3JkZXIucHJpY2UgPT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNoYXJlc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9yZGVycy5wdXNoKG9yZGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdyYXBwZXIoKSB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBvbkRhdGEgPSAoZGF0YTogTXlTdGF0ZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldE9yZGVycyhkYXRhLm9yZGVycykpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SW5kZXggb25EYXRhPXtvbkRhdGF9IC8+XHJcbiAgICApXHJcbn1cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIG9uRGF0YTogdm9pZDtcclxufVxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgTXlTdGF0ZT57XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBzaGFyZXM6IDAsXHJcbiAgICAgICAgb3JkZXJzOiBbXVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgeyBvbkRhdGEgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgZW5hYmxlTWV0YW1hc2soKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNoYXJlczogZGF0YS5zaGFyZXMsXHJcbiAgICAgICAgICAgICAgICBvcmRlcnM6IGRhdGEub3JkZXJzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBvbkRhdGEoZGF0YS5vcmRlcnMsIGRhdGEuc2hhcmVzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBzaGFyZXMsIG9yZGVycyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciBiYWxhbmNlPXtzaGFyZXN9IGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCIgY29sb3I9XCIjMjEzMjViXCIgLz5cclxuICAgICAgICAgICAgICAgIDxIZXJvSW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2hlcm9JbWFnZS5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPE9yZGVyQnV5IC8+XHJcbiAgICAgICAgICAgICAgICA8TWFpbiBvcmRlcnM9e29yZGVyc30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgKHsgc3JjIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxIGlkPVwiaGVyby10ZXh0XCI+RXZlcnl0aGluZyBpcyBwb3NzaWJsZS48L2gxPlxyXG4gICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgI2hlcm8tdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMTMyNWI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEzMjViO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke3NyY30pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEzMjViO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMi41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgZGVmYXVsdCAoeyBiYWNrZ3JvdW5kQ29sb3IsIGNvbG9yLCBiYWxhbmNlIH0pID0+IHtcclxuICAgIGNvbnN0IFtpc09wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCB0b2dnbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW4oY3VycmVudFN0YXRlID0+ICFjdXJyZW50U3RhdGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1iYXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5TdG9jayBUcmFkZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCI+SG9tZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvZ2V0LXN0YXJ0ZWRcIj5HZXQgU3RhcnRlZDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvZG9uYXRlXCI+e2JhbGFuY2V9IFNoYXJlczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNwZWNpYWxcIj48YSBocmVmPVwiL2Fib3V0LXVzXCI+QWJvdXQgdXM8L2E+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWJhci1tb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17dG9nZ2xlT3Blbn0gY2xhc3NOYW1lPVwibmF2aWdhdGlvbi10b2dnbGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMT5TdG9jayBUcmFkZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAge2lzT3BlbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL1wiPkhvbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvZ2V0LXN0YXJ0ZWRcIj5HZXQgU3RhcnRlZDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9kb25hdGVcIj5Eb25hdGU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvYWJvdXQtdXNcIj5BYm91dCB1czwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZXhpdC1idXR0b25cIj48YSBvbkNsaWNrPXt0b2dnbGVPcGVufT5YPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZT57YFxyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdmlnYXRpb24tYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtjb2xvciB8fCBcIndoaXRlXCJ9O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7YmFja2dyb3VuZENvbG9yIHx8IFwiIzE0MTQxNFwifTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdmlnYXRpb24tYmFyID4gbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdmlnYXRpb24tYmFyID4gbGkgPiBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3IgfHwgXCJ3aGl0ZVwifTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9uLWJhciA+IGxpID4gYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2E2MWYyNzsgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9uLWJhciA+IC5zcGVjaWFsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdmlnYXRpb24tYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTsgfSB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9uLWJhci1tb2JpbGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdmlnYXRpb24tYmFyLW1vYmlsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9uLWJhci1tb2JpbGUgPiAubmF2aWdhdGlvbi10b2dnbGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubmF2aWdhdGlvbi1iYXItbW9iaWxlID4gLm5hdmlnYXRpb24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxcXDIyNjFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjdyZW07IH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBtb3ZlLWluIHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwcHgpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyB9IH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9yZGVyc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG5cdG5hbWU6IFwib3JkZXJzXCIsXHJcblx0aW5pdGlhbFN0YXRlOiB7XHJcblx0XHRvcmRlcnM6IFtdXHJcblx0fSxcclxuXHRyZWR1Y2Vyczoge1xyXG5cdFx0c2V0T3JkZXJzOiAoc3RhdGUsIGFjdGlvbnMpID0+IHtcclxuXHRcdFx0c3RhdGUub3JkZXJzID0gYWN0aW9ucy5wYXlsb2FkO1xyXG5cdFx0fVxyXG5cdH1cclxufSlcclxuZXhwb3J0IGNvbnN0IHsgc2V0T3JkZXJzIH0gPSBvcmRlcnNTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBvcmRlcnNTbGljZS5yZWR1Y2VyOyIsImV4cG9ydCBkZWZhdWx0IFtcclxuXHR7XHJcblx0XHRcImlucHV0c1wiOiBbXSxcclxuXHRcdFwic3RhdGVNdXRhYmlsaXR5XCI6IFwibm9ucGF5YWJsZVwiLFxyXG5cdFx0XCJ0eXBlXCI6IFwiY29uc3RydWN0b3JcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJhbm9ueW1vdXNcIjogZmFsc2UsXHJcblx0XHRcImlucHV0c1wiOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImluZGV4ZWRcIjogZmFsc2UsXHJcblx0XHRcdFx0XCJpbnRlcm5hbFR5cGVcIjogXCJ1aW50MjU2XCIsXHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiYW1vdW50XCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwidWludDI1NlwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImluZGV4ZWRcIjogZmFsc2UsXHJcblx0XHRcdFx0XCJpbnRlcm5hbFR5cGVcIjogXCJ1aW50MjU2XCIsXHJcblx0XHRcdFx0XCJuYW1lXCI6IFwicHJpY2VcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ1aW50MjU2XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiaW5kZXhlZFwiOiBmYWxzZSxcclxuXHRcdFx0XHRcImludGVybmFsVHlwZVwiOiBcImFkZHJlc3NcIixcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJmcm9tXCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwiYWRkcmVzc1wiXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0XHRcIm5hbWVcIjogXCJPcmRlclBsYWNlZFwiLFxyXG5cdFx0XCJ0eXBlXCI6IFwiZXZlbnRcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJpbnB1dHNcIjogW10sXHJcblx0XHRcIm5hbWVcIjogXCJUQVhfRkVFX0RFTk9NSU5BVE9SXCIsXHJcblx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJpbnRlcm5hbFR5cGVcIjogXCJ1aW50OFwiLFxyXG5cdFx0XHRcdFwibmFtZVwiOiBcIlwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInVpbnQ4XCJcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHRcdFwic3RhdGVNdXRhYmlsaXR5XCI6IFwidmlld1wiLFxyXG5cdFx0XCJ0eXBlXCI6IFwiZnVuY3Rpb25cIixcclxuXHRcdFwiY29uc3RhbnRcIjogdHJ1ZVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJpbnB1dHNcIjogW10sXHJcblx0XHRcIm5hbWVcIjogXCJUQVhfRkVFX05VTUVSQVRPUlwiLFxyXG5cdFx0XCJvdXRwdXRzXCI6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiaW50ZXJuYWxUeXBlXCI6IFwidWludDhcIixcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ1aW50OFwiXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0XHRcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcclxuXHRcdFwidHlwZVwiOiBcImZ1bmN0aW9uXCIsXHJcblx0XHRcImNvbnN0YW50XCI6IHRydWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiaW5wdXRzXCI6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiaW50ZXJuYWxUeXBlXCI6IFwidWludDI1NlwiLFxyXG5cdFx0XHRcdFwibmFtZVwiOiBcIlwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInVpbnQyNTZcIlxyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdFx0XCJuYW1lXCI6IFwib3JkZXJzXCIsXHJcblx0XHRcIm91dHB1dHNcIjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJpbnRlcm5hbFR5cGVcIjogXCJ1aW50MjU2XCIsXHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiYW1vdW50XCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwidWludDI1NlwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImludGVybmFsVHlwZVwiOiBcImFkZHJlc3NcIixcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJmcm9tXCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwiYWRkcmVzc1wiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJwcmljZVwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInVpbnQyNTZcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJpbnRlcm5hbFR5cGVcIjogXCJlbnVtIE1hcmtldC5PcmRlclR5cGVcIixcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJvcmRlclR5cGVcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ1aW50OFwiXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0XHRcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcclxuXHRcdFwidHlwZVwiOiBcImZ1bmN0aW9uXCIsXHJcblx0XHRcImNvbnN0YW50XCI6IHRydWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiaW5wdXRzXCI6IFtdLFxyXG5cdFx0XCJuYW1lXCI6IFwib3duZXJcIixcclxuXHRcdFwib3V0cHV0c1wiOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImludGVybmFsVHlwZVwiOiBcImFkZHJlc3NcIixcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJhZGRyZXNzXCJcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHRcdFwic3RhdGVNdXRhYmlsaXR5XCI6IFwidmlld1wiLFxyXG5cdFx0XCJ0eXBlXCI6IFwiZnVuY3Rpb25cIixcclxuXHRcdFwiY29uc3RhbnRcIjogdHJ1ZVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJpbnB1dHNcIjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJpbnRlcm5hbFR5cGVcIjogXCJhZGRyZXNzXCIsXHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiXCIsXHJcblx0XHRcdFx0XCJ0eXBlXCI6IFwiYWRkcmVzc1wiXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0XHRcIm5hbWVcIjogXCJzaGFyZXNcIixcclxuXHRcdFwib3V0cHV0c1wiOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ1aW50MjU2XCJcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHRcdFwic3RhdGVNdXRhYmlsaXR5XCI6IFwidmlld1wiLFxyXG5cdFx0XCJ0eXBlXCI6IFwiZnVuY3Rpb25cIixcclxuXHRcdFwiY29uc3RhbnRcIjogdHJ1ZVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJpbnB1dHNcIjogW10sXHJcblx0XHRcIm5hbWVcIjogXCJnZXRTaGFyZXNcIixcclxuXHRcdFwib3V0cHV0c1wiOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ1aW50MjU2XCJcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHRcdFwic3RhdGVNdXRhYmlsaXR5XCI6IFwidmlld1wiLFxyXG5cdFx0XCJ0eXBlXCI6IFwiZnVuY3Rpb25cIixcclxuXHRcdFwiY29uc3RhbnRcIjogdHJ1ZVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJpbnB1dHNcIjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJpbnRlcm5hbFR5cGVcIjogXCJ1aW50MjU2XCIsXHJcblx0XHRcdFx0XCJuYW1lXCI6IFwicHJpY2VcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ1aW50MjU2XCJcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHRcdFwibmFtZVwiOiBcIk9yZGVyQnV5XCIsXHJcblx0XHRcIm91dHB1dHNcIjogW10sXHJcblx0XHRcInN0YXRlTXV0YWJpbGl0eVwiOiBcInBheWFibGVcIixcclxuXHRcdFwidHlwZVwiOiBcImZ1bmN0aW9uXCIsXHJcblx0XHRcInBheWFibGVcIjogdHJ1ZVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJpbnB1dHNcIjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJpbnRlcm5hbFR5cGVcIjogXCJ1aW50MjU2XCIsXHJcblx0XHRcdFx0XCJuYW1lXCI6IFwidHJhZGVJZFwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInVpbnQyNTZcIlxyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdFx0XCJuYW1lXCI6IFwiVHJhZGVCdXlcIixcclxuXHRcdFwib3V0cHV0c1wiOiBbXSxcclxuXHRcdFwic3RhdGVNdXRhYmlsaXR5XCI6IFwibm9ucGF5YWJsZVwiLFxyXG5cdFx0XCJ0eXBlXCI6IFwiZnVuY3Rpb25cIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJpbnB1dHNcIjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJpbnRlcm5hbFR5cGVcIjogXCJ1aW50MjU2XCIsXHJcblx0XHRcdFx0XCJuYW1lXCI6IFwicHJpY2VcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ1aW50MjU2XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiaW50ZXJuYWxUeXBlXCI6IFwidWludDI1NlwiLFxyXG5cdFx0XHRcdFwibmFtZVwiOiBcImFtb3VudFwiLFxyXG5cdFx0XHRcdFwidHlwZVwiOiBcInVpbnQyNTZcIlxyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdFx0XCJuYW1lXCI6IFwiT3JkZXJTZWxsXCIsXHJcblx0XHRcIm91dHB1dHNcIjogW10sXHJcblx0XHRcInN0YXRlTXV0YWJpbGl0eVwiOiBcIm5vbnBheWFibGVcIixcclxuXHRcdFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiaW5wdXRzXCI6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiaW50ZXJuYWxUeXBlXCI6IFwidWludDI1NlwiLFxyXG5cdFx0XHRcdFwibmFtZVwiOiBcIm9yZGVySWRcIixcclxuXHRcdFx0XHRcInR5cGVcIjogXCJ1aW50MjU2XCJcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHRcdFwibmFtZVwiOiBcIlRyYWRlU2VsbFwiLFxyXG5cdFx0XCJvdXRwdXRzXCI6IFtdLFxyXG5cdFx0XCJzdGF0ZU11dGFiaWxpdHlcIjogXCJwYXlhYmxlXCIsXHJcblx0XHRcInR5cGVcIjogXCJmdW5jdGlvblwiLFxyXG5cdFx0XCJwYXlhYmxlXCI6IHRydWVcclxuXHR9XHJcbl0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiaWctbnVtYmVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=