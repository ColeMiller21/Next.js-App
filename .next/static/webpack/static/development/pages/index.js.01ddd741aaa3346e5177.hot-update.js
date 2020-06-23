webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/HomeNavbar.js":
/*!**********************************!*\
  !*** ./components/HomeNavbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\colet\\Desktop\\Projects\\Next.js-App\\components\\HomeNavbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var HomeNavbar = function HomeNavbar() {
  __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    bg: "dark",
    variant: "dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"].Brand, {
    href: "#home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("img", {
    alt: "",
    src: "/logo.svg",
    width: "30",
    height: "30",
    className: "d-inline-block align-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), ' ', "React Bootstrap"));
};

_c = HomeNavbar;
/* harmony default export */ __webpack_exports__["default"] = (HomeNavbar);

var _c;

$RefreshReg$(_c, "HomeNavbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Navbar.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HomeNavbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HomeNavbar */ "./components/HomeNavbar.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\colet\\Desktop\\Projects\\Next.js-App\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Index = function Index() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx(Navbar, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, "Hello"));
};

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWVOYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZU5hdmJhciIsIkluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQixRQUFDLDhEQUFEO0FBQVEsTUFBRSxFQUFDLE1BQVg7QUFBa0IsV0FBTyxFQUFDLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFELENBQVEsS0FBUjtBQUFjLFFBQUksRUFBQyxPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxPQUFHLEVBQUMsRUFEUjtBQUVJLE9BQUcsRUFBQyxXQUZSO0FBR0ksU0FBSyxFQUFDLElBSFY7QUFJSSxVQUFNLEVBQUMsSUFKWDtBQUtJLGFBQVMsRUFBQywwQkFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFPTyxHQVBQLG9CQURKO0FBYUgsQ0FkRDs7S0FBTUEsVTtBQWlCU0EseUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7O0FBR0EsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNoQixTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLENBREo7QUFNSCxDQVBEOztLQUFNQSxLO0FBU1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4wMWRkZDc0MWFhYTMzNDZlNTE3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJ1xyXG5cclxuY29uc3QgSG9tZU5hdmJhciA9ICgpID0+IHtcclxuICAgIDxOYXZiYXIgYmc9XCJkYXJrXCIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIjaG9tZVwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2xvZ28uc3ZnXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgYWxpZ24tdG9wXCJcclxuICAgICAgICAgICAgLz57JyAnfVxyXG4gICAgICBSZWFjdCBCb290c3RyYXBcclxuICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgPC9OYXZiYXI+XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZU5hdmJhcjsiLCJpbXBvcnQgSG9tZU5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVOYXZiYXInO1xyXG5cclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgIDxkaXY+SGVsbG88L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==