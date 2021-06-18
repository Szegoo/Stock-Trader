exports.id = 466;
exports.ids = [466];
exports.modules = {

/***/ 692:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ __webpack_exports__["Z"] = (({
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "nav",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
      className: "navigation-bar",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        children: "Stock Trader"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          href: "/",
          children: "Home"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          href: "/get-started",
          children: "Get Started"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
          href: "/donate",
          children: [balance, " Shares"]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: "special",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          href: "/about-us",
          children: "About us"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "navigation-bar-mobile",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        onClick: toggleOpen,
        className: "navigation-toggle"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        children: "Stock Trader"
      }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: "/",
            children: "Home"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: "/get-started",
            children: "Get Started"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: "/donate",
            children: "Donate"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: "/about-us",
            children: "About us"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          className: "exit-button",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            onClick: toggleOpen,
            children: "X"
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
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
    })]
  });
});

/***/ }),

/***/ 148:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": function() { return /* binding */ ContractABI; }
/* harmony export */ });
const ContractABI = [{
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
}];

/***/ })

};
;