(function() {
var exports = {};
exports.id = 941;
exports.ids = [941];
exports.modules = {

/***/ 933:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OrderComponent; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _preact_navigation_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(692);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _truffle_ABI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(148);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(409);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const web3 = new (web3__WEBPACK_IMPORTED_MODULE_4___default())((web3__WEBPACK_IMPORTED_MODULE_4___default().givenProvider));
const contractAddr = '0xdB30697a0ED2bb87e1717f4401731700edbA681F';

const enableMetamask = async id => {
  const accounts = await window.ethereum.enable();
  const account = accounts[0];
  const Market = new web3.eth.Contract(_truffle_ABI__WEBPACK_IMPORTED_MODULE_3__/* .ContractABI */ .p, contractAddr, {
    from: account
  });
  const shares = await Market.methods.getShares().call();
  const order = await Market.methods.orders(id).call();
  return {
    shares,
    order
  };
};

class OrderComponent extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "fillOrder", async () => {
      const {
        id
      } = this.props;
      const {
        order
      } = this.state;
      console.log(order);
      const accounts = await window.ethereum.enable();
      const account = accounts[0];
      const Market = new web3.eth.Contract(_truffle_ABI__WEBPACK_IMPORTED_MODULE_3__/* .ContractABI */ .p, contractAddr, {
        from: account
      }); //if 1 then sell

      console.log(order.orderType);

      if (order.orderType === "0") {
        console.log('trade buy');
        await Market.methods.TradeBuy(id).send();
      } else if (order.orderType === "1") {
        console.log('radi');
        await Market.methods.TradeSell(id).send({
          from: account,
          value: order.price
        });
      }
    });
  }

  static async getInitialProps({
    req,
    res,
    query
  }) {
    console.log(query.id);
    return {
      id: query.id
    };
  }

  componentDidMount() {
    const {
      id
    } = this.props;
    enableMetamask(id).then(data => {
      this.setState({
        order: data.order,
        shares: data.shares
      });
    });
  }

  render() {
    const {
      order,
      shares
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_preact_navigation_bar__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        balance: 0,
        backgroundColor: "white",
        color: "#21325b"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "order-window",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
          children: [order.price * Math.pow(10, -18), "ETH"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
          children: ["Type: ", order.orderType == "1" ? "Buy" : "Sell"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
          children: ["Ammount: ", order.amount]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
          children: ["Order Creator: ", order.from]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
          onClick: this.fillOrder,
          children: "Fill in the order"
        })]
      })]
    });
  }

}

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 409:
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
var __webpack_exports__ = __webpack_require__.X(0, [466], function() { return __webpack_exec__(933); });
module.exports = __webpack_exports__;

})();