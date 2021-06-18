(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 375:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ MyApp; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(544);
;// CONCATENATED MODULE: external "react-redux"
var external_react_redux_namespaceObject = require("react-redux");;
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
var toolkit_namespaceObject = require("@reduxjs/toolkit");;
;// CONCATENATED MODULE: ./redux/orders.ts

const ordersSlice = (0,toolkit_namespaceObject.createSlice)({
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
/* harmony default export */ var orders = (ordersSlice.reducer);
;// CONCATENATED MODULE: ./redux/store.ts


/* harmony default export */ var store = ((0,toolkit_namespaceObject.configureStore)({
  reducer: {
    orders: orders
  }
}));
;// CONCATENATED MODULE: ./pages/_app.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class MyApp extends app.default {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_namespaceObject.Provider, {
      store: store,
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    });
  }

}

/***/ }),

/***/ 579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [544], function() { return __webpack_exec__(375); });
module.exports = __webpack_exports__;

})();