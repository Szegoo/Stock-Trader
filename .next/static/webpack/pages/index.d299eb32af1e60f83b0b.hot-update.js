self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./preact/navigation-bar.js":
/*!**********************************!*\
  !*** ./preact/navigation-bar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\sakac\\Desktop\\TradeMarket\\preact\\navigation-bar.js",
    _this = undefined,
    _s = $RefreshSig$();


/* harmony default export */ __webpack_exports__["default"] = (_s(function (_ref) {
  _s();

  var backgroundColor = _ref.backgroundColor,
      color = _ref.color,
      balance = _ref.balance;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isOpen = _useState[0],
      setOpen = _useState[1];

  var toggleOpen = function toggleOpen() {
    setOpen(function (currentState) {
      return !currentState;
    });
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "/",
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "/get-started",
          children: "Get Started"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "/donate",
          children: [balance, " Shares"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: "special",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "/about-us",
          children: "About us"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 41
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "navigation-bar-mobile",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: toggleOpen,
        className: "navigation-toggle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Stock Trader"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this), isOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/",
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/get-started",
            children: "Get Started"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/donate",
            children: "Donate"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/about-us",
            children: "About us"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "exit-button",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            onClick: toggleOpen,
            children: "X"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 53
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("style", {
      children: "\n                div {\n                    background-color green;\n                }\n                .navigation-bar {\n                    color: ".concat(color || "white", ";\n                    margin: 0;\n                    display: flex;\n                    align-items: center;\n                        background-color: ").concat(backgroundColor || "#141414", ";\n                    }\n                    .navigation-bar > li {\n                        list-style-type: none; }\n                        .navigation-bar > li > a {\n                        display: block;\n                        padding: 1em;\n                        color: ").concat(color || "white", ";\n                        text-decoration: none; }\n                        .navigation-bar > li > a:hover {\n                            color: #a61f27; }\n                    .navigation-bar > .special {\n                        margin-left: auto; }\n                    @media (max-width: 450px) {\n                        .navigation-bar {\n                        display: none; } }\n\n                    .navigation-bar-mobile {\n                    display: none; }\n                    @media (max-width: 450px) {\n                        .navigation-bar-mobile {\n                        display: flex; \n                        align-items: center;\n                    } }\n                    .navigation-bar-mobile > .navigation-toggle {\n                        width: fit-content;\n                        height: 50px; }\n                        .navigation-bar-mobile > .navigation-toggle::after {\n                        position: absolute;\n                        right: .5em;\n                        display: block;\n                        color: black;\n                        content: \"\\2261\";\n                        font-size: 2.7rem; }\n                    .navigation-bar-mobile > ul {\n                        animation: move-in .6s linear;\n                        background: green !important;\n                        position: fixed;\n                        top: 0;\n                        right: 0;\n                        left: 0;\n                        margin: 0;\n                        list-style-type: none;\n                        padding: 0;\n                        background-color: ").concat(backgroundColor || "#141414", ";\n                        .navigation-bar-mobile > ul > li {\n                        text-align: center; }\n                        .navigation-bar-mobile > ul > li > a {\n                            display: block;\n                            color: white;\n                            text-decoration: none;\n                            padding: 1em; }\n                        .navigation-bar-mobile > ul .exit-button {\n                        font-weight: 200; }\n                    .navigation-bar-mobile > h1 {\n                        color: black;\n                        top: 0;\n                        margin: .1em;\n                        position: absolute;\n                    }\n\n                    @keyframes move-in {\n                    0% {\n                        transform: translateY(-200px); }\n                    100% {\n                        transform: translateY(0px); } }\n            ")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, _this);
}, "WPi2qa4HrijmrT7XyqmH7MkbZuo="));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJlYWN0L25hdmlnYXRpb24tYmFyLmpzIl0sIm5hbWVzIjpbImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYmFsYW5jZSIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0T3BlbiIsInRvZ2dsZU9wZW4iLCJjdXJyZW50U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsK0RBQWUsbUJBQXlDO0FBQUE7O0FBQUEsTUFBdENBLGVBQXNDLFFBQXRDQSxlQUFzQztBQUFBLE1BQXJCQyxLQUFxQixRQUFyQkEsS0FBcUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsa0JBQzFCQywrQ0FBUSxDQUFDLEtBQUQsQ0FEa0I7QUFBQSxNQUM3Q0MsTUFENkM7QUFBQSxNQUNyQ0MsT0FEcUM7O0FBRXBELE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckJELFdBQU8sQ0FBQyxVQUFBRSxZQUFZO0FBQUEsYUFBSSxDQUFDQSxZQUFMO0FBQUEsS0FBYixDQUFQO0FBQ0gsR0FGRDs7QUFHQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUMsZ0JBQWQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQSwrQkFBSTtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0k7QUFBQSwrQkFBSTtBQUFHLGNBQUksRUFBQyxjQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKLGVBSUk7QUFBQSwrQkFBSTtBQUFHLGNBQUksRUFBQyxTQUFSO0FBQUEscUJBQW1CTCxPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFLSTtBQUFJLGlCQUFTLEVBQUMsU0FBZDtBQUFBLCtCQUF3QjtBQUFHLGNBQUksRUFBQyxXQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQVFJO0FBQUssZUFBUyxFQUFDLHVCQUFmO0FBQUEsOEJBQ0k7QUFBSyxlQUFPLEVBQUVJLFVBQWQ7QUFBMEIsaUJBQVMsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLEVBR0tGLE1BQU0saUJBQ0g7QUFBQSxnQ0FDSTtBQUFBLGlDQUFJO0FBQUcsZ0JBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUEsaUNBQUk7QUFBRyxnQkFBSSxFQUFDLGNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0k7QUFBQSxpQ0FBSTtBQUFHLGdCQUFJLEVBQUMsU0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosZUFJSTtBQUFBLGlDQUFJO0FBQUcsZ0JBQUksRUFBQyxXQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQUtJO0FBQUksbUJBQVMsRUFBQyxhQUFkO0FBQUEsaUNBQTRCO0FBQUcsbUJBQU8sRUFBRUUsVUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKLGVBcUJJO0FBQUEsaUxBS2lCTCxLQUFLLElBQUksT0FMMUIsd0tBU2dDRCxlQUFlLElBQUksU0FUbkQsd1NBZ0JxQkMsS0FBSyxJQUFJLE9BaEI5Qix1bkRBcURnQ0QsZUFBZSxJQUFJLFNBckRuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFvR0gsQ0F6R0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDI5OWViMzJhZjFlNjBmODNiMGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgZGVmYXVsdCAoeyBiYWNrZ3JvdW5kQ29sb3IsIGNvbG9yLCBiYWxhbmNlIH0pID0+IHtcclxuICAgIGNvbnN0IFtpc09wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCB0b2dnbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW4oY3VycmVudFN0YXRlID0+ICFjdXJyZW50U3RhdGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1iYXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5TdG9jayBUcmFkZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCI+SG9tZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvZ2V0LXN0YXJ0ZWRcIj5HZXQgU3RhcnRlZDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvZG9uYXRlXCI+e2JhbGFuY2V9IFNoYXJlczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNwZWNpYWxcIj48YSBocmVmPVwiL2Fib3V0LXVzXCI+QWJvdXQgdXM8L2E+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWJhci1tb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17dG9nZ2xlT3Blbn0gY2xhc3NOYW1lPVwibmF2aWdhdGlvbi10b2dnbGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMT5TdG9jayBUcmFkZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAge2lzT3BlbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL1wiPkhvbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvZ2V0LXN0YXJ0ZWRcIj5HZXQgU3RhcnRlZDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9kb25hdGVcIj5Eb25hdGU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvYWJvdXQtdXNcIj5BYm91dCB1czwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZXhpdC1idXR0b25cIj48YSBvbkNsaWNrPXt0b2dnbGVPcGVufT5YPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZT57YFxyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdmlnYXRpb24tYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtjb2xvciB8fCBcIndoaXRlXCJ9O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7YmFja2dyb3VuZENvbG9yIHx8IFwiIzE0MTQxNFwifTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdmlnYXRpb24tYmFyID4gbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdmlnYXRpb24tYmFyID4gbGkgPiBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3IgfHwgXCJ3aGl0ZVwifTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9uLWJhciA+IGxpID4gYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2E2MWYyNzsgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9uLWJhciA+IC5zcGVjaWFsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdmlnYXRpb24tYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTsgfSB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9uLWJhci1tb2JpbGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdmlnYXRpb24tYmFyLW1vYmlsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9uLWJhci1tb2JpbGUgPiAubmF2aWdhdGlvbi10b2dnbGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubmF2aWdhdGlvbi1iYXItbW9iaWxlID4gLm5hdmlnYXRpb24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxcXDIyNjFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjdyZW07IH1cclxuICAgICAgICAgICAgICAgICAgICAubmF2aWdhdGlvbi1iYXItbW9iaWxlID4gdWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IG1vdmUtaW4gLjZzIGxpbmVhcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZ3JlZW4gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrZ3JvdW5kQ29sb3IgfHwgXCIjMTQxNDE0XCJ9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAubmF2aWdhdGlvbi1iYXItbW9iaWxlID4gdWwgPiBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubmF2aWdhdGlvbi1iYXItbW9iaWxlID4gdWwgPiBsaSA+IGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdmlnYXRpb24tYmFyLW1vYmlsZSA+IHVsIC5leGl0LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7IH1cclxuICAgICAgICAgICAgICAgICAgICAubmF2aWdhdGlvbi1iYXItbW9iaWxlID4gaDEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIG1vdmUtaW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDBweCk7IH1cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH0gfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9